import { Component, OnInit } from '@angular/core';
import { SelectItemGroup, SelectItem } from 'primeng/api';

interface PO {
  label: string,
  value: string
}
@Component({
  selector: 'app-podropdown',
  templateUrl: './podropdown.component.html',
  styleUrls: ['./podropdown.component.css']
})
export class PodropdownComponent implements OnInit {
  POs: SelectItem[];

  selectedPO: PO;
  
  constructor() {
    this.POs = [
      {label: 'PO1234351', value: 'PO1234351'},
      {label: 'PO888810', value: 'PO888810'},
      {label: 'PO765432', value: 'PO765432'},
      {label: 'PO33333', value: 'PO33333'},
      {label: 'PO999999', value: '9PO999999'}
    ];
   }

  constructor() { }

  ngOnInit() {
  }

}
//

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

  

