import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit{
  users: any = [];
  constructor(private adminService: AdminService){}
   ngOnInit(): void {
     this.createUsers(); 
   }

   createUsers(){
    let data = {
      "firstName":"Supportive",
      "middleName":" ",
      "lastName":"User",
      "email":"satyam@gmail.com",
      "password":"nilesh@123",
      "DOB":"4-7-2000",        
      "mobileNumber":"9595986033",
      "designation":"User"
    }
    this.adminService.createUsers(data).subscribe((res: any) => {
      this.users = res;
    })
   }
}
