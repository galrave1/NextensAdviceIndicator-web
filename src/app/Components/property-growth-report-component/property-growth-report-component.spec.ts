import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyGrowthReportComponent } from './property-growth-report-component';

describe('PropertyGrowthReportComponent', () => {
  let component: PropertyGrowthReportComponent;
  let fixture: ComponentFixture<PropertyGrowthReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PropertyGrowthReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyGrowthReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
