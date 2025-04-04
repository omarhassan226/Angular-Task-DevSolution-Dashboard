import { Component } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexFill,
  ApexMarkers,
  ApexYAxis,
  ApexXAxis,
  ApexTooltip,
} from 'ng-apexcharts';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-report-chart',
  standalone: true,
  imports: [NgApexchartsModule, MatButtonModule, MatMenuModule],
  templateUrl: './report-chart.component.html',
  styleUrls: ['./report-chart.component.scss'],
})
export class ReportChartComponent {
  public series!: ApexAxisChartSeries;
  public chart!: ApexChart;
  public dataLabels!: ApexDataLabels;
  public markers!: ApexMarkers;
  public title!: ApexTitleSubtitle;
  public fill!: ApexFill;
  public yaxis!: ApexYAxis;
  public xaxis!: ApexXAxis;
  public tooltip!: ApexTooltip;

  constructor() {
    this.initChartData();
  }

  initChartData(): void {
    const dummyData: [number, number][] = [
      [new Date('2025-03-01').getTime(), 1000],
      [new Date('2025-03-02').getTime(), 1500],
      [new Date('2025-03-03').getTime(), 1300],
      [new Date('2025-03-04').getTime(), 1800],
      [new Date('2025-03-05').getTime(), 1700],
      [new Date('2025-03-06').getTime(), 2200],
      [new Date('2025-03-07').getTime(), 1900],
      [new Date('2025-03-08').getTime(), 2500],
      [new Date('2025-03-09').getTime(), 2300],
      [new Date('2025-03-10').getTime(), 2100],
    ];

    this.series = [{ name: 'Sales', data: dummyData }];

    this.chart = {
      type: 'area',
      stacked: false,
      height: 350,
      zoom: {
        type: 'x',
        enabled: true,
        autoScaleYaxis: true,
      },
      toolbar: { autoSelected: 'zoom' },
    };

    this.dataLabels = { enabled: false };
    this.markers = { size: 4 };
    this.title = { text: 'Sales Growth Over Time', align: 'left' };
    this.fill = {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    };
    this.yaxis = { title: { text: 'Sales Amount ($)' } };
    this.xaxis = { type: 'datetime', title: { text: 'Date' } };
    this.tooltip = {
      shared: true,
      x: { format: 'dd MMM yyyy' },
      y: {
        formatter: (val: number) => `$${val.toLocaleString()}`,
      },
    };
  }

  changeTab(type: 'daily' | 'weekly' | 'monthly') {
    let dummyData: [number, number][];

    if (type === 'daily') {
      dummyData = [
        [new Date('2025-03-01').getTime(), 1000],
        [new Date('2025-03-02').getTime(), 1500],
        [new Date('2025-03-03').getTime(), 1300],
        [new Date('2025-03-04').getTime(), 1800],
        [new Date('2025-03-05').getTime(), 1700],
        [new Date('2025-03-06').getTime(), 2200],
        [new Date('2025-03-07').getTime(), 1900],
      ];
    } else if (type === 'weekly') {
      dummyData = [
        [new Date('2025-02-01').getTime(), 7000],
        [new Date('2025-02-08').getTime(), 8000],
        [new Date('2025-02-15').getTime(), 7500],
        [new Date('2025-02-22').getTime(), 9000],
      ];
    } else {
      dummyData = [
        [new Date('2024-11-01').getTime(), 30000],
        [new Date('2024-12-01').getTime(), 35000],
        [new Date('2025-01-01').getTime(), 40000],
        [new Date('2025-02-01').getTime(), 38000],
        [new Date('2025-03-01').getTime(), 42000],
      ];
    }

    this.series = [{ name: 'Sales', data: dummyData }];
  }
}
