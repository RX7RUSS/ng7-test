import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://reqres.in/api/users')
  }

  getImages() {
    return this.http.get('https://reqres.in/api/images')
  }

  randomImages() {
    return this.http.get('https://reqres.in/api/images')
  }  
}
