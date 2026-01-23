import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  standalone: false,
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbGuidelinesComponent implements OnInit {
  basicPageInfo = {
    navigation: [
      { title: 'Home', route: '/home' },
      { title: 'Products', route: '/products' },
      { title: 'Electronics', route: '/products/electronics' },
      { title: 'Current Page' },
    ],
  };

  withSubtitlePageInfo = {
    navigation: [
      { title: 'Home', route: '/home' },
      { title: 'Settings', route: '/settings' },
      { title: 'Profile' },
    ],
    subtitle: 'User Profile Settings',
  };

  customColorsPageInfo = {
    navigation: [
      { title: 'Dashboard', route: '/dashboard' },
      { title: 'Reports', route: '/reports' },
      { title: 'Monthly Report' },
    ],
  };

  currentCode: { [key: string]: string } = {
    basic: '',
    withSubtitle: '',
    customColors: '',
  };

  breadcrumbCodeSnippets: { [key: string]: { [key: string]: string } } = {
    basic: {
      default: `<!-- Basic Breadcrumb -->
<bntv-breadcrumb
  [pageInfo]="pageInfo"
  (onClick)="onBreadcrumbClick($event)"
></bntv-breadcrumb>

<!-- pageInfo structure -->
pageInfo = {
  navigation: [
    { title: 'Home', route: '/home' },
    { title: 'Products', route: '/products' },
    { title: 'Current Page' }
  ]
};`,
    },
    withSubtitle: {
      default: `<!-- Breadcrumb with Subtitle -->
<bntv-breadcrumb
  [pageInfo]="pageInfo"
  [showTitle]="true"
></bntv-breadcrumb>

<!-- pageInfo with subtitle -->
pageInfo = {
  navigation: [
    { title: 'Home', route: '/home' },
    { title: 'Settings', route: '/settings' },
    { title: 'Profile' }
  ],
  subtitle: 'User Profile Settings'
};`,
    },
    customColors: {
      default: `<!-- Breadcrumb with Custom Colors -->
<bntv-breadcrumb
  [pageInfo]="pageInfo"
  [breadColor]="'#1976d2'"
  [recentBreadColor]="'#000000'"
  [iconColor]="'#666666'"
  [iconName]="'arrow-right-curve'"
></bntv-breadcrumb>`,
    },
  };

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    Object.keys(this.currentCode).forEach((key) => {
      this.currentCode[key] = this.breadcrumbCodeSnippets[key]?.default || '';
    });
  }

  onVariantClick(section: string, variant: string = 'default'): void {
    if (this.breadcrumbCodeSnippets[section] && this.breadcrumbCodeSnippets[section][variant]) {
      this.currentCode[section] = this.breadcrumbCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }

  onBreadcrumbClick(event: any): void {
    console.log('Breadcrumb clicked:', event);
  }
}
