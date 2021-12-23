import { AGButton, AGColumn } from '.';

export class AGVirtualProps {
  title?: string;
  headerButtons?: AGButton[];
  actionButtons?: AGButton[];
  columns: AGColumn[];
  rows: any[];

  constructor(data: Partial<AGVirtualProps>) {
    Object.assign(this, data);
  }
}
