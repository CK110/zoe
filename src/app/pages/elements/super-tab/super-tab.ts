import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Page1Page} from "./page1/page1";
import {Page2Page} from "./page2/page2";
import {Page3Page} from "./page3/page3";
import {SlimLoadingBarService} from "ng2-slim-loading-bar";

@Component({
  selector: 'page-super-tab',
  templateUrl: 'super-tab.html',
})
export class SuperTabPage {

  page1: any = Page1Page;
  page2: any = Page2Page;
  page3: any = Page3Page;


  xxxx:any={
    m:'2'
  }
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public slimLoadingBarService: SlimLoadingBarService ) {

  }

  ionViewDidEnter(){
    this.slimLoadingBarService.start();

    // setTimeout(()=>{
    //   this.slimLoadingBarService.complete();
    // },5000)

    let i=0;

    setInterval(()=>{

      this.xxxx['m'] ={
        x:i++
      }
    },1000)

  }

}
