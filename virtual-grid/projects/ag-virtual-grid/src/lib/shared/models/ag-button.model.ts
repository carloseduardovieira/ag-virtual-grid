import { AGButtonType } from '.';
import { AGButtonColorEnum } from '../enums';

export class AGButton {
  label: string;
  type: AGButtonType;
  color: AGButtonColorEnum;
  static action: Function;

  constructor(data: Partial<AGButton>) {
    Object.assign(this, data);
  }

  static onButtonClicked(): void {
    this.action();
  }
}
