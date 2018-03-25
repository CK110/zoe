import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule} from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from './pages/tabs/about/about';
import { ContactPage } from './pages/tabs/contact/contact';
import { HomePage } from './pages/tabs/home/home';
import { TabsPage } from './pages/tabs/tabs';
import {CoreModule} from "./core/core.module";
import {ElementsModule} from "./pages/elements/elements.module";


@NgModule({
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages: true,       // 隐藏非rootPage的tab标签
      mode: 'ios',                    // 样式统一ios
      backButtonText: '',             //返回按钮只显示图标
    }),
    CoreModule,
    ElementsModule
  ],
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
  ],
  providers: []
})
export class AppModule {}
