import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormattedTableComponent } from './formatted-table.component';

describe('FormatedTableComponent', () => {
  let component: FormattedTableComponent;
  let fixture: ComponentFixture<FormattedTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormattedTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormattedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
