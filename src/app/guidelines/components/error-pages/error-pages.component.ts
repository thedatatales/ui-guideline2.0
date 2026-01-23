import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  standalone: false,
  selector: 'pmgt-error-pages',
  templateUrl: './error-pages.component.html',
  styleUrls: ['./error-pages.component.scss'],
})
export class ErrorPagesComponent implements OnInit {
  currentCode: { [key: string]: string } = {
    basic: '',
    commonErrors: '',
  };

  errorCodes: number[] = [404, 503, 403, 400, 500, 405, 502, 408, 401, 409, 504, 410, 411, 412, 413, 416, 429, 499, 0, 100, 102];
  commonErrorCodes: number[] = [404, 500, 403, 503];

  errorPagesCodeSnippets: { [key: string]: { [key: string]: string } } = {
    basic: {
      default: `<!-- Basic Error Page -->
<bntv-gx-error [errorCode]="404"></bntv-gx-error>`,
    },
    commonErrors: {
      default: `<!-- Common Error Pages -->
@for (errorCode of commonErrorCodes; track errorCode) {
  <bntv-gx-error [errorCode]="errorCode"></bntv-gx-error>
}`,
    },
  };

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    Object.keys(this.currentCode).forEach((key) => {
      this.currentCode[key] = this.errorPagesCodeSnippets[key]?.default || '';
    });
  }

  onVariantClick(section: string, variant: string): void {
    if (
      this.errorPagesCodeSnippets[section] &&
      this.errorPagesCodeSnippets[section][variant]
    ) {
      this.currentCode[section] =
        this.errorPagesCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }
}
