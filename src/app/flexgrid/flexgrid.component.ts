import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {trigger,state,style,transition,animate,AnimationEvent} from '@angular/animations';

@Component({
  selector: 'app-flexgrid',
  templateUrl: './flexgrid.component.html',
  styleUrls: ['./flexgrid.component.css'],
  animations: [
    trigger('animation', [
        state('visible', style({
            transform: 'translateX(0)',
            opacity: 1
        })),
        transition('void => *', [
            style({transform: 'translateX(50%)', opacity: 0}),
            animate('300ms ease-out')
        ]),
        transition('* => void', [
            animate(('250ms ease-in'), style({
                height: 0,
                opacity: 0,
                transform: 'translateX(50%)'
            }))
        ])
    ])
],
encapsulation: ViewEncapsulation.None
})

export class FlexgridComponent implements OnInit {
  columns: number[];
  constructor() { }

  ngOnInit() {
    this.columns = [0, 1, 2, 3, 4, 5];
  }
  
  addColumn() {
    this.columns.push(this.columns.length);
}

   removeColumn() {
    this.columns.splice(-1, 1);
}
}



