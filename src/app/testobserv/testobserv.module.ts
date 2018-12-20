import { TestobservComponent } from './testobserv.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [TestobservComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [TestobservComponent]
})
export class TestobservModule { }


