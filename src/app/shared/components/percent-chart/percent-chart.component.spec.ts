import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentChartComponent } from './percent-chart.component';

describe('PercentChartComponent', () => {
  let component: PercentChartComponent;
  let fixture: ComponentFixture<PercentChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PercentChartComponent]
    });
    fixture = TestBed.createComponent(PercentChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
