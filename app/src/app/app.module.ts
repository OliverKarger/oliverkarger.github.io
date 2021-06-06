import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CookieModule} from 'ngx-cookie';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CookieModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
/**
 * @description App Class
 * @author Oliver Karger <kmaster@oliver-karger.de>
 * @date 04/06/2021
 * @export
 * @class AppModule
 */
export class AppModule {}
