import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableEllipsisRoutingModule } from './table-ellipsis-routing.module';
import { TableEllipsisComponent } from './table-ellipsis.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { TableResizableDirective } from '../table-resizable.directive';




@NgModule({
  declarations: [TableEllipsisComponent,TableResizableDirective],
  imports: [
    CommonModule,
    TableEllipsisRoutingModule,NgZorroAntdModule
  ]
})
export class TableEllipsisModule { }
