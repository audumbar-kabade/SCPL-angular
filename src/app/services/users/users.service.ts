import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient){}
  updateUsers(data:any) {
    return this.http.post(API_URL + '/users/update',data);
  }
}
