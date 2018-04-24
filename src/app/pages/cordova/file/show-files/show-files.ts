import {Component} from '@angular/core';
import { File,Entry } from '@ionic-native/file';
import {FileTransferObject, FileUploadResult} from "@ionic-native/file-transfer";
import {REMOTEFILES} from "../serivce/data";
import {FileOpener} from "@ionic-native/file-opener";

export class ZJFile {
  filename:string;    // 文件全名
  filecatalog:string; // 文件存储目录
  contenttype:string; // 文件类型
  filesize:string;    // 文件大小
  downloaded?:boolean; // 是否已经下载
}

@Component({
  selector: 'page-show-files',
  templateUrl: 'show-files.html'
})

export class ShowFilesPage{

  files:ZJFile[]=[]; // 远程文件

  constructor(public file: File,
              private fileOpener: FileOpener,
              public fileTransferObject:FileTransferObject) {

  }

  async ionViewWillEnter() {
    await this.file.listDir(this.file.dataDirectory, '').then((entrys:Entry[])=>{
      let names = []
      entrys.forEach((entry)=>{
        names.push(entry.name);
      });

      REMOTEFILES.forEach((remoteFile)=>{
        if(names.indexOf(remoteFile.filename) >= 0){
          remoteFile['downloaded']=true;
        }else{
          remoteFile['downloaded']=false;
        }
        this.files.push(remoteFile);
      })
    })
  }

  // 根据文件名判断是否存在
  // fileExist3(fileName:string){
  //   console.log(this.localFiles);
  //   let result:boolean =false;
  //   this.localFiles.forEach((file:Entry)=>{
  //     if(file.name === fileName ){
  //       result = true;
  //     }
  //   });
  //   return result
  // }

  downloadFile(file:ZJFile){
    // const downloadurl = FILE_SERVER_URL + tx + "?fileid=" + this.fileid + "&token=" + this.user.token;
    const downloadurl ='http://192.168.2.6:8099/rxjs.pdf';
    this.fileTransferObject.download(downloadurl, this.file.dataDirectory + '/rxjs.pdf').then((result:any)=>{
      file['downloaded']=true;

      this.fileOpener.open(this.file.dataDirectory+'/rxjs.pdf','application/pdf').then((res)=>{
        console.log(res);
      }).catch((error)=>{
        console.log(error);
      })

    }).catch((error)=>{
      console.log(error);
    })

  }

  viewFile(file:ZJFile){
    console.log('------viewFile-------');
    this.file.listDir(this.file.dataDirectory, '').then((entrys:Entry[])=>{
      const entry = entrys.find((entry)=> entry.name == file.filename );
      this.fileOpener.open(entry.nativeURL,file.contenttype).then((res)=>{
        console.log(res);
      }).catch((error)=>{
        console.log(error);
      })
    })
  }


}
