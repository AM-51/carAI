import { Component, Input } from '@angular/core';
import {
  ApexChart,
  ApexNonAxisChartSeries,
  ApexFill,
  ApexPlotOptions,
} from 'ng-apexcharts';

@Component({
  selector: 'app-percent-chart',
  templateUrl: './percent-chart.component.html',
  styleUrls: ['./percent-chart.component.css'],
})
export class PercentChartComponent {
  @Input() chartSeries: ApexNonAxisChartSeries = [];
  @Input() chartLabels: Array<string> = [];

  chartDetails: ApexChart = {
    type: 'radialBar',
    height: 270,
  };

  fill: ApexFill = {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      shadeIntensity: 0.15,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 65, 91],
    },
  };

  stroke: any = {
    dashArray: 4,
  };

  plotOptions: ApexPlotOptions = {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      dataLabels: {
        name: {
          fontSize: '16px',
          color: undefined,
          offsetY: 90,
        },
        value: {
          offsetY: 50,
          fontSize: '16px',
          color: undefined,
          formatter: function (val) {
            return val + '%';
          },
        },
      },
    },
  };
}
