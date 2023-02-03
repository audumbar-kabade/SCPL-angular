import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router : Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let Token = localStorage.getItem('token');

    let updatedRequest;

    updatedRequest = request.clone({
      setHeaders: {
        "token": ""+ Token
      }
    });

    return next.handle(updatedRequest).pipe(
      tap({
        next: (event) => {
          if (event instanceof HttpResponse) {
            if(event.status == 200) {
              // alert('Successfully Logged In!')
              // this.router.navigate(['/users-dasboard']);
            }
          }
          return event;
        },
        error: (error) => {
          if(error.status === 401) {
            alert('Unauthorized access!')
            this.router.navigate(['/']);
          }
          else if(error.status === 404) {
            alert('Page Not Found!')
          }
        }
      }));;

  }
}
