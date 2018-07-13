import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HotCodePushService} from "../../hot-code-push/hot-code-push.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public hotCodePushService: HotCodePushService) {

  }

  checkVersion(){
    this.hotCodePushService.checkVersion();
  }

}
