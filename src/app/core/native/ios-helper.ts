import {Injectable} from '@angular/core';
declare var window:any;

@Injectable()
export class IosHelper {

  constructor() {
  }

  /**
   * 是否是iphoneX
   */

  isIphoneX() {
    return /iphone/gi.test(navigator.userAgent) && (screen.height == 812 && screen.width == 375)
  }


  /**
   * 是否使用的是WKWebview
   */
  isWKWebWiew() {
    let isWKWebView = false;
    if (window.webkit && window.webkit.messageHandlers) {
      isWKWebView = true;
    }
    return isWKWebView
  }
}
