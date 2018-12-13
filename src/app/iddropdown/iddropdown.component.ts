import { Component, OnInit } from '@angular/core';
import { SelectItemGroup, SelectItem } from 'primeng/api';


interface ID {
  label: string,
  value: string
}
@Component({
  selector: 'app-iddropdown',
  templateUrl: './iddropdown.component.html',
  styleUrls: ['./iddropdown.component.css']
})
export class IddropdownComponent implements OnInit {
  
  IDs: SelectItem[];

  selectedID: ID;
  
  constructor() {
    this.IDs = [
      {label: '1', value: '1'},
      {label: '10', value: '10'},
      {label: '325', value: '325'},
      {label: '3250', value: '3250'},
      {label: '9999', value: '99999'}
    ];
   }

  ngOnInit() {
  }

}
//

  
