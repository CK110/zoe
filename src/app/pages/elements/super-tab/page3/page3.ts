import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html'
})
export class Page3Page {

  get M(){
    console.log(this.navParams.data);
    return this.navParams.data;
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

}
