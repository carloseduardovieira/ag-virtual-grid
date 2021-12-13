import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AgVirtualGridComponent } from './ag-virtual-grid.component';
import { AgVirtualGridRoutingModule } from './ag-virtual-grid.routing.module';
import { TableComponent } from './components/table/table.component';



@NgModule({
  declarations: [
    AgVirtualGridComponent,
    TableComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    AgVirtualGridRoutingModule
  ],
  exports: [
    AgVirtualGridComponent
  ]
})
export class AgVirtualGridModule { }
