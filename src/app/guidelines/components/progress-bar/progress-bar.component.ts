import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  standalone: false,
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit {
  lineProgress = 50;
  bufferProgress = 60;
  bufferValue = 75;
  circleProgress = 65;

  currentCode: { [key: string]: string } = {
    line: '',
    spinner: '',
    circle: '',
    buffer: '',
  };

  progressBarCodeSnippets: { [key: string]: { [key: string]: string } } = {
    line: {
      default: `<!-- Line Progress Bar -->
<bntv-progress-bar
  [type]="'line'"
  [mode]="'determinate'"
  [value]="50"
  [theme]="'primary'"
></bntv-progress-bar>

<!-- Indeterminate Line Progress Bar -->
<bntv-progress-bar
  [type]="'line'"
  [mode]="'indeterminate'"
  [theme]="'primary'"
></bntv-progress-bar>`,
    },
    spinner: {
      default: `<!-- Spinner Progress Bar -->
<bntv-progress-bar
  [type]="'spinner'"
  [mode]="'indeterminate'"
  [diameter]="50"
  [strokeWidth]="5"
  [theme]="'primary'"
></bntv-progress-bar>`,
    },
    circle: {
      default: `<!-- Circle Progress Bar -->
<bntv-progress-bar
  [type]="'circle'"
  [mode]="'determinate'"
  [value]="65"
  [percent]="65"
  [radius]="50"
  [outerStrokeWidth]="8"
  [innerStrokeWidth]="4"
  [outerStrokeColor]="'var(--accentColor500)'"
  [innerStrokeColor]="'var(--grayColor200)'"
  [showTitle]="true"
  [showSubtitle]="false"
></bntv-progress-bar>`,
    },
    buffer: {
      default: `<!-- Buffer Progress Bar -->
<bntv-progress-bar
  [type]="'line'"
  [mode]="'buffer'"
  [value]="60"
  [bufferValue]="75"
  [theme]="'primary'"
></bntv-progress-bar>`,
    },
  };

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    Object.keys(this.currentCode).forEach((key) => {
      this.currentCode[key] = this.progressBarCodeSnippets[key]?.default || '';
    });
  }

  onVariantClick(section: string, variant: string = 'default'): void {
    if (this.progressBarCodeSnippets[section] && this.progressBarCodeSnippets[section][variant]) {
      this.currentCode[section] = this.progressBarCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }
}
