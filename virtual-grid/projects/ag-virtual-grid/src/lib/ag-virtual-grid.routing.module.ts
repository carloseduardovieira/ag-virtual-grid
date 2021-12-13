import { TableComponent } from "./components/table/table.component";
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
      path: '',
      component: TableComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AgVirtualGridRoutingModule {}