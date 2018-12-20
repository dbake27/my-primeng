//observ1.component.ts 
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observ1',
  templateUrl: './observ1.component.html',
  styleUrls: ['./observ1.component.css']
})
export class Observ1Component implements OnInit {

  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';

  posts: Observable<Post[];


  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getPosts() {
    this.posts = this.http.get<Post[]>(this.ROOT_URL + '/posts')
  }



}
