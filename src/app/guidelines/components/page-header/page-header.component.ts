import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  standalone: false,
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent implements OnInit {
  currentCode: { [key: string]: string } = {
    basic: '',
    withContent: '',
  };

  pageHeaderCodeSnippets: { [key: string]: { [key: string]: string } } = {
    basic: {
      default: `<!-- Basic Page Header -->
<bntv-page-header>
  <div>Page Title</div>
</bntv-page-header>`,
    },
    withContent: {
      default: `<!-- Page Header with Left, Middle, and Right Content -->
<bntv-page-header>
  <div header-content-left>
    <h2>Page Title</h2>
  </div>
  <div header-content-middle>
    <bntv-search-box [placeholder]="'Search...'"></bntv-search-box>
  </div>
  <div header-content-right>
    <bntv-mat-button [value]="'Action'" [type]="'stroked'"></bntv-mat-button>
  </div>
</bntv-page-header>`,
    },
  };

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    Object.keys(this.currentCode).forEach((key) => {
      this.currentCode[key] = this.pageHeaderCodeSnippets[key]?.default || '';
    });
  }

  onVariantClick(section: string, variant: string = 'default'): void {
    if (this.pageHeaderCodeSnippets[section] && this.pageHeaderCodeSnippets[section][variant]) {
      this.currentCode[section] = this.pageHeaderCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }
}
