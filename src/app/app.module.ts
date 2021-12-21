import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SbbHeaderLeanModule } from '@sbb-esta/angular/header-lean';
import { AbwTableComponent } from './abw-table/abw-table.component';
import { AbwColumnComponent } from './abw-table/abw-column/abw-column.component';
import { SbbTableModule } from '@sbb-esta/angular/table';
import { HttpClientModule } from '@angular/common/http';
import { AbwColumnHeaderDirective } from './abw-table/abw-column/abw-column-header.directive';
import { AbwColumnFilterDirective } from './abw-table/abw-column/abw-column-filter.directive';
import { AbwColumnCellDirective } from './abw-table/abw-column/abw-column-cell.directive';
import { SbbTooltipModule } from '@sbb-esta/angular/tooltip';
import { SbbPaginationModule } from '@sbb-esta/angular/pagination';
import { SbbIconModule } from '@sbb-esta/angular/icon';
import { SbbInputModule } from '@sbb-esta/angular/input';
import { ReactiveFormsModule } from '@angular/forms';
import { AbwRowGroupComponent } from './abw-table/abw-column/abw-row-group.component';
import { SimpleTableComponent } from './examples/simple-table/simple-table.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { SbbSidebarModule } from '@sbb-esta/angular/sidebar';
import { SbbAccordionModule } from '@sbb-esta/angular/accordion';
import { PagedTableComponent } from './examples/paged-table/paged-table.component';
import { SbbLoadingModule } from '@sbb-esta/angular/loading';
import { GroupedTableComponent } from './examples/grouped-table/grouped-table.component';
import { FormattedTableComponent } from './examples/formatted-table/formatted-table.component';
import { FilterableTableComponent } from './examples/filterable-table/filterable-table.component';
import { StickyTableComponent } from './examples/sticky-table/sticky-table.component';
import { FullFeatureTableComponent } from './examples/full-feature-table/full-feature-table.component';
import { ExamplePageComponent } from './examples/example-page/example-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AbwTableComponent,
    AbwColumnComponent,
    AbwColumnHeaderDirective,
    AbwColumnFilterDirective,
    AbwColumnCellDirective,
    AbwRowGroupComponent,
    SimpleTableComponent,
    PagedTableComponent,
    GroupedTableComponent,
    FormattedTableComponent,
    FilterableTableComponent,
    StickyTableComponent,
    FullFeatureTableComponent,
    ExamplePageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    SbbHeaderLeanModule,
    SbbTableModule,
    SbbTooltipModule,
    SbbPaginationModule,
    SbbIconModule,
    SbbInputModule,
    SbbSidebarModule,
    SbbAccordionModule,
    SbbLoadingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
