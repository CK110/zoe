import { Injectable } from '@angular/core';


@Injectable()
export class Utils {

    /**
     * 按照格式化字符串进行日期格式化
     * @param date
     * @param format eg:yyyy-MM-dd,yyyy-mm,yyyy-MM-dd hh:mm:ss,yyyy-mm-dd hh:mm
     */
    fmtDate(date:Date, format:string):string{
        format = format.trim();
        if(!format.trim())
            return "";
        let dayFormat="";
        let timeFormat="";
        if(format.indexOf(" ") > 0){
            dayFormat = format.split(" ")[0];
            timeFormat = format.split(" ")[1];
        }else{
            if(format.match(/[yMd]/g))
                dayFormat = format;
            else
                timeFormat = format;
        }

        let sepDay = dayFormat.replace(/[yMd]/g,"")?dayFormat.replace(/[yMd]/g,"").substr(0,1):"";
        let sepTime = timeFormat.replace(/[hHms]/g,"")?timeFormat.replace(/[hHms]/g,"").substr(0,1):"";

        let month = date.getMonth() + 1;
        let sMonth = "";

        let day = date.getDate();
        let sDay = "";

        let hour = date.getHours();
        let sHour = "";

        let minute = date.getMinutes();
        let sMinute = "";

        let second = date.getSeconds();
        let sSecond = "";

        if (month >= 1 && month <= 9) {
            sMonth = "0" + month;
        } else {
            sMonth = "" + month
        }
        if (day >= 0 && day <= 9) {
            sDay = "0" + day;
        }else{
            sDay = "" + day;
        }
        if (hour >= 0 && hour <= 9) {
            sHour = "0" + hour;
        }else{
            sHour = "" + hour;
        }
        if (minute >= 0 && minute <= 9) {
            sMinute = "0" + minute;
        }else{
            sMinute = "" + minute;
        }
        if (second >= 0 && second <= 9) {
            sSecond = "0" + second;
        }else{
            sSecond = "" + second;
        }
        let sYear = date.getFullYear();

        //yyyy-MM-dd hh:mm:ss
        let sDate = ""
        if(format.includes("yyyy"))
            sDate += sYear+sepDay;
        if(format.includes("MM"))
            sDate += sMonth+sepDay;
        if(format.includes("dd"))
            sDate += sDay;
        if(sepDay)
            sDate = sDate.endsWith(sepDay)?sDate.substr(0,sDate.lastIndexOf(sepDay)):sDate;

        let sTime = "";
        if(format.includes("hh") || format.includes("HH"))
            sTime += sHour+sepTime;
        if(format.includes("mm"))
            sTime += sMinute+sepTime;
        if(format.includes("ss"))
            sTime += sSecond;
        if(sepTime)
            sTime = sTime.endsWith(sepTime)?sTime.substr(0,sTime.lastIndexOf(sepTime)):sTime;

        let sDateTime = "";
        if(sDate)
            sDateTime+=sDate+" ";
        sDateTime+=sTime;
        return sDateTime.trim();
    }

    /**
     * yyyy-MM-dd hh:mm:ss
     * @param date
     */
    fmtYMDHMS(date:Date):string{
        return this.fmtDate(date,"yyyy-MM-dd hh:mm:ss")
    }
    /**
    * yyyy
    * @param date
    */
    fmtY(date:Date):string{
     return this.fmtDate(date,"yyyy")
    }
  /**
   * yy/MM/dd
   * @param date
   */
    fmtYYMD(date:Date):string{
      return this.fmtDate(date,"yyyy/MM/dd").substring(2)
    }
    /**
     * yyyy-MM-dd
     * @param date
     */
    fmtYMD(date:Date):string{
        return this.fmtDate(date,"yyyy-MM-dd");
    }

  /**
   * 获取上个月的今天日期
   */
  getLastMonthToday():string{
    var date = new Date();

    if(date.getMonth() == 0){
      date.setMonth(11);
      date.setFullYear(date.getFullYear()-1);
    }else{
      date.setMonth(date.getMonth()-1);
    }
    if((date.getDate() == 29 ||date.getDate() == 30 ||date.getDate() == 31)&& date.getMonth() == 2 ){
      date.setDate(28);
    }else if(date.getDate() == 31 ||date.getDate() == 30){
      date.setDate(30);
    }
    return this.fmtDate(date,"yyyy-MM-dd");
  }

    /**
     * MM/dd
     * @param date
     */
    fmtMD(date:Date):string{
        return this.fmtDate(date,"MM/dd");
    }

    /**
     * HH/mm
     * @param date
     */
    fmtHm(date:Date):string{
        return this.fmtDate(date,"HH:mm");
    }

