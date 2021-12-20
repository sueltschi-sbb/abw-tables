import {Component, OnDestroy} from '@angular/core';
import {SbbTableDataSource} from "@sbb-esta/angular/table";
import {TableData, TableDataService} from "../table-data.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'abw-full-feature-table',
  templateUrl: './full-feature-table.component.html',
  styleUrls: ['./full-feature-table.component.scss'],
  host: {"class": "content content-full-height"}
})
export class FullFeatureTableComponent implements OnDestroy {

  dataSource: SbbTableDataSource<TableData> = new SbbTableDataSource();

  loading = true;

  private destroyed = new Subject<void>();

  filter = new FormGroup({
    line: new FormControl(),
    from: new FormControl(),
    to: new FormControl(),
  })

  constructor(private tableDataService: TableDataService) {
    tableDataService.fetchTableData(1000).subscribe(data => {
      this.dataSource.data = data;
      this.loading = false;
    });

    this.filter.valueChanges.pipe(takeUntil(this.destroyed))
      .subscribe(filterValue => this.dataSource.filter = filterValue);
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

}
