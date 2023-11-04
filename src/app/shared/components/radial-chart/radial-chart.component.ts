import { Component, Input, ViewChild } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexTitleSubtitle,
  ApexLegend,
} from 'ng-apexcharts';

@Component({
  selector: 'app-radial-chart',
  templateUrl: './radial-chart.component.html',
  styleUrls: ['./radial-chart.component.css'],
})
export class RadialChartComponent {
  @Input() chartSeries: ApexNonAxisChartSeries = [];
  @Input() chartLabels: Array<string> = [];

  chartDetails: ApexChart = {
    type: 'radialBar',
    height: 250,
  };

  chartColors: Array<string> = ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'];

  chartLegend: ApexLegend = {
    show: true,
    floating: true,
    fontSize: '16px',
    position: 'left',
    labels: {
      useSeriesColors: true,
    },
    formatter: function (seriesName, opts) {
      return seriesName + ':  ' + opts.w.globals.series[opts.seriesIndex];
    },
  };

  plotOptions: ApexPlotOptions = {
    radialBar: {
      offsetY: 0,
      startAngle: 0,
      endAngle: 270,
      hollow: {
        size: '40%',
        background: 'transparent',
        image: undefined,
      },
      dataLabels: {
        name: {
          show: false,
        },
        value: {
          show: false,
        },
      },
    },
  };
}
