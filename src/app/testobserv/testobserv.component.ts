//testobserv.component.ts
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-testobserv',
  templateUrl: './testobserv.component.html',
  styleUrls: ['./testobserv.component.css']
})
export class TestobservComponent implements OnInit {
   userName: string ="";
   response: any;

  constructor(private http: HttpClient ) {

    }

  ngOnInit() {
    //this.http.get returns an observable
   // let obs = this.http.get('https://github.com/users/dbake27');
   // obs.subscribe(( ) => console.log('I got the response'));
 }
    search() {
      this.http.get('https://github.com/users/' + this.userName)
      .subscribe((response)  =>{
        this.response = response;
        console.log(this.response);
      })
    }
}
