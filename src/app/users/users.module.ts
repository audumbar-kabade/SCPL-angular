import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersDashboardModule } from './users-dashboard/users-dashboard.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    UsersComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    UsersDashboardModule,
    SharedModule,
  ]
})
export class UsersModule { }
