import { Component, OnInit } from '@angular/core';
import { SelectItemGroup, SelectItem } from 'primeng/api';

interface GROUPID {
  label: string,
  value: string
}

@Component({
  selector: 'app-groupiddropdown',
  templateUrl: './groupiddropdown.component.html',
  styleUrls: ['./groupiddropdown.component.css']
})
export class GroupiddropdownComponent implements OnInit {

  GROUPIDs: SelectItem[];

  selectedGroupID: GROUPID;
  
  constructor() {
    this.GROUPIDs = [
      {label: '55', value: '55'},
      {label: '100', value: '100'},
      {label: '3252', value: '3252'},
      {label: '3567', value: '3567'},
      {label: '9999', value: '9999'}
    ];
   }

  
  ngOnInit() {
  }

}
//