    /**
     * yyyy-MM-dd hh:mm:ss
     */
    getYMDHMS():string{
        var date = new Date();
        return this.fmtDate(date,"yyyy-MM-dd hh:mm:ss");
    }

    /**
     * yyyy-MM-dd
     */
    getYMD():string{
        var date = new Date();
        return this.fmtDate(date,"yyyy-MM-dd");
    }

    /**
     * yyyy-MM
     */
    getYM():string{
        var date = new Date();
        return this.fmtDate(date,"yyyy-MM");
    }
  /**
   * yyyy
   */
    getY():string{
      var date = new Date();
      return this.fmtDate(date,"yyyy");
    }

    /**
     * 时间计算，返回 yyyy-MM-dd hh:mm:ss字符串
     * @param d 原时间
     * @param type 类型y/M/d/h/m/s
     * @param num
     */
    addDate(d:string, type:string, num:number):string
    {
        let date:Date = new Date(d);
        switch(type)
        {
            case "y": case "year": date.setFullYear(date.getFullYear()+num); break;
            case "M": case "month": date.setMonth(date.getMonth()+num); break;
            case "d": case "day": date.setDate(date.getDate()+num); break;
            case "h": case "hour": date.setHours(date.getHours()+num); break;
            case "m": case "minute": date.setMinutes(date.getMinutes()+num); break;
            case "s": case "second": date.setSeconds(date.getSeconds()+num); break;
            default: return("invalid");
        }
        return this.fmtYMDHMS(date);
    }
    /**
     * 时间计算，返回日期对象
     * @param date 原时间
     * @param type 类型y/M/d/h/m/s
     * @param num
     */
    addDate2(date:Date, type:string, num:number):Date
    {
        switch(type)
        {
            case "y": case "year": date.setFullYear(date.getFullYear()+num); break;
            case "M": case "month": date.setMonth(date.getMonth()+num); break;
            case "d": case "day": date.setDate(date.getDate()+num); break;
            case "h": case "hour": date.setHours(date.getHours()+num); break;
            case "m": case "minute": date.setMinutes(date.getMinutes()+num); break;
            case "s": case "second": date.setSeconds(date.getSeconds()+num); break;
            default: return null;
        }
        return date;
    }

    /**
     * 生成固定长度的随机字符串
     * @param length 长度
     */
    randomWord(length:number){
        let word = "",
            arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        for(var i=0; i<length; i++){
            //使index能取0~数组长度之间的任意一个值
            let index = Math.round(Math.random() * (arr.length-1));
            word += arr[index];
        }
        return word;
    }


    ///格式化文件大小
    formatFileSize(fileSizeOrigin: any): string {
      let fileSize: number;
      if (typeof fileSizeOrigin == "string") {
        if (fileSizeOrigin.length > 0) {
          fileSize = parseInt(fileSizeOrigin, 10);
        }
      } else if (typeof fileSizeOrigin == "number") {
        fileSize = fileSizeOrigin;
      } else {
        return '0B';
      }

      if (fileSize < 1024) {
        return fileSize + 'B';
      } else if (fileSize < (1024*1024)) {
        let temp = fileSize / 1024;
        return temp.toFixed(2) + 'KB';
      } else if (fileSize < (1024*1024*1024)) {
        let temp = fileSize / (1024*1024);
        return temp.toFixed(2) + 'MB';
      } else {
        let temp = fileSize / (1024*1024*1024);
        return temp.toFixed(2) + 'GB';
      }
    }

  //获取文件Mime类型
  getFileMimeType(fileType: string): string {
    let mimeType: string = '';

    switch (fileType) {
      case 'txt':
        mimeType = 'text/plain';
        break;
      case 'docx':
        mimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
        break;
      case 'doc':
        mimeType = 'application/msword';
        break;
      case 'pptx':
        mimeType = 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
        break;
      case 'ppt':
        mimeType = 'application/vnd.ms-powerpoint';
        break;
      case 'xlsx':
        mimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
        break;
      case 'xls':
        mimeType = 'application/vnd.ms-excel';
        break;
      case 'zip':
        mimeType = 'application/x-zip-compressed';
        break;
      case 'rar':
        mimeType = 'application/octet-stream';
        break;
      case 'pdf':
        mimeType = 'application/pdf';
        break;
      case 'jpg':
        mimeType = 'image/jpeg';
        break;
      case 'png':
        mimeType = 'image/png';
        break;
      default:
        mimeType = 'application/' + fileType;
        break;
    }
    return mimeType;
  }

  //获取文件类型
  getFileType(fileName: string): string {
    let pos = fileName.lastIndexOf('.');
    if (pos >= 0) {
      return fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length).toLowerCase();
    } else {
      return "";
    }
  }

}
