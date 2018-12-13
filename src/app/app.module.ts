//app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';

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
import { GroupiddropdownComponent } from './groupiddropdown/groupiddropdown.component'


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
    GroupiddropdownComponent
  
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
    TabMenuModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
