import { Component, OnInit } from '@angular/core';
import { SelectItemGroup, SelectItem } from 'primeng/api';

interface VOUCHER {
  label: string,
  value: string
}

@Component({
  selector: 'app-voucherdropdown',
  templateUrl: './voucherdropdown.component.html',
  styleUrls: ['./voucherdropdown.component.css']
})
export class VoucherdropdownComponent implements OnInit {
  
  VOUCHERs: SelectItem[];

  selectedVOUCHER: VOUCHER;
  
  constructor() {
    this.VOUCHERs = [
      {label: '12345678', value: '12345678'},
      {label: '87654321', value: '87654321'},
      {label: '56798765', value: '56798765'},
      {label: '32501122', value: '32501122'},
      {label: '999999', value: '9999999'}
    ];
   }

   ngOnInit() {
  }

}
//
