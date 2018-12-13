import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {trigger,state,style,transition} from '@angular/animations';
//import {DropdownComponent} from "../dropdown/dropdown.component";

@Component({
  selector: 'app-mastersearch',
  templateUrl: './mastersearch.component.html',
  styleUrls: ['./mastersearch.component.css']
  
})
export class MastersearchComponent implements OnInit {
  columns: number[];
  constructor() { }

  ngOnInit() {
    this.columns = [0, 1, 2, 3, 4, 5];
  }

}
//







