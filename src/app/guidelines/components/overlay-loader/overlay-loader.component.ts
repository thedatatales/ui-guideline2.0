import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  standalone: false,
  selector: 'app-overlay-loader',
  templateUrl: './overlay-loader.component.html',
  styleUrls: ['./overlay-loader.component.scss'],
})
export class OverlayLoaderComponent implements OnInit {
  showLoader = false;

  currentCode: { [key: string]: string } = {
    basic: '',
    withMessage: '',
    absolute: '',
  };

  overlayLoaderCodeSnippets: { [key: string]: { [key: string]: string } } = {
    basic: {
      default: `<!-- Basic Overlay Loader -->
<bntv-overlay-loader></bntv-overlay-loader>

<!-- Overlay Loader with Custom Background -->
<bntv-overlay-loader [backgroundColor]="'rgba(0, 0, 0, 0.5)'"></bntv-overlay-loader>`,
    },
    withMessage: {
      default: `<!-- Overlay Loader with Message and Description -->
<bntv-overlay-loader
  [message]="'Processing...'"
  [description]="'Please wait while we process your request'"
></bntv-overlay-loader>

<!-- Overlay Loader with Custom Position -->
<bntv-overlay-loader
  [position]="'absolute'"
  [backgroundColor]="'rgba(0, 0, 0, 0.2)'"
  [message]="'Loading data...'"
></bntv-overlay-loader>`,
    },
    absolute: {
      default: `<!-- Absolute Positioned Overlay Loader -->
<div style="position: relative; height: 200px;">
  <div>Content that will be covered by overlay</div>
  <bntv-overlay-loader
    [position]="'absolute'"
    [backgroundColor]="'rgba(0, 0, 0, 0.3)'"
    [message]="'Processing...'"
  ></bntv-overlay-loader>
</div>

<!-- Conditional Overlay Loader -->
@if (isLoading) {
  <bntv-overlay-loader
    [message]="'Loading...'"
  ></bntv-overlay-loader>
}`,
    },
  };

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    Object.keys(this.currentCode).forEach((key) => {
      this.currentCode[key] = this.overlayLoaderCodeSnippets[key]?.default || '';
    });
  }

  onVariantClick(section: string, variant: string = 'default'): void {
    if (this.overlayLoaderCodeSnippets[section] && this.overlayLoaderCodeSnippets[section][variant]) {
      this.currentCode[section] = this.overlayLoaderCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }

  toggleLoader(): void {
    this.showLoader = !this.showLoader;
  }
}
