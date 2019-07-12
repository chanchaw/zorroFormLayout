import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormHorizontalRoutingModule } from './form-horizontal-routing.module';
import { FormHorizontalComponent } from './form-horizontal.component';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormHorizontalComponent],
  imports: [
    CommonModule,
    FormHorizontalRoutingModule,NgZorroAntdModule,FormsModule,ReactiveFormsModule
  ]
})
export class FormHorizontalModule { }
