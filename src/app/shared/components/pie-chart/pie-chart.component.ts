import { Component, Input } from '@angular/core';
import { ApexChart, ApexNonAxisChartSeries, ApexLegend } from 'ng-apexcharts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
})
export class PieChartComponent {
  @Input() chartSeries: ApexNonAxisChartSeries = [];
  @Input() chartLabels: Array<string> = [];

  chartDetails: ApexChart = {
    type: 'pie',
    height: 250,
  };

  chartLegend: ApexLegend = {
    position: 'bottom',
    fontSize: '12px',
  };
}
