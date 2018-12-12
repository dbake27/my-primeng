import { Component, OnInit } from '@angular/core';
import { SelectItemGroup, SelectItem } from 'primeng/api';


interface City {
  name: string,
  code: string
}


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  cities: City[];

  selectedCity: City;

  cars: SelectItem[];

  selectedCar1: string;

  selectedCar2: string = 'BMW';
  
  selectedCar3: string;

  groupedCars: SelectItemGroup[];

  constructor() {
    this.cities = [
        {name: 'New York', code: 'NY'},
        {name: 'Rome', code: 'RM'},
        {name: 'London', code: 'LDN'},
        {name: 'Istanbul', code: 'IST'},
        {name: 'Paris', code: 'PRS'}
    ];

    this.cars = [
        {label: 'Audi', value: 'Audi'},
        {label: 'BMW', value: 'BMW'},
        {label: 'Fiat', value: 'Fiat'},
        {label: 'Ford', value: 'Ford'},
        {label: 'Honda', value: 'Honda'},
        {label: 'Jaguar', value: 'Jaguar'},
        {label: 'Mercedes', value: 'Mercedes'},
        {label: 'Renault', value: 'Renault'},
        {label: 'VW', value: 'VW'},
        {label: 'Volvo', value: 'Volvo'}
    ];
  }
  ngOnInit() {
    
  }

}

  
