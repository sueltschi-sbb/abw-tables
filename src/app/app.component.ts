import {Component} from '@angular/core';
import {SbbTableDataSource} from "@sbb-esta/angular/table";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  filterForm = new FormGroup({
    columnTwo: new FormControl(),
    columnThree: new FormControl()
  });

  dataSource: SbbTableDataSource<any, {columnThree: string, columnTwo: string}> = new SbbTableDataSource(TABLE_EXAMPLE_DATA_SIMPLE);

  constructor() {
    this.filterForm.valueChanges.subscribe(filterFormValue => this.dataSource.filter = filterFormValue)
  }

  handleRowClick(row: any) {
    console.log('click', row);
  }

  classForColOne(row: { columnOne: string }): string | undefined {
    return +row.columnOne % 3 === 0 ? 'threeish' : undefined;
  }

}

const TABLE_EXAMPLE_DATA_SIMPLE = [
  {
    columnOne: '1',
    columnTwo: 'aa',
    columnThree: 'xx',
    columnFour: 'yy',
    columnFive: 'zz',
  },
  {
    columnOne: '2',
    columnTwo: 'bb',
    columnThree: 'xxx',
    columnFour: 'yyy',
    columnFive: 'zzz',
  },
  {
    columnOne: '3',
    columnTwo: 'bb',
    columnThree: 'xxx',
    columnFour: 'yyy',
    columnFive: 'zzz',
  },
  {
    columnOne: '4',
    columnTwo: 'bb',
    columnThree: 'xxx',
    columnFour: 'yyy',
    columnFive: 'zzz',
  },
  {
    columnOne: '5',
    columnTwo: 'bb',
    columnThree: 'xxx',
    columnFour: 'yyy',
    columnFive: 'zzz',
  },
];
