import { AgVirtualCoreService } from './../../projects/ag-virtual-grid/src/lib/core/ag-virtual-core.service';
import { Component, OnInit } from '@angular/core';
import { AGVirtualProps } from 'projects/ag-virtual-grid/src/lib/shared/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  tableProperties: AGVirtualProps;

  constructor() {}

  ngOnInit(): void {
    this.initTableProperties();
  }

  initTableProperties(): void {
    this.tableProperties = new AGVirtualProps({
      title: 'First',
      columns: [],
      rows: [],
    });
  }
}
