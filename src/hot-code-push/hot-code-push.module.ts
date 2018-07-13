import {ModuleWithProviders, NgModule} from '@angular/core';
import {HotCodePushService} from "./hot-code-push.service";
import {CommonModule} from "@angular/common";
import {HotCodePush} from "@ionic-native/hot-code-push";

@NgModule({
  imports: [CommonModule],
  exports: [],
})
export class HotCodePushModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: HotCodePushModule,
      providers: [
        HotCodePush,
        {provide: HotCodePushService, useClass: HotCodePushService, deps: [HotCodePush]},
      ]
    };
  }
}
