import {SharedModule} from "../../shared/shared.module";
import {NgModule} from "@angular/core";
import {FileModule} from "./file/file.module";


@NgModule({
  imports: [
    SharedModule,
    FileModule
  ],
  declarations: [
  ],
  entryComponents: [
  ],
  exports: [
    FileModule
  ],
})
export class CordovaModule {
}
