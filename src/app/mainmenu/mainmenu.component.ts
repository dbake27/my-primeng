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
    }
}