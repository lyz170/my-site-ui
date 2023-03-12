import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { IconsProviderModule } from '../../../app/icons-provider.module';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    NzGridModule,
    NzLayoutModule,
    NzMenuModule,
    NzButtonModule,
    NzDropDownModule,
    IconsProviderModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }



