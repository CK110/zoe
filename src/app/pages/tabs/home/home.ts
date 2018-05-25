import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SuperTabPage} from "../../elements/super-tab/super-tab";
import {TablePage} from "../../elements/table/table";
import {FilePage} from "../../cordova/file/file";
import {LoadingPage} from "../../elements/loading/loading";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pushPage = SuperTabPage;

  constructor(public navCtrl: NavController) {


  }

  toPage(name:string){
    if(name === 'super-tab'){
      this.navCtrl.push(SuperTabPage);
    }
    if(name === 'table'){
      this.navCtrl.push(TablePage);
    }
    if(name === 'file'){
      this.navCtrl.push(FilePage);
    }
    if(name === 'loading'){
      this.navCtrl.push(LoadingPage);
    }
  }

}
