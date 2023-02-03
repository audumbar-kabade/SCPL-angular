import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../authservice/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  
  ngOnInit(){
    this.login()
  };

  users: unknown = [];

  constructor(private router: Router,private auth: AuthService){}

  login(){
    let data = {
      userName: 'User@gmail.com',
      password: 'nilesh@123',
    }
    this.auth.userLogin(data).subscribe((res:any)=>{
      console.log(res);
      this.users= res;
      localStorage.setItem('token',res.token);
      localStorage.setItem('usertype',res.userType);

      if(res.userType=='Admin' || res.userType=='HR'){
        this.router.navigate(['/admin-dashboard']);
      }
      
      if(res.userType=='User'){
        this.router.navigate(['/user-dashboard']);
      }
    })
  };



}
