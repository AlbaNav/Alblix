import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalComponent } from './page/global/global.component';
import { FilmsComponent } from './page/global/components/films/films.component';
import { HeroComponent } from './page/global/components/hero/hero.component';
import { NavbarComponent } from './page/global/components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    GlobalComponent,
    FilmsComponent,
    HeroComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
