import {Component, ContentChild, Input} from '@angular/core';
import {AbwColumnHeaderDirective} from "./abw-column-header.directive";
import {AbwColumnCellDirective} from "./abw-column-cell.directive";
import {AbwColumnFilterDirective} from "./abw-column-filter.directive";

@Component({
  selector: 'abw-column',
  template: '',
})
export class AbwColumnComponent<T> {

  @ContentChild(AbwColumnHeaderDirective)
  columnHeaderDirective!: AbwColumnHeaderDirective;

  @ContentChild(AbwColumnFilterDirective)
  columnFilterDirective!: AbwColumnFilterDirective;

  @ContentChild(AbwColumnCellDirective)
  columnCellDirective!: AbwColumnCellDirective<T>;

  @Input()
  id!: string;

  @Input()
  title?: string;

  @Input()
  subtitle?: string;

  @Input()
  justify?: 'left' | 'right';

  @Input()
  width?: string;

  @Input()
  headerClass?: string;

  @Input()
  filterClass?: string;

  @Input()
  cellClass?: string | ((row: T) => string | undefined);

  @Input()
  get groupWithNext(): boolean {
    return this._groupWithNext;
  }

  set groupWithNext(value: unknown) {
    this._groupWithNext = value !== undefined && value !== false ;
  }

  private _groupWithNext = false;

  @Input()
  get sortable(): boolean {
    return this._sortable;
  }

  set sortable(value: unknown) {
    this._sortable = value !== undefined && value !== false ;
  }

  _sortable = false;

}
