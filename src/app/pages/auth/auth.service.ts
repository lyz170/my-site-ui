import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export const TOKEN_NAME = 'token';
export const USER_INFO = 'user-info';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string | null = null;

  constructor(
    private router: Router,
    private httpClient: HttpClient,
  ) {
    if(localStorage.getItem(TOKEN_NAME)) {
      this.isLoggedIn = true;
    }
  }

  /**
   * Login Function
   * @param data FormData
   * @returns Observable<HttpResponse<Object>>
   */
  login = (data: FormData) => {
    this.httpClient.post('/login', data, {observe: 'response'});
    this.isLoggedIn = true;
  }

  logout = () => {
    this.httpClient.post('/logout', {observe: 'response'});
    this.isLoggedIn = false;
  }
}