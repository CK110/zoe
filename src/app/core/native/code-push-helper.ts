import {Injectable} from '@angular/core';
import {CodePush, InstallMode, SyncStatus} from "@ionic-native/code-push";
import {LoadingController, Platform} from "ionic-angular";
import {MessageService} from "../util/message-service";

@Injectable()
export class CodePushHelper {

  constructor(public codePush: CodePush,
              public loadCtrl:LoadingController,
              public messageService: MessageService,
              public platform:Platform) {
  }

  /***
   * 从后台切换到主界面检测热更新
   *
   */
  assertCodePush(){
    if (this.isMobile()) {
      this.platform.resume.subscribe(() =>{
        this.sync();
      })
    }else{
      console.log('非手机模式,热更新无法使用');
    }
  }

  /**
   * 热更新
   * 已经是最新: 5 - 0
   * 热更新:  5检查  -7 下载中 - 8 解压安装中 - 1安装完成
   */
  private sync() {
    let percentage = 0;
    this.codePush.sync({
      updateDialog: {
        optionalIgnoreButtonLabel: '稍后',
        optionalInstallButtonLabel: '立即更新',
        optionalUpdateMessage: '有新版本了，是否更新？',
        updateTitle: '更新提示'
      },
      installMode: InstallMode.IMMEDIATE
    },(progress) => {
      percentage = progress.receivedBytes/progress.totalBytes * 100;
      console.log("热更新下载进度:"+percentage+"%");
    }).subscribe((syncStatus) => {

      let downloading = this.loadCtrl.create({
        content:`<span>更新下载中，请稍后...</span>`
      });

      switch (syncStatus){
        case SyncStatus.DOWNLOADING_PACKAGE:
          downloading.present({duration:5});
          break;

        case SyncStatus.INSTALLING_UPDATE:
          console.log("下载完毕，正在安装");
          downloading.setContent('下载完毕，正在安装。。。');
          break;

        case SyncStatus.UPDATE_INSTALLED:
          downloading.dismiss();
          console.log("更新完成，即将重启应用");
          this.messageService.toast("更新完成，即将重启应用");
          this.codePush.restartApplication().catch((reason)=>{
            console.log(reason);
          });
          break;

        case SyncStatus.ERROR:
          downloading.dismiss();
          this.messageService.toast("更新过程中出错");
          break;
      }
      console.log(syncStatus);
    });
  }

  /**
   * 是否真机环境
   */
  private isMobile(): boolean {
    return this.platform.is('mobile') && !this.platform.is('mobileweb');
  }


}
