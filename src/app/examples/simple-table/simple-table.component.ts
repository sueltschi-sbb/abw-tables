import { Component } from '@angular/core';
import { SbbTableDataSource } from '@sbb-esta/angular/table';
import { TableData, TableDataService } from '../table-data.service';

@Component({
  selector: 'abw-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss'],
})
export class SimpleTableComponent {
  dataSource: SbbTableDataSource<TableData> = new SbbTableDataSource();

  constructor(private tableDataService: TableDataService) {
    tableDataService.fetchTableData().subscribe((data) => (this.dataSource.data = data.slice(0, 15)));
  }

  handleRowClick(row: TableData) {
    console.log('row clicked', row);
  }
}
