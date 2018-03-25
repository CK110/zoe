import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SuperTabPage} from "../../elements/super-tab/super-tab";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pushPage = SuperTabPage;

  constructor(public navCtrl: NavController) {


  }

  toPage(){
    this.navCtrl.push(SuperTabPage);
  }

}
