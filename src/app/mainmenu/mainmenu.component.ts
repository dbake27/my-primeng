import { Component, OnInit } from '@angular/core';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})
export class MainmenuComponent implements OnInit {
  private items: MenuItem[];
  constructor() { }
  
  ngOnInit() {
    this.items = [{
        label: 'File',
        items: [
            {label: 'New', icon: 'fa fa-plus', url: 'http://www.primefaces.org/primeng'},
            {label: 'Dropdown', icon: 'fa fa-download', routerLink: ['/dropdown']},
            {label: 'Recent Files', icon: 'fa fa-download', routerLink: ['/pagename'], queryParams: {'recent': 'true'}}
        ]
    }
}
  

}
