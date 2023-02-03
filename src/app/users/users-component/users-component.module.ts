import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersComponentRoutingModule } from './users-component-routing.module';
import { UsersComponentComponent } from './users-component.component';


@NgModule({
  declarations: [
    UsersComponentComponent
  ],
  imports: [
    CommonModule,
    UsersComponentRoutingModule
  ]
})
export class UsersComponentModule { }
