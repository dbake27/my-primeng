

//observ2.component.ts 
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post';

//import 'rxjs/add/operator/map';  changes in rxjs 6 to

import {retry}  from 'rxjs/operators';


@Component({
  selector: 'app-observ2',
  templateUrl: './observ2.component.html',
  styleUrls: ['./observ2.component.css']
})
export class Observ2Component implements OnInit {

  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';

  posts: Observable<any>;
  newPost: Observable<any>;
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getPosts() {

    let params = new HttpParams().set('userId','1');
    
    let headers = new HttpHeaders().set('Authorization', 'auth-token');

    this.posts = this.http.get(this.ROOT_URL + '/posts',  {headers})
  }


  createPost(){
const data: Post = {
  id: null,
  userId: 23,
  title: 'My New Post',
  body: 'Hellow World'
}
    this.newPost = this.http.post(this.ROOT_URL +  '/posts', data) 
      

      )


  }

}
