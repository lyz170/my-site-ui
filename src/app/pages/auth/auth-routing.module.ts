import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LoginProcessComponent } from './login/login-process.component';

const authRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'process',
    component: LoginProcessComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
