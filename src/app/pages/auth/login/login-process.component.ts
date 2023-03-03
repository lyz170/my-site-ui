import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http';

export interface TokenInfo {
  access_token: string,
  scope: string,
  token_type: string,
}

@Component({
  selector: 'app-login-process',
  template: ''
})
export class LoginProcessComponent implements OnInit {

  private authorizationCode = '';

  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.authorizationCode = params['code'];
    });
    this.getTokenFromGithub();
  }

  getTokenFromGithub(): void {
    var url = 'https://github.com/login/oauth/access_token?client_id=dd624e4f69e1cf794144&client_secret=435adcdfe49802abdd9940c29e42e607fe7a97f7&code='
     + this.authorizationCode;
    console.log(url);
    this.httpClient.post<TokenInfo>(url, null).subscribe({
      next: response => console.log(response.access_token)
    });
  }


}
