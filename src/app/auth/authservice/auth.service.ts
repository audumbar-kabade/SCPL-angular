import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { API_URL } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient) { }
  
  getAllUsers(): Observable<any>{
    return this.http.get(API_URL)
  }
  CreateUsers(data:any): Observable<any> {
    return this.http.post(API_URL + '/users/create',data);
  }

  userLogin(data:any) {
    return this.http.post(API_URL + '/auth/login',data);
  }

}
