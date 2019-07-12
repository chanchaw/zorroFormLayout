import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormlayoutRoutingModule } from './formlayout-routing.module';
import { FormlayoutComponent } from './formlayout.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [FormlayoutComponent],
  imports: [
    CommonModule,
    FormlayoutRoutingModule,FormsModule,ReactiveFormsModule,NgZorroAntdModule
  ]
})
export class FormlayoutModule { }
