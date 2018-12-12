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
            {label: 'New', icon: 'pi pi-cloud', command: (event) =>{
               //event.originalEvent: Browser event
               //event.item: menuitem metadata
            }},
            {label: 'Open', icon: 'pi pi-pencil'}
        ]
    },
    {
        label: 'Edit',
        items: [
            {label: 'Undo', icon: 'pi pi-home'},
            {label: 'Redo', icon: 'pi pi-info'}
        ]
    }];
}
  

}
