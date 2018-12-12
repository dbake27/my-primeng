import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-text-demo',
  templateUrl: './input-text-demo.component.html',
  styleUrls: ['./input-text-demo.component.css']
})
export class InputTextDemoComponent implements OnInit {
  text: string;

  disabled: boolean = true;

  toggleDisabled() {
      this.disabled = !this.disabled;
  }
  constructor() { }

  ngOnInit() {
  }

}

