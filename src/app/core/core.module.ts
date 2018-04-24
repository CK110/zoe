import {ErrorHandler, NgModule, Optional, SkipSelf} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SplashScreen} from "@ionic-native/splash-screen";
import {StatusBar} from "@ionic-native/status-bar";
import {IonicErrorHandler} from "ionic-angular";
import {SuperTabsModule} from "ionic2-super-tabs";
import {SlimLoadingBarModule} from "ng2-slim-loading-bar";
import {CodePushHelper} from "./native/code-push-helper";
import {IosHelper} from "./native/ios-helper";

@NgModule({
  imports: [
    CommonModule,
    SlimLoadingBarModule.forRoot(),
    SuperTabsModule.forRoot(),
  ],
  providers: [
    StatusBar,
    SplashScreen,

    CodePushHelper,
    IosHelper,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`CoreModule has already been loaded. Import Core modules in the AppModule only.`);
    }
  }
}
