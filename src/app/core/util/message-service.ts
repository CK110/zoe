import { Injectable } from "@angular/core";
import { ToastController, AlertController } from 'ionic-angular';


@Injectable()
export class MessageService {

  constructor(private toastCtrl: ToastController,
              private alertCtrl: AlertController) {
  }

  alert(message: string, okHandler?:()=>void|any): void {
    okHandler = okHandler ? okHandler : ()=>{};
    this.alertCtrl.create({
      title: "提示消息",
      message: message,
      buttons: [{text: '确定', handler: okHandler}],
      enableBackdropDismiss: false
    }).present();
  }

  confirm(message: string,okHandler?:(value: any) => boolean | void,cancelHandler?:(value: any) => boolean | void): void {
    okHandler = okHandler || (()=>{});
    cancelHandler = cancelHandler || (()=>{});
    this.alertCtrl.create({
      title: '请确认',
      message: message,
      buttons: [
        {
          text: '取消',
          handler: cancelHandler
        },
        {
          text: '确定',
          handler: okHandler
        }
      ]
    }).present();
  }

  toast(message: string, duration?: number, position?: string) {
    duration = duration || 1000;
    position = position || "middle";
    this.toastCtrl.create({
      message: message,
      duration: duration,
      position: position
    }).present();
  }
}
