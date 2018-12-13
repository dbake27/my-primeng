import { Component, OnInit } from '@angular/core';
import { SelectItemGroup, SelectItem } from 'primeng/api';

interface VENDOR {
  label: string,
  value: string
}

@Component({
  selector: 'app-vendordropdown',
  templateUrl: './vendordropdown.component.html',
  styleUrls: ['./vendordropdown.component.css']
})
export class VendordropdownComponent implements OnInit {
  
  VENDORs: SelectItem[];

  selectedVENDOR: VENDOR;
  
  constructor() {
    this.VENDORs = [
      {label: 'IBM', value: 'IBM'},
      {label: 'HP', value: 'HP'},
      {label: 'Microsoft', value: 'MICROSOFT'},
      {label: 'Insight', value: 'INSIGHT'},
      {label: 'Blackduck', value: 'BLACKDUCK'}
    ];
   }
  

  ngOnInit() {
  }

}
//
