import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainmenuComponent} from "./mainmenu/mainmenu.component";
import { MenubarComponent } from './menubar/menubar.component';
import { ProjectsComponent } from './projects/projects.component';
import { InputTextDemoComponent } from './input-text-demo/input-text-demo.component';

const routes: Routes = [
  { path: "menubar", component: MenubarComponent },
  { path: "projects", component: ProjectsComponent},
  { path: "inputtextdemo", component: InputTextDemoComponent},
  

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