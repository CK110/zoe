import {Injectable} from '@angular/core';
import {HotCodePush} from "@ionic-native/hot-code-push";

@Injectable()
export class HotCodePushService {

  constructor(private hotCodePush: HotCodePush) {

  }

  /**
   * 检查是否有更新
   */
  checkVersion(){
    this.hotCodePush.isUpdateAvailableForInstallation().then((HotCodePushUpdate)=>{
      console.log(HotCodePushUpdate);
    })
  }
}
