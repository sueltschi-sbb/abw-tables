import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';

import TableDataJson from './data.json';

export interface TableData {
  recordId: string;
  line: string;
  from: string;
  to: string;
  year: number;
  countTrains: number;
  timestamp: Date;
}

const data = TableDataJson;

@Injectable({
  providedIn: 'root',
})
export class TableDataService {
  fetchTableData(delayMs = 0): Observable<TableData[]> {
    return of(data).pipe(
      delay(delayMs),
      map((data: any) => {
        return data.records.map((record: any) => ({
          recordId: record.recordid.slice(0, 6),
          line: record.fields.strecke_bezeichnung,
          from: record.fields.bp_von_abschnitt_bezeichnung,
          to: record.fields.bp_bis_abschnitt_bezeichnung,
          year: +record.fields.jahr,
          countTrains: +record.fields.anzahl_zuege,
          timestamp: new Date(record.record_timestamp),
        }));
      })
    );
  }
}
