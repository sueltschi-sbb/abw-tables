import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbwTableComponent } from './abw-table.component';
import { AbwColumnComponent } from './abw-column/abw-column.component';
import { AbwColumnHeaderDirective } from './abw-column/abw-column-header.directive';
import { AbwColumnFilterDirective } from './abw-column/abw-column-filter.directive';
import { AbwColumnCellDirective } from './abw-column/abw-column-cell.directive';
import { AbwRowGroupComponent } from './abw-column/abw-row-group.component';
import { SbbTableModule } from '@sbb-esta/angular/table';
import { SbbPaginationModule } from '@sbb-esta/angular/pagination';
import { SbbLoadingModule } from '@sbb-esta/angular/loading';

@NgModule({
  declarations: [
    AbwTableComponent,
    AbwColumnComponent,
    AbwColumnHeaderDirective,
    AbwColumnFilterDirective,
    AbwColumnCellDirective,
    AbwRowGroupComponent,
  ],
  imports: [CommonModule, SbbTableModule, SbbPaginationModule, SbbTableModule, SbbLoadingModule],
  exports: [
    AbwTableComponent,
    AbwColumnComponent,
    AbwColumnHeaderDirective,
    AbwColumnFilterDirective,
    AbwColumnCellDirective,
    AbwRowGroupComponent,
  ],
})
export class AbwTableModule {}
