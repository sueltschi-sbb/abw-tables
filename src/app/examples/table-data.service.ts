import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

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
  providedIn: 'root'
})
export class TableDataService {

  private static readonly ENDPOINT = 'https://data.sbb.ch/api/records/1.0/search/?dataset=zugzahlen&q=isb%3DSBB&rows=80&facet=isb&facet=strecke_bezeichnung&facet=strecke_art&facet=bp_von_abschnitt&facet=bp_bis_abschnitt&facet=jahr';

  constructor(private httpClient: HttpClient) {
  }

  fetchTableData(): Observable<TableData[]> {
    return this.httpClient.get(TableDataService.ENDPOINT)
      .pipe(map((data: any) => {
        return data.records.map((record: any) => ({
          recordId: record.recordid.slice(0, 4),
          line: record.fields.strecke_bezeichnung,
          from: record.fields.bp_von_abschnitt_bezeichnung,
          to: record.fields.bp_bis_abschnitt_bezeichnung,
          year: +record.fields.jahr,
          countTrains: +record.fields.anzahl_zuege,
          timestamp: new Date(record.record_timestamp),
        }));
      }));
  }

}
