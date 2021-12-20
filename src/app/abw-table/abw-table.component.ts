import {
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {SbbSort, SbbTableDataSource} from "@sbb-esta/angular/table";
import {AbwColumnComponent} from "./abw-column/abw-column.component";
import {SbbTableFilter} from "@sbb-esta/angular/table/table/table-data-source";
import {SbbPaginator} from "@sbb-esta/angular/pagination";
import {AbwRowGroupComponent} from "./abw-column/abw-row-group.component";

@Component({
  selector: 'abw-table',
  templateUrl: './abw-table.component.html',
  styleUrls: ['./abw-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AbwTableComponent<T, F extends SbbTableFilter | string> implements OnInit {

  @Output()
  rowClick = new EventEmitter<T>();

  @Input()
  dataSource!: SbbTableDataSource<T, F>;

  @Input()
  pageSize?: number;

  @Input()
  loading = false;

  @Input()
  noDataText?: string;

  @Input()
  sortDirection: 'asc' | 'desc' = 'asc';

  @Input()
  sortColumn = '';

  @ContentChildren(AbwColumnComponent)
  columns?: QueryList<AbwColumnComponent<T>>;

  @ContentChild(AbwRowGroupComponent)
  rowGroup?: AbwRowGroupComponent<T>;

  @ViewChild(SbbPaginator, {static: true}) paginator?: SbbPaginator;

  @ViewChild(SbbSort, {static: true}) sort?: SbbSort;

  get columnNames(): string[] {
    return this.columns?.map(c => c.id) ?? [];
  }

  get hasFilterColumns(): boolean {
    return this.columns?.some(c => !!c.columnFilterDirective) ?? false;
  }

  get filterColumnNames(): string[] {
    return this.columns?.map(c => `${c.id}-filter`) ?? [];
  }

  get filterColumns(): Iterable<AbwColumnComponent<T>> {
    return this.columns?.filter(c => !!c.columnFilterDirective) ?? [] ;
  }

  ngOnInit() {
    if (this.paginator && this.pageSize) {
      this.dataSource.paginator = this.paginator;
    }
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
  }

  getCellClass(cellClass: undefined | string | ((element: T) => string | undefined), element: T) {
    if (!cellClass) {
      return undefined;
    }

    return typeof cellClass === 'string' ? cellClass : cellClass(element)
  }

  handleRowClick(row: T) {
    this.rowClick.next(row);
  }

}

