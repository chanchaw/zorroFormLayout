import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableEllipsisRoutingModule } from './table-ellipsis-routing.module';
import { TableEllipsisComponent } from './table-ellipsis.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [TableEllipsisComponent],
  imports: [
    CommonModule,
    TableEllipsisRoutingModule,NgZorroAntdModule
  ]
})
export class TableEllipsisModule { }
