import {Component} from '@angular/core';
import { File,Entry } from '@ionic-native/file';
import {FileTransferObject, FileUploadResult} from "@ionic-native/file-transfer";


export class MyFile {
  checked:boolean;
  entry:Entry;
}

@Component({
  selector: 'page-show-files',
  templateUrl: 'show-local-files.html'
})

export class ShowLocalFilesPage{

  noCloud:MyFile[] = []; // noCloud文件夹

  endpointUrl:'';

  constructor(public file: File,
              public fileTransferObject:FileTransferObject) {

  }

  ionViewWillEnter() {
    this.listStorageDir();
  }

  listStorageDir(){
    this.file.listDir(this.file.dataDirectory, '').then((entrys:Entry[])=>{
      entrys.forEach((e)=>{
        this.noCloud.push({
          checked:false,
          entry:e,
        })
      });
      console.log(entrys);
    })
  }

  sendFile(){
    console.log(this.noCloud);
    this.noCloud.forEach((myFile:MyFile)=>{
      if(myFile.checked){
        const entry = myFile.entry;
        this.fileTransferObject.upload(entry.nativeURL, this.endpointUrl).then((result) => {
            console.log(result)
        },(err) => {
            console.log(err);
        })
      }
    })
  }
}
