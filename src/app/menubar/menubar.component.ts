import { Component, OnInit } from '@angular/core';

import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  constructor() { }
  items: MenuItem[];

  ngOnInit() {
      this.items = [
          {
              label: 'File',
              items: [{
                      label: 'New', 
                      icon: 'pi pi-fw pi-plus',
                      items: [
                        {label: 'Dropdown',  routerLink: ['/dropdown']},
                        {label: 'PrimeNG',  url: 'http://www.primefaces.org/primeng'},
                        {label: 'PrimeDesigner',  url: 'https://www.primefaces.org/designer-ng/#/'}, 
                        
                        {label: 'Flexgrid',  routerLink: ['/flexgrid']},
                      ]
                  },
                  {label: 'Projects',  routerLink: ['/projects']},
                  {label: 'InputGroup',  routerLink: ['/inputgroup']},
              ]
          },
          {
              label: 'Edit',
              icon: 'pi pi-fw pi-pencil',
              items: [
                  {label: 'Delete', icon: 'pi pi-fw pi-trash'},
                  {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
              ]
          }
      ];
  }
  
}

//

