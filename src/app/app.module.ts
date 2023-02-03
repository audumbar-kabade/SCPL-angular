import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';

// Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';

// Interceptor
import { AuthInterceptor } from './auth/interceptor/auth.interceptor';

// Services
import { AdminService } from './services/admin/admin.service';
import { CommonService } from './services/common/common.service';
import { UsersService } from './services/users/users.service';
import { AuthService } from './auth/authservice/auth.service';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    UsersModule,
    AdminModule,
    AuthModule,
    SharedModule
   
  ],
  exports : [
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true,
      // provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi:true,
    },
    CommonService,
    AdminService,
    UsersService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
