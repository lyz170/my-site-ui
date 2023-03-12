import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login-process',
  template: ''
})
export class LoginProcessComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private authService: AuthService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    var authorizationCode = '';
    this.activatedRoute.queryParams.subscribe(params => {
      authorizationCode = params['code'];
    });
    this.authService.githubLoginProcess(authorizationCode);
  }
}
