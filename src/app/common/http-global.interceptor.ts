import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthService } from '../pages/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpGlobalInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const baseUrl = environment["backend-url"];
    const token = localStorage.getItem('token');
    var apiReq;
    if (req.url.startsWith('http')) {
      apiReq = req.clone({ setHeaders: { 'Accept': 'application/json' } });
    } else {
      apiReq = req.clone({ url: `${baseUrl}${req.url}`, setHeaders: { 'Authorization': token ? token : '' } });
    }
    return next.handle(apiReq).pipe(
      tap({ error: error => this.handleError(error) }),
      retry({
        count: 1,
        delay: (error: HttpErrorResponse) => throwError(() => error)
      }),
    );
  }

  handleError(errorResponse: HttpErrorResponse) {
    console.log(errorResponse)
    if (errorResponse?.status !== 401) {
      // TODO
    } else {
      this.authService.logout();
    }
    return throwError(() => errorResponse?.error || errorResponse)
  }
}