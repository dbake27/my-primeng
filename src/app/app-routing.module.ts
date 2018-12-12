import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainmenuComponent} from "./mainmenu/mainmenu.component";

const routes: Routes = [
  { path: "mainmenu", component: MainmenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
