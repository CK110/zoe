import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";

/**
 * Generated class for the LoadingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html',
})
export class LoadingPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingCtrl:LoadingController,
              public http:HttpClient) {
  }

  ionViewDidLoad(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...',
      // showBackdrop:false,
      cssClass:'http-loading'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 1000);
  }

}
