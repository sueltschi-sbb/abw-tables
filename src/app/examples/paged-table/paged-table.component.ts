import {Component} from '@angular/core';
import {SbbTableDataSource} from "@sbb-esta/angular/table";
import {TableData, TableDataService} from "../table-data.service";

@Component({
  selector: 'abw-paged-table',
  templateUrl: './paged-table.component.html',
  styleUrls: ['./paged-table.component.scss'],
  host: {"class": "content content-full-height"}
})
export class PagedTableComponent {

  dataSource: SbbTableDataSource<TableData> = new SbbTableDataSource();

  loading = true;

  constructor(private tableDataService: TableDataService) {
    tableDataService.fetchTableData().subscribe(data => {
      this.dataSource.data = data;
      this.loading = false;
    })
  }

}
