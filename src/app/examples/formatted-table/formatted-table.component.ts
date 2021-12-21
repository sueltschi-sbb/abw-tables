import { Component } from '@angular/core';
import { SbbTableDataSource } from '@sbb-esta/angular/table';
import { TableData, TableDataService } from '../table-data.service';

@Component({
  selector: 'abw-formatted-table',
  templateUrl: './formatted-table.component.html',
  styleUrls: ['./formatted-table.component.scss'],
})
export class FormattedTableComponent {
  dataSource: SbbTableDataSource<TableData> = new SbbTableDataSource();

  constructor(private tableDataService: TableDataService) {
    this.dataSource.data = tableDataService.data.slice(0, 15);
  }
}
