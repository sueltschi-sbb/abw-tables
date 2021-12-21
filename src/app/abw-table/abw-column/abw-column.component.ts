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
  justify?: 'left' | 'right' | 'center';

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
    this._groupWithNext = value !== undefined && value !== false;
  }

  private _groupWithNext = false;

  @Input()
  get sortable(): boolean {
    return this._sortable;
  }

  set sortable(value: unknown) {
    this._sortable = value !== undefined && value !== false;
  }

  _sortable = false;


  @Input()
  get sticky(): boolean {
    return this._sticky;
  }

  set sticky(value: unknown) {
    this._sticky = value !== undefined && value !== false;
  }

  private _sticky = false;

  @Input()
  get stickyEnd(): boolean {
    return this._stickyEnd;
  }

  set stickyEnd(value: unknown) {
    this._stickyEnd = value !== undefined && value !== false;
  }

  private _stickyEnd = false;

}
