import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';

//primeng imports
import { MenuModule } from 'primeng/menu';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"

@NgModule({
  declarations: [
    AppComponent,
    MainmenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    BrowserAnimationsModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
