import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {SlimLoadingBarService} from "ng2-slim-loading-bar";
import {ENV} from '@env/environment'

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1Page {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public slimLoadingBarService: SlimLoadingBarService ) {

    console.log(ENV.mode);
  }




}
