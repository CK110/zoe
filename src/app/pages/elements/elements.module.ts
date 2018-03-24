import {NgModule} from '@angular/core';
import {SuperTabPage} from "./super-tab/super-tab";
import {Page2Page} from "./super-tab/page2/page2";
import {Page1Page} from "./super-tab/page1/page1";
import {Page3Page} from "./super-tab/page3/page3";
import {SharedModule} from "../../shared/shared.module";

export const SUPER_TAB_PAGES = [
  SuperTabPage,
  Page1Page,
  Page2Page,
  Page3Page,
]



@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [...SUPER_TAB_PAGES],
  entryComponents: [...SUPER_TAB_PAGES],
  exports: [...SUPER_TAB_PAGES],

})
export class ElementsModule {
}
