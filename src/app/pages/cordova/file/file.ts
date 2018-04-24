import {Component} from '@angular/core';
import {Entry, File} from '@ionic-native/file';
import {HttpClient, HttpEventType} from "@angular/common/http";
import {FileTransferObject} from "@ionic-native/file-transfer";
import {NavController} from "ionic-angular";
import {ShowFilesPage} from "./show-files/show-files";
import {Observable} from "rxjs/Observable";
import {ShowLocalFilesPage} from "./show-local-files/show-local-files";

@Component({
  selector: 'page-file',
  templateUrl: 'file.html'
})

export class FilePage {

  downloadUrl:string='https://ws2.sinaimg.cn/large/006tKfTcgy1fodi24dcpdj31kw26u4qs.jpg';
  filename:string='006tKfTcgy1fodi24dcpdj31kw26u4qs';

  constructor(public file: File,
              public fileTransferObject:FileTransferObject,
              public http:HttpClient,
              public navCtrl:NavController) {

  }


  listDirectory(){
    // debugger;
    console.log('applicationDirectory:',this.file.applicationDirectory.split('Application')[1]);
    console.log('applicationStorageDirectory:',this.file.applicationStorageDirectory.split('Application')[1]);
    console.log('dataDirectory:',this.file.dataDirectory.split('Application')[1]);
    console.log('cacheDirectory:',this.file.cacheDirectory.split('Application')[1]);


    console.log('android-externalApplicationStorageDirectory:',this.file.externalApplicationStorageDirectory);
    console.log('android-externalDataDirectory:',this.file.externalDataDirectory);
    console.log('android-externalCacheDirectory:',this.file.externalCacheDirectory);
    console.log('android-externalRootDirectory:',this.file.externalRootDirectory);

    console.log('ios-tempDirectory:',this.file.tempDirectory.split('Application')[1]);
    console.log('ios-syncedDataDirectory:',this.file.syncedDataDirectory.split('Application')[1]);
    console.log('ios-documentsDirectory:',this.file.documentsDirectory.split('Application')[1]);
  }

  fileTransferDownLoad(){
    // const url = 'https://ws2.sinaimg.cn/large/006tKfTcgy1fodi24dcpdj31kw26u4qs.jpg';
    const url = 'http://192.168.2.6:8099/rxjs.pdf';
    this.fileTransferObject.download(this.downloadUrl, this.file.dataDirectory + '/rxjs.pdf').then((entry) => {
      console.log(entry);
      console.log('download complete: ' + entry.toURL());
    }, (error) => {
      console.log(error);
    });
  }


  toListFilesPage(){
    this.navCtrl.push(ShowFilesPage);
  }

  toListLocalFilesPage(){
    this.navCtrl.push(ShowLocalFilesPage);
  }

  // 检查文件是否存在
  // fileExist(file:ZJFile):any{
  //   const filename = file.filename;
  //   const result$ = Observable.create((observer)=>{
  //     this.file.checkFile(this.file.dataDirectory,filename).then((res)=>{
  //       observer.next(false);
  //       observer.complete();
  //     }).catch((error)=>{
  //       observer.next(false);
  //       observer.complete();
  //     })
  //   });
  //   return result$;
  // }

  // 检查文件是否存在(文件多的时候很卡)
  // fileExist2(){
  //   const filename = 'file.jpg';
  //   const result$ = Observable.create((observer)=>{
  //     this.file.checkFile(this.file.dataDirectory,filename).then((res)=>{
  //       observer.next(true);
  //       observer.complete();
  //     }).catch((error)=>{
  //       observer.next(false);
  //       observer.complete();
  //     })
  //   });
  //
  //   result$.subscribe((result)=>{
  //     console.log(result);
  //   })
  // }



}
