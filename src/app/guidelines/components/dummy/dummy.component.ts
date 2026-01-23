import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  standalone: false,
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss'],
})
export class DummyComponent implements OnInit {
  asyncLoaderConfig = {
    headerOptions: {
      suppressHeader: false,
      filterButtonPosition: 'left',
      suppressFilterButton: false,
    },
  };

  headerToolsConfig = {};

  currentCode: { [key: string]: string } = {
    basic: '',
  };

  dummyCodeSnippets: { [key: string]: { [key: string]: string } } = {
    basic: {
      default: `<!-- Dummy Loader Component -->
<!-- Note: This component is typically used within grid components for loading states -->
<bntv-gx-dummy-loader
  [asyncLoader]="asyncLoaderConfig"
  [headerTools]="headerToolsConfig"
></bntv-gx-dummy-loader>

<!-- TypeScript -->
asyncLoaderConfig = {
  headerOptions: {
    suppressHeader: false,
    filterButtonPosition: 'left',
    suppressFilterButton: false
  }
};

headerToolsConfig = {};`,
    },
  };

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    Object.keys(this.currentCode).forEach((key) => {
      this.currentCode[key] = this.dummyCodeSnippets[key]?.default || '';
    });
  }

  onVariantClick(section: string, variant: string = 'default'): void {
    if (this.dummyCodeSnippets[section] && this.dummyCodeSnippets[section][variant]) {
      this.currentCode[section] = this.dummyCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }
}
