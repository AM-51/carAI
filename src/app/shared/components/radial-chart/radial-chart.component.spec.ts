import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadialChartComponent } from './radial-chart.component';

describe('RadialChartComponent', () => {
  let component: RadialChartComponent;
  let fixture: ComponentFixture<RadialChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RadialChartComponent]
    });
    fixture = TestBed.createComponent(RadialChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
