import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { CookiesComponent } from './cookies/cookies.component';
import { IndexBannerComponent } from './index-banner/index-banner.component';
import { IndexCountingComponent } from './index-counting/index-counting.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    ScrollToTopComponent,
    CookiesComponent,
    IndexBannerComponent,
    IndexCountingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
