import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  standalone: false,
  selector: 'pmgt-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.scss'],
})
export class IframeComponent implements OnInit {
  currentCode: { [key: string]: string } = {
    basic: '',
    withUrl: '',
  };

  iframeUrl = 'https://www.example.com';

  iframeCodeSnippets: { [key: string]: { [key: string]: string } } = {
    basic: {
      default: `<!-- Basic Iframe -->
<bntv-embeded-iframe
  [url]="'https://www.example.com'"
>
</bntv-embeded-iframe>`,
    },
    withUrl: {
      default: `<!-- Iframe with Dynamic URL -->
<bntv-embeded-iframe
  [url]="iframeUrl"
>
</bntv-embeded-iframe>

<!-- In Component TypeScript -->
iframeUrl = 'https://www.example.com';`,
    },
  };

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    Object.keys(this.currentCode).forEach((key) => {
      this.currentCode[key] = this.iframeCodeSnippets[key]?.default || '';
    });
  }

  onVariantClick(section: string, variant: string): void {
    if (
      this.iframeCodeSnippets[section] &&
      this.iframeCodeSnippets[section][variant]
    ) {
      this.currentCode[section] =
        this.iframeCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }
}
