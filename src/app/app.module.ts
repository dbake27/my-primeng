import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';

//primeng imports
import { MenuModule } from 'primeng/menu';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MenubarModule} from 'primeng/menubar';
//
import { MenubarComponent } from './menubar/menubar.component'

@NgModule({
  declarations: [
    AppComponent,
    MainmenuComponent,
    MenubarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    BrowserAnimationsModule,
    MenubarModule
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
