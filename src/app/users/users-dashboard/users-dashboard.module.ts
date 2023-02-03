import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersDashboardRoutingModule } from './users-dashboard-routing.module';
import { UsersDashboardComponent } from './users-dashboard.component';
import { UsersHeaderComponent } from './users-header/users-header.component';
import { UsersSidenavComponent } from './users-sidenav/users-sidenav.component';
import { UsersFooterComponent } from './users-footer/users-footer.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    UsersDashboardComponent,
    UsersHeaderComponent,
    UsersSidenavComponent,
    UsersFooterComponent
  ],
  imports: [
    CommonModule,
    UsersDashboardRoutingModule,

    SharedModule
  ],
  exports: [
    UsersDashboardComponent,
    UsersHeaderComponent,
    UsersSidenavComponent,
    UsersFooterComponent,
  ]
})
export class UsersDashboardModule { }
