import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {SlimLoadingBarService} from "ng2-slim-loading-bar";

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2Page {

  m:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public slimLoadingBarService: SlimLoadingBarService ) {

    this.m = this.navParams.data;


  }
}
