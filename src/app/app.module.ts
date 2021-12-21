import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SbbHeaderLeanModule } from '@sbb-esta/angular/header-lean';
import { HttpClientModule } from '@angular/common/http';
import { SbbInputModule } from '@sbb-esta/angular/input';
import { ReactiveFormsModule } from '@angular/forms';
import { SimpleTableComponent } from './examples/simple-table/simple-table.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { SbbSidebarModule } from '@sbb-esta/angular/sidebar';
import { SbbAccordionModule } from '@sbb-esta/angular/accordion';
import { PagedTableComponent } from './examples/paged-table/paged-table.component';
import { GroupedTableComponent } from './examples/grouped-table/grouped-table.component';
import { FormattedTableComponent } from './examples/formatted-table/formatted-table.component';
import { FilterableTableComponent } from './examples/filterable-table/filterable-table.component';
import { StickyTableComponent } from './examples/sticky-table/sticky-table.component';
import { FullFeatureTableComponent } from './examples/full-feature-table/full-feature-table.component';
import { ExamplePageComponent } from './examples/example-page/example-page.component';
import { SbbButtonModule } from '@sbb-esta/angular/button';
import { AbwTableModule } from './abw-table/abw-table.module';
import { SbbIconModule } from '@sbb-esta/angular/icon';

@NgModule({
  declarations: [
    AppComponent,
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
    SbbInputModule,
    SbbSidebarModule,
    SbbIconModule,
    SbbAccordionModule,
    SbbButtonModule,
    AbwTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
