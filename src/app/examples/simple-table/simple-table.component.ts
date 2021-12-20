import {Component} from '@angular/core';
import {SbbTableDataSource} from "@sbb-esta/angular/table";
import {TableData, TableDataService} from "../table-data.service";

@Component({
  selector: 'abw-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss'],
  host: {"class": "content content-full-height"}
})
export class SimpleTableComponent {

  dataSource: SbbTableDataSource<TableData> = new SbbTableDataSource();

  loading = true;

  constructor(private tableDataService: TableDataService) {
    tableDataService.fetchTableData().subscribe(data => {
      this.dataSource.data = data.slice(0, 15);
      this.loading = false;
    })
  }

  handleRowClick(row: any) {
    console.log('row clicked', row);
  }

}


