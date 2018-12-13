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
        {label: 'Projects',  routerLink: ['/projects']},
        {label: 'InputGroup',  routerLink: ['/inputgroup']},
        {label: 'IDropdown',  routerLink: ['/idropdown']},
        {label: 'MasterSearch',  routerLink: ['/mastersearch']},
        {label: 'PrimeNG',  url: 'http://www.primefaces.org/primeng'},
        {label: 'PrimeDesigner',  url: 'https://www.primefaces.org/designer-ng/#/'}, 
        {label: 'Delete', icon: 'pi pi-fw pi-trash'},
        {label: 'Refresh', icon: 'pi pi-fw pi-refresh'},


        
    ];
}
}
//
