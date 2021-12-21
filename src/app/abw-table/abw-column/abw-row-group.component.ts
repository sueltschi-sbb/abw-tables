import { Component, ContentChild, Input } from '@angular/core';
import { AbwColumnCellDirective } from './abw-column-cell.directive';

@Component({
  selector: 'abw-row-group',
  template: '',
})
export class AbwRowGroupComponent<T> {
  @Input()
  groupWhen!: (index: number, rowData: T) => boolean;

  @Input()
  id!: string;

  @Input()
  justify?: 'left' | 'right';

  @Input()
  cellClass?: string | ((row: T) => string | undefined);

  @ContentChild(AbwColumnCellDirective)
  columnCellDirective!: AbwColumnCellDirective<T>;
}
