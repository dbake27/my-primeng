import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainmenuComponent} from "./mainmenu/mainmenu.component";
import { MenubarComponent } from './menubar/menubar.component';
import { ProjectsComponent } from './projects/projects.component';
import { InputTextDemoComponent } from './input-text-demo/input-text-demo.component';
import { FlexgridComponent } from './flexgrid/flexgrid.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { InputgroupComponent } from './inputgroup/inputgroup.component';
import { TabmenuComponent } from './tabmenu/tabmenu.component';
import { MastersearchComponent } from './mastersearch/mastersearch.component';
import { IddropdownComponent } from './iddropdown/iddropdown.component';


const routes: Routes = [
  { path: "menubar", component: MenubarComponent },
  { path: "projects", component: ProjectsComponent},
  { path: "inputtextdemo", component: InputTextDemoComponent},
  { path: "flexgrid", component: FlexgridComponent },
  { path: "dropdown", component: DropdownComponent },
  { path: "inputgroup", component: InputgroupComponent },
  { path: "tabmenu", component: TabmenuComponent },
  { path: "mastersearch", component: MastersearchComponent },
  { path: "idropdown", component: IddropdownComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*
const appRoutes: Routes = [
  // { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  // { path: "dashboard", component: DashboardComponent },
  // { path: "alltimes", component: AlltimesComponent },
  // { path: "timesheet", component: TimesheetComponent},
   { path: "projects", component: ProjectsComponent}
  // { path: "profile", component: ProfileComponent},
  // { path: "settings", component: SettingsComponent},
 ];
*/