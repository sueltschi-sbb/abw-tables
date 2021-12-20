import {Component} from '@angular/core';
import {SbbTableDataSource} from "@sbb-esta/angular/table";
import {TableData, TableDataService} from "../table-data.service";

@Component({
  selector: 'abw-formatted-table',
  templateUrl: './formatted-table.component.html',
  styleUrls: ['./formatted-table.component.scss'],
  host: {"class": "content content-full-height"}
})
export class FormattedTableComponent {

  dataSource: SbbTableDataSource<TableData> = new SbbTableDataSource();

  loading = true;

  constructor(private tableDataService: TableDataService) {
    tableDataService.fetchTableData().subscribe(data => {
      this.dataSource.data = data.slice(0, 15);
      this.loading = false;
    })
  }

}
