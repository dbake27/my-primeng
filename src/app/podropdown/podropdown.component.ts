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

 
  ngOnInit() {
  }

}
//
  

