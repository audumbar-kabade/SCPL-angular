import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component:LoginComponent },
  { path: 'login', component: LoginComponent},
  // otherwise redirect to LoginComponent
  // { path: '**', redirectTo: '' },

  { path: 'forgot-password', component: ForgotPasswordComponent},

  { path: 'user-registration', component: RegistrationComponent},
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
