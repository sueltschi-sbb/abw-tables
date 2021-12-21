import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleTableComponent } from './examples/simple-table/simple-table.component';
import { PagedTableComponent } from './examples/paged-table/paged-table.component';
import { GroupedTableComponent } from './examples/grouped-table/grouped-table.component';
import { FormattedTableComponent } from './examples/formated-table/formatted-table.component';
import { FilterableTableComponent } from './examples/filterable-table/filterable-table.component';
import { StickyTableComponent } from './examples/sticky-table/sticky-table.component';
import { FullFeatureTableComponent } from './examples/full-feature-table/full-feature-table.component';

const routes: Routes = [
  { path: 'simple', component: SimpleTableComponent },
  { path: 'paged', component: PagedTableComponent },
  { path: 'grouped', component: GroupedTableComponent },
  { path: 'formatted', component: FormattedTableComponent },
  { path: 'filterable', component: FilterableTableComponent },
  { path: 'sticky', component: StickyTableComponent },
  { path: 'full', component: FullFeatureTableComponent },
  { path: '', redirectTo: '/simple', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
