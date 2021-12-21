import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { RemoteTableDataSource } from './remote-table.source';

@Component({
  selector: 'abw-remote-table',
  templateUrl: './remote-table.component.html',
  styleUrls: ['./remote-table.component.scss'],
  providers: [{ provide: RemoteTableDataSource }],
})
export class RemoteTableComponent implements OnDestroy {
  private destroyed = new Subject<void>();

  constructor(public dataSource: RemoteTableDataSource) {}

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  handleSearch(filter: string) {
    this.dataSource.filter = filter;
  }
}
