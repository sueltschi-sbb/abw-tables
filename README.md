# abw-tables

This is an API wrapper around
the [@sbb-esta/angular](https://angular.app.sbb.ch/angular/components/table/overview) table
components that simplifies common use cases when dealing with tables in angular:

* Paging, Sorting and Filtering
* Formatting headers and cells
* Grouping columns and rows
* Loading animations
* Sticky headers with overflowing content
* Stretching tables to use up full vertical height

Various running examples can be inspected [here](https://sueltschi-sbb.github.io/abw-tables)!

To use the wrapper, simply copy the content of
this [folder](https://github.com/sueltschi-sbb/abw-tables/tree/master/src/app/abw-table)
and import the `AbwTableModule`.

## Documentation

This is a brief overview of the core features, for more details checkout
the [examples](https://github.com/sueltschi-sbb/abw-tables/tree/master/src/app/examples).

### DataSource

The `abw-table` component takes a `SbbTableDataSource` as input to render table rows.

```typescript
import {SbbTableDataSource} from "@sbb-esta/angular/table";

interface TableData {
  id: number;
  name: string;
  date: Date;
}

const data = [
  {id: 1, name: 'First Row', date: new Date('2021-12-21')},
  {id: 2, name: 'Second Row', date: new Date('2021-12-21')},
  {id: 3, name: 'Thirs Row', date: new Date('2021-12-21')},
]

dataSource = new SbbTableDataSource<TableData>();

dataSource.data = data;
```

```html

<abw-table [dataSource]="dataSource">
  ...
</abw-table>
```

### Rendering Columns

Columns are defined using the `<abw-column>` component. By default, the `id` attribute is used as
key to access the row property.

```html

<abw-table [dataSource]="dataSource">
  <abw-column id="id" title="ID" width="10%"></abw-column>
  <abw-column id="name" title="Name" width="80%"></abw-column>
  <abw-column id="date" title="date" width="10%"></abw-column>
</abw-table>
```

### Rendering Custom Cells and Headers

The content of column headers and cells can be overwritten using the `abwColumnHeader`
and `abwColumnCell` directives.

```html

<abw-table [dataSource]="dataSource">
  <abw-column id="id" title="ID" width="10%"></abw-column>
  <abw-column id="name" width="80%">
    <ng-template abwColumnHeader>
      <span style="color: red">Name</span>
    </ng-template>
  </abw-column>
  <abw-column id="date" title="date" width="10%">
    <ng-template abwColumnCell let-row>{{ row.date | date: 'shortDate' }}</ng-template>
  </abw-column>
</abw-table>
```

### Loading Animation

The `loading` attribute triggers a loading animation over the entire table.

```typescript
loading = true;

fetchData().then(data => {
  dataSource.data = data;
  loading = false;
})
```

```html

<abw-table [dataSource]="dataSource" [loading]="loading">
  ...
</abw-table>
```

### Paging

Paging can be activated with the `pageSize` attribute

```html

<abw-table [dataSource]="dataSource" [pageSize]="15">
  ...
</abw-table>
```

### Sorting

Column sorting is enabled with the `sortable` attribute. The attributes `sortColumn`
and `sortDirection` determine the default sort column and direction.

```html

<abw-table [dataSource]="dataSource" sortColumn="name" sortDirection="asc">
  <abw-column id="id" title="ID" width="10%" sortable></abw-column>
  <abw-column id="name" title="Name" width="80%" sortable></abw-column>
  <abw-column id="date" title="date" width="10%"></abw-column>
</abw-table>
```

### Column Grouping

Columns are grouped together with the next column by using the `groupWithNext` attribute

```html

<abw-table [dataSource]="dataSource">
  <abw-column id="id" title="ID" width="10%"></abw-column>
  <abw-column id="name" title="Name" width="80%" groupWithNext></abw-column>
  <abw-column id="date" title="date" width="10%"></abw-column>
</abw-table>
```

### Row Grouping

A row group is defined by `abw-row-group`, the `groupWhen` attribute defined a predicate that
indicates which rows are row groups.

```typescript

interface TableData {
  id: number;
  name: string;
  date: Date;
}

interface TableGroup {
  id: number;
  name: string;
  date: Date;
}

const data: (TableData | TableGroup)[] = [
  {groupName: 'First Group'},
  {id: 1, name: 'First Row', date: new Date('2021-12-21')},
  {id: 2, name: 'Second Row', date: new Date('2021-12-21')},
  {groupName: 'Second Group'},
  {id: 3, name: 'Third Row', date: new Date('2021-12-21')},
]

function groupPredicate(index: number, row: TableData | TableGroup) {
  return !!(row as TableGroup).groupName;
} 
```

```html

<abw-table [dataSource]="dataSource">
  <abw-row-group id="groupName" [groupWhen]="groupPredicate"></abw-row-group>
  <abw-column id="id" title="ID" width="10%"></abw-column>
  <abw-column id="name" title="Name" width="80%"></abw-column>
  <abw-column id="date" title="date" width="10%"></abw-column>
</abw-table>
```

### Filtering

Column filters are inserted using the `abwColumnFilter` directive. The filter value has to be
propagated to the data source to take effect.

```typescript
import {FormControl, FormGroup} from "@angular/forms";

filter = new FormGroup({
  id: new FormControl(),
  name: new FormControl()
})

filter.valueChanges
  .pipe(takeUntil(this.destroyed))
  .subscribe((filterValue) => (this.dataSource.filter = filterValue));
```

```html

<abw-table [dataSource]="dataSource" [formGroup]="filter">
  <abw-column id="id" title="ID" width="10%">
    <ng-template abwColumnFilter>
      <input sbbInput formControlName="id"/>
    </ng-template>
  </abw-column>
  <abw-column id="name" title="Name" width="80%">
    <ng-template abwColumnFilter>
      <input sbbInput formControlName="name"/>
    </ng-template>
  </abw-column>
  <abw-column id="date" title="date" width="10%"></abw-column>
</abw-table>
```

### Sticky Tables

Column headers and rows can be made sticky with the `stickyHeader`, `sticky` and `stickyEnd`
attributes. The table will automatically overflow if the rows do not fit the given height of the
table.

```css
abw-table {
  height: 500px;
}
```

```html

<abw-table [dataSource]="dataSource" stickyHeader>
  <abw-column id="id" title="ID" width="10%" sticky></abw-column>
  <abw-column id="name" title="Name" width="80%"></abw-column>
  <abw-column id="date" title="date" width="10%" stickyEnd></abw-column>
</abw-table>
```

If the table is rendered in a flexbox container, it will automatically adjust to the available
vertical height. This can be used to construct a table that uses up all remaining vertical space (
see [full-feature-table](https://github.com/sueltschi-sbb/abw-tables/tree/master/src/app/examples/full-feature-table))
.

```scss
.container {
  display: flex;
  flex-direction: column;

  abw-table {
    flex: 1;
  }
}
```

### Remote Table

The preceding examples assumed that all data for the data source is loaded into the browser. To
render a table that loads each page individually with an asynchronous call, the
alternative `AbwRemoteTableDataSource` can be used as a substitution for the
default `SbbTableDataSource` (
see [remote-table](https://github.com/sueltschi-sbb/abw-tables/tree/master/src/app/examples/remote-table))
.

The remote data source must implement the `execLoad` method, this method is called whenever the
paging, sorting or filter settings of the table are changed. Using `AbwRemoteTableDataSource` also
takes care of displaying a loading animation automatically.

```typescript
import {HttpClient} from "@angular/common/http";

@Injectable()
export class MyRemoteTableDataSource extends AbwRemoteTableDataSource<TableData, string> {
  constructor(private httpClient: HttpClient) {
    super();
  }

  protected execLoad(
    sort?: { column: string; direction: 'asc' | 'desc' },
    page?: { pageSize: number; pageIndex: number },
    filter?: string
  ): Observable<{ data: TableData[]; length: number; pageIndex: number }> {
    return this.httpClient.get<{ data: TableData[]; length: number; pageIndex: number }>(
      `https://backend.api/data?
          limit=${page?.pageSize}&
          offset=${page?.pageSize * page?.pageIndex}&
          sort=${sort?.column}&
          direction=${sort?.direction}&
          query=${filter}`);
  }
}
```

```html

<abw-table [dataSource]="myRemoteDataSource" [pageSize]="15">
  <abw-column id="id" title="ID" width="10%"></abw-column>
  <abw-column id="name" title="Name" width="80%"></abw-column>
  <abw-column id="date" title="date" width="10%"></abw-column>
</abw-table>
```
