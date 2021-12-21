import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterableTableComponent } from './filterable-table.component';

describe('FilterableTableComponent', () => {
  let component: FilterableTableComponent;
  let fixture: ComponentFixture<FilterableTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterableTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterableTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
