import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {SuperTabsModule} from "ionic2-super-tabs";
import {SlimLoadingBarModule} from "ng2-slim-loading-bar";
import {IonicModule} from "ionic-angular";

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SuperTabsModule,
    SlimLoadingBarModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    IonicModule,
    SuperTabsModule,
    SlimLoadingBarModule
  ],
})
export class SharedModule {
}
