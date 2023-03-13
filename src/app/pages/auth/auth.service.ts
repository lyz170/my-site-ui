import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

export const TOKEN_NAME = 'token';
export const USER_INFO = 'user-info';

export interface TokenInfo {
  access_token: string,
  scope: string,
  token_type: string,
}

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
    var token = localStorage.getItem(TOKEN_NAME);
    if(token !== '' && token !== 'undefined' && token !== null && typeof token !== undefined) {
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

  /**
   * Logout Function
   */
  logout = () => {
    this.httpClient.post('/logout', {observe: 'response'});
    localStorage.setItem(TOKEN_NAME, '');
    this.isLoggedIn = false;
    this.router.navigateByUrl('/login');
  }

  /**
   * Github Login Function
   */
  gitHubLogin = () => {
    console.log("Github login started.")
    const githubRedirectUrl = environment["github-redirect-url"];
    window.location.href = 'https://github.com/login/oauth/authorize?client_id=dd624e4f69e1cf794144&redirect_uri=' + githubRedirectUrl;
  }

 /**
   * Github Login Process (Get token) Function
   */
  githubLoginProcess = (authorizationCode: String) => {
    const githubLoginUrl = environment["github-login-url"];
    var url = githubLoginUrl + '?client_id=dd624e4f69e1cf794144&client_secret=435adcdfe49802abdd9940c29e42e607fe7a97f7&code=' + authorizationCode;
    console.log(url);
    this.httpClient.post<TokenInfo>(url, null).subscribe({
      next: response => localStorage.setItem(TOKEN_NAME, response.access_token)
    });
    this.isLoggedIn = true;
    this.router.navigateByUrl('/');
  }
}