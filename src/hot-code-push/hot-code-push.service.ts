import {Injectable} from '@angular/core';
import {HotCodePush, HotCodePushVersion} from "@ionic-native/hot-code-push";

@Injectable()
export class HotCodePushService {

  constructor(private hotCodePush: HotCodePush) {

  }

  /**
   * 检查是否有更新
   */
  checkVersion(){
    this.hotCodePush.isUpdateAvailableForInstallation().then((HotCodePushUpdate)=>{
      console.log('isUpdateAvailableForInstallation');
      console.log(HotCodePushUpdate);
    });

    this.hotCodePush.getVersionInfo().then((HotCodePushVersion)=>{
      console.log(HotCodePushVersion);
    })
  }
}
