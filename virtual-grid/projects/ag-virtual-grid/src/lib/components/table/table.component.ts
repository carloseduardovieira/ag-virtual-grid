import { Component, Input, OnInit } from '@angular/core';
import { AgVirtualCoreService } from '../../core/ag-virtual-core.service';
import { AGVirtualProps } from '../../shared/models';

@Component({
  selector: 'lib-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() tableProperties: AGVirtualProps;

  constructor(private core: AgVirtualCoreService) {}

  ngOnInit(): void {
    console.log(this.tableProperties);
  }
}
