import { Component } from '@angular/core';
import { SbbTableDataSource } from '@sbb-esta/angular/table';
import { TableData, TableDataService } from '../table-data.service';

@Component({
  selector: 'abw-paged-table',
  templateUrl: './paged-table.component.html',
  styleUrls: ['./paged-table.component.scss'],
})
export class PagedTableComponent {
  dataSource: SbbTableDataSource<TableData> = new SbbTableDataSource();

  loading = true;

  constructor(private tableDataService: TableDataService) {
    tableDataService.fetchTableData(1000).subscribe((data) => {
      this.dataSource.data = data;
      this.loading = false;
    });
  }
}
