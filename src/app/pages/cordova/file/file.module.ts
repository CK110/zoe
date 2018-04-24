import {NgModule} from "@angular/core";
import {SharedModule} from "../../../shared/shared.module";
import {FilePage} from "./file";
import {ShowFilesPage} from "./show-files/show-files";
import {ShowLocalFilesPage} from "./show-local-files/show-local-files";
import {FileTransferObject} from "@ionic-native/file-transfer";
import {FileOpener} from "@ionic-native/file-opener";
import {File} from "@ionic-native/file";

const pages = [
  FilePage,
  ShowFilesPage,
  ShowLocalFilesPage
]

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ...pages
  ],
  entryComponents: [
    ...pages
  ],
  exports: [
    ...pages
  ],
  providers:[
    File,
    FileTransferObject,
    FileOpener,
  ]
})
export class FileModule {
}
