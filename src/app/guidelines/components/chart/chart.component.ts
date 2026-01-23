import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { BehaviorSubject } from 'rxjs';

@Component({
  standalone: false,
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  basicChartOptions: any = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Basic Column Chart',
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    },
    yAxis: {
      title: {
        text: 'Values',
      },
    },
    series: [
      {
        name: 'Series 1',
        data: [29.9, 71.5, 106.4, 129.2, 144.0],
      },
    ],
  };

  lineChartOptions: any = {
    chart: {
      type: 'line',
    },
    title: {
      text: 'Line Chart',
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    },
    yAxis: {
      title: {
        text: 'Values',
      },
    },
    series: [
      {
        name: 'Series 1',
        data: [29.9, 71.5, 106.4, 129.2, 144.0],
      },
    ],
  };

  pieChartOptions: any = {
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Pie Chart',
    },
    series: [
      {
        name: 'Data',
        data: [
          { name: 'Category A', y: 35 },
          { name: 'Category B', y: 25 },
          { name: 'Category C', y: 40 },
        ],
      },
    ],
  };

  chartOptions$ = new BehaviorSubject(this.basicChartOptions);
  lineChartOptions$ = new BehaviorSubject(this.lineChartOptions);
  pieChartOptions$ = new BehaviorSubject(this.pieChartOptions);

  currentCode: { [key: string]: string } = {
    basic: '',
    line: '',
    pie: '',
  };

  chartCodeSnippets: { [key: string]: { [key: string]: string } } = {
    basic: {
      default: `<!-- Basic Chart -->
<bntv-chart [options]="chartOptions$"></bntv-chart>

<!-- Or with object directly -->
<bntv-chart [options]="chartOptions"></bntv-chart>`,
    },
    line: {
      default: `<!-- Line Chart -->
<bntv-chart [options]="lineChartOptions$"></bntv-chart>`,
    },
    pie: {
      default: `<!-- Pie Chart -->
<bntv-chart [options]="pieChartOptions$"></bntv-chart>`,
    },
  };

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    Object.keys(this.currentCode).forEach((key) => {
      this.currentCode[key] = this.chartCodeSnippets[key]?.default || '';
    });
  }

  onVariantClick(section: string, variant: string = 'default'): void {
    if (this.chartCodeSnippets[section] && this.chartCodeSnippets[section][variant]) {
      this.currentCode[section] = this.chartCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }
}
