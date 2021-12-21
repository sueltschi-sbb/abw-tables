import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';

import TableDataJson from './data.json';
import { SbbSortDirection } from '@sbb-esta/angular/table';

export interface TableData {
  recordId: string;
  line: string;
  from: string;
  to: string;
  year: number;
  countTrains: number;
  timestamp: Date;
}

@Injectable({
  providedIn: 'root',
})
export class TableDataService {
  data = TableDataJson.records.map((record: any) => ({
    recordId: record.recordid.slice(0, 6),
    line: record.fields.strecke_bezeichnung,
    from: record.fields.bp_von_abschnitt_bezeichnung,
    to: record.fields.bp_bis_abschnitt_bezeichnung,
    year: +record.fields.jahr,
    countTrains: +record.fields.anzahl_zuege,
    timestamp: new Date(record.record_timestamp),
  }));

  fetchTableData(delayMs = 0): Observable<TableData[]> {
    return of(this.data).pipe(delay(delayMs));
  }

  fetchTableDataRemote(
    sort?: { column: string; direction: SbbSortDirection },
    page?: { pageSize: number; pageIndex: number },
    filter?: string,
    delayMs = 500
  ): Observable<{ data: TableData[]; length: number; pageIndex: number }> {
    console.log(
      `MOCK GET ?limit=${page?.pageSize}&offset=${(page?.pageIndex ?? 0) * (page?.pageSize ?? 0)}&sort=${
        sort?.column
      }_${sort?.direction}&query=${filter || ''}`
    );

    return this.fetchTableData(delayMs).pipe(
      map((rows: TableData[]) => {
        let filteredRows = rows;
        if (filter) {
          const filterLower = filter.toLowerCase().trim();
          filteredRows = filteredRows.filter(
            (r) =>
              r.recordId.toLowerCase().includes(filterLower) ||
              r.line.toLowerCase().includes(filterLower) ||
              r.from.toLowerCase().includes(filterLower) ||
              r.to.toLowerCase().includes(filterLower)
          );
        }

        if (sort) {
          const compare = (a: any, b: any) => (a < b ? -1 : a == b ? 0 : 1);
          filteredRows.sort((a, b) => {
            const aa = a as Record<string, any>;
            const bb = b as Record<string, any>;
            return sort.direction == 'asc'
              ? compare(aa[sort.column], bb[sort.column])
              : compare(bb[sort.column], aa[sort.column]);
          });
        }

        let slicedRows = filteredRows;
        let newPageIndex = 0;
        if (page) {
          const rowOffset = page.pageSize * page.pageIndex;
          slicedRows = filteredRows.slice(rowOffset, rowOffset + page.pageSize);
          if (filteredRows.length > page.pageIndex * page.pageSize) {
            newPageIndex = page.pageIndex;
          }
        }

        return { data: slicedRows, length: filteredRows.length, pageIndex: newPageIndex };
      })
    );
  }
}
