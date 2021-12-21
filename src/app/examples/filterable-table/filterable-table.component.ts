import { Component, OnDestroy } from '@angular/core';
import { SbbTableDataSource } from '@sbb-esta/angular/table';
import { TableData, TableDataService } from '../table-data.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'abw-filterable-table',
  templateUrl: './filterable-table.component.html',
  styleUrls: ['./filterable-table.component.scss'],
})
export class FilterableTableComponent implements OnDestroy {
  dataSource: SbbTableDataSource<TableData> = new SbbTableDataSource();

  private destroyed = new Subject<void>();

  filter = new FormGroup({
    _: new FormControl(),
    line: new FormControl(),
    from: new FormControl(),
    to: new FormControl(),
  });

  constructor(private tableDataService: TableDataService) {
    tableDataService.fetchTableData().subscribe((data) => (this.dataSource.data = data));

    this.filter.valueChanges
      .pipe(takeUntil(this.destroyed))
      .subscribe((filterValue) => (this.dataSource.filter = filterValue));
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
