import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WealthReportComponent } from './wealth-report-component';

describe('WealthReportComponent', () => {
  let component: WealthReportComponent;
  let fixture: ComponentFixture<WealthReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WealthReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WealthReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
