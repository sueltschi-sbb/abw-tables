import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupedTableComponent } from './grouped-table.component';

describe('GroupedTableComponent', () => {
  let component: GroupedTableComponent;
  let fixture: ComponentFixture<GroupedTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupedTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
