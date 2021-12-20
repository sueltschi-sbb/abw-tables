import {Component} from '@angular/core';
import {SbbTableDataSource} from "@sbb-esta/angular/table";
import {TableData, TableDataService} from "../table-data.service";


interface GroupRow {
  groupName: string;
}

type GroupedTableData = TableData | GroupRow

@Component({
  selector: 'abw-grouped-table',
  templateUrl: './grouped-table.component.html',
  styleUrls: ['./grouped-table.component.scss'],
  host: {"class": "content content-full-height"}
})
export class GroupedTableComponent {

  dataSource: SbbTableDataSource<GroupedTableData> = new SbbTableDataSource();

  loading = true;

  constructor(private tableDataService: TableDataService) {
    tableDataService.fetchTableData().subscribe(data => {
      const rows = data.slice(0, 15);
      const groupedRows = [] as GroupedTableData[];
      let currentGroup = null;
      for (const row of rows) {
        if (currentGroup !== row.line) {
          currentGroup = row.line;
          groupedRows.push({groupName: row.line})
        }
        groupedRows.push(row);
      }

      this.dataSource.data = groupedRows;
      this.loading = false;
    })
  }

  isGroupRow(index: number, row: GroupedTableData) {
    return !!(row as GroupRow).groupName;
  }

}
