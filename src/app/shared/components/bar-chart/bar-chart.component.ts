import { Component, Input } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
} from 'ng-apexcharts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent {
  @Input() chartSeries: ApexAxisChartSeries = [];

  chartDetails: ApexChart = {
    type: 'bar',
    toolbar: {
      show: false,
    },
    height: 200,
  };

  dataLabels: ApexDataLabels = {
    enabled: false,
  };

  plotOptions: ApexPlotOptions = {
    bar: {
      horizontal: true,
    },
  };

  xaxis: ApexXAxis = {
    categories: ['Basketball', 'Gaming', 'Chess', 'Football'],
  };
}
