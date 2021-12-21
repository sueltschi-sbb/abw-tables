import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullFeatureTableComponent } from './full-feature-table.component';

describe('FullFeatureTableComponent', () => {
  let component: FullFeatureTableComponent;
  let fixture: ComponentFixture<FullFeatureTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FullFeatureTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullFeatureTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
