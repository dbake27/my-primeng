import { Component, OnInit } from '@angular/core';
//import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-tabmenu',
  templateUrl: './tabmenu.component.html',
  styleUrls: ['./tabmenu.component.css']
})
export class TabmenuComponent implements OnInit {
  items: MenuItem[];
  constructor() { }

  ngOnInit() {
    this.items = [
       // {label: 'Projects',  routerLink: ['/projects']},
        {label: 'testobserv',  routerLink: ['/testobserv']},
        {label: 'observ1',  routerLink: ['/observ1']},
       // {label: 'GroupIDropdown',  routerLink: ['/groupidropdown']},
       // {label: 'VendorDropdown',  routerLink: ['/vendordropdown']},
       // {label: 'InvoiceDropdown',  routerLink: ['/invoicedropdown']},
       // {label: 'VendorDropdown',  routerLink: ['/vendordropdown']},
       // {label: 'PODropdown',  routerLink: ['/podropdown']},
       // {label: 'MasterSearch',  routerLink: ['/mastersearch']},
        {label: 'PrimeNG',  url: 'http://www.primefaces.org/primeng'},
        {label: 'PrimeDesigner',  url: 'https://www.primefaces.org/designer-ng/#/'}, 
        {label: 'Delete', icon: 'pi pi-fw pi-trash'},
        {label: 'Refresh', icon: 'pi pi-fw pi-refresh'},


        
    ];
}
}
//
