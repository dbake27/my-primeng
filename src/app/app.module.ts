//app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import {HttpClientModule} from '@angular/common/http';

//primeng imports

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MenubarModule} from 'primeng/menubar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuModule, PanelModule, ChartModule, InputTextModule, ButtonModule, InputMaskModule, InputTextareaModule, EditorModule, CalendarModule, RadioButtonModule, FieldsetModule, DropdownModule, MultiSelectModule, ListboxModule, SpinnerModule, SliderModule, RatingModule, DataTableModule, ContextMenuModule, TabViewModule, DialogModule, StepsModule, ScheduleModule, TreeModule, GMapModule, DataGridModule, TooltipModule, ConfirmationService, ConfirmDialogModule, GrowlModule, DragDropModule, GalleriaModule } from 'primeng/primeng';
import {TabMenuModule} from 'primeng/tabmenu';  

// app compts
import { MenubarComponent } from './menubar/menubar.component';
import { ProjectsComponent } from './projects/projects.component';
import { FielderrorsComponent } from './fielderrors/fielderrors.component';
import { InputTextDemoComponent } from './input-text-demo/input-text-demo.component';
import { FlexgridComponent } from './flexgrid/flexgrid.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { InputgroupComponent } from './inputgroup/inputgroup.component';
import { MastersearchComponent } from './mastersearch/mastersearch.component';
import { TabmenuComponent } from './tabmenu/tabmenu.component';
import { IddropdownComponent } from './iddropdown/iddropdown.component';
import { GroupiddropdownComponent } from './groupiddropdown/groupiddropdown.component';
import { VendordropdownComponent } from './vendordropdown/vendordropdown.component';
import { InvoicedropdownComponent } from './invoicedropdown/invoicedropdown.component';
import { VoucherdropdownComponent } from './voucherdropdown/voucherdropdown.component';
import { PodropdownComponent } from './podropdown/podropdown.component';
import { NctmasterformComponent } from './nctmasterform/nctmasterform.component';
import { TestobservComponent } from './testobserv/testobserv.component';
import { Observ1Component } from './observ1/observ1.component';
import { Observ2Component } from './observ2/observ2.component'


@NgModule({
  declarations: [
    AppComponent,
    MainmenuComponent,
    MenubarComponent,
    ProjectsComponent,
    FielderrorsComponent,
    InputTextDemoComponent,
    FlexgridComponent,
    DropdownComponent,
    InputgroupComponent,
    MastersearchComponent,
    TabmenuComponent,
    IddropdownComponent,
    GroupiddropdownComponent,
    VendordropdownComponent,
    InvoicedropdownComponent,
    VoucherdropdownComponent,
    PodropdownComponent,
    NctmasterformComponent,
    TestobservComponent,
    Observ1Component,
    Observ2Component
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MenuModule,
    BrowserAnimationsModule,
    MenubarModule,
    FormsModule,
    PanelModule,
    ChartModule,
    InputTextModule,
    ButtonModule,
    InputMaskModule,
    InputTextareaModule,
    EditorModule,
    CalendarModule,
    RadioButtonModule,
    FieldsetModule,
    DropdownModule,
    MultiSelectModule,
    ListboxModule,
    SpinnerModule,
    SliderModule,
    RatingModule,
    DataTableModule,
    ContextMenuModule,
    TabViewModule,
    DialogModule,
    StepsModule,
    ScheduleModule,
    TreeModule,
    GMapModule,
    DataGridModule,
    TooltipModule,
    ConfirmDialogModule,
    GrowlModule,
    DragDropModule,
    GalleriaModule,
    TabMenuModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
