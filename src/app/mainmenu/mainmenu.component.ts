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
            {label: 'New', icon: 'pi pi-cloud'},
            {label: 'Open', icon: 'pi pi-pencil'}
        ]
    },
    {
        label: 'Edit',
        items: [
            {label: 'Undo', icon: 'fa fa-refresh'},
            {label: 'Redo', icon: 'fa fa-repeat'}
        ]
    }];
}
  

}
