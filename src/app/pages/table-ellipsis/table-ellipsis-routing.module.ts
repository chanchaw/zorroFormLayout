import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableEllipsisComponent } from './table-ellipsis.component';

const routes: Routes = [ {path:'',component:TableEllipsisComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableEllipsisRoutingModule { }
