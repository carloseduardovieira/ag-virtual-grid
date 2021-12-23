import { Injectable } from '@angular/core';
import { AGVirtualProps } from '../shared/models';

@Injectable({
  providedIn: 'root',
})
export abstract class AgVirtualCoreService {
  protected tableProperties: AGVirtualProps;

  constructor() {}

  abstract initTableProperties(tableProperties: AGVirtualProps): void;

  getTableProperties(): AGVirtualProps {
    return this.tableProperties;
  }
}
