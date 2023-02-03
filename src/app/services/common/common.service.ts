import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient, ) { }
  getToken(){
    return this.http.get("");
  };
  login(){
    return null;
  };
}
