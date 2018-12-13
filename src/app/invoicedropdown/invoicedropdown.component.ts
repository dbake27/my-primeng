import { Component, OnInit } from '@angular/core';
import { SelectItemGroup, SelectItem } from 'primeng/api';

interface INVOICE {
  label: string,
  value: string
}

@Component({
  selector: 'app-invoicedropdown',
  templateUrl: './invoicedropdown.component.html',
  styleUrls: ['./invoicedropdown.component.css']
})
export class InvoicedropdownComponent implements OnInit {
  
  INVOICEs: SelectItem[];

  selectedINVOICE: INVOICE;
  
  constructor() {
    this.INVOICEs = [
      {label: '1001', value: '1001'},
      {label: '106789', value: '106789'},
      {label: '325345', value: '325345'},
      {label: '3250111', value: '3250111'},
      {label: '999999', value: '9999999'}
    ];
   }
  

  ngOnInit() {
  }

}
//
