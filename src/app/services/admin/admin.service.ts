import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { API_URL } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private router: Router, private http: HttpClient, ) { }
  createUsers(data:any) {
    return this.http.post(API_URL + '/users/create',data);
  }
 
}
