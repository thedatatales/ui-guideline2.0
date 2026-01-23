import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  standalone: false,
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit {
  selectedIndex = 0;
  selectedIndex2 = 1;
  selectedIndex3 = 0;

  currentCode: { [key: string]: string } = {
    basic: '',
    withIcons: '',
    vertical: '',
  };

  tabCodeSnippets: { [key: string]: { [key: string]: string } } = {
    basic: {
      default: `<!-- Basic Tabs -->
<bntv-tabs [(selectedIndex)]="selectedIndex">
  <bntv-tab [title]="'Tab 1'">
    <div>Content for Tab 1</div>
  </bntv-tab>
  <bntv-tab [title]="'Tab 2'">
    <div>Content for Tab 2</div>
  </bntv-tab>
  <bntv-tab [title]="'Tab 3'">
    <div>Content for Tab 3</div>
  </bntv-tab>
</bntv-tabs>`,
    },
    withIcons: {
      default: `<!-- Tabs with Icons -->
<bntv-tabs [(selectedIndex)]="selectedIndex" [theme]="'accent'">
  <bntv-tab [title]="'Home'" [icon]="'home$fontset$icomoon'">
    <div>Home content</div>
  </bntv-tab>
  <bntv-tab [title]="'Settings'" [icon]="'settings$fontset$icomoon'">
    <div>Settings content</div>
  </bntv-tab>
  <bntv-tab [title]="'Profile'" [icon]="'user$fontset$icomoon'">
    <div>Profile content</div>
  </bntv-tab>
</bntv-tabs>`,
    },
    vertical: {
      default: `<!-- Vertical Tabs -->
<bntv-tabs [(selectedIndex)]="selectedIndex" [isVertical]="true">
  <bntv-tab [title]="'Tab 1'">
    <div>Vertical Tab 1 Content</div>
  </bntv-tab>
  <bntv-tab [title]="'Tab 2'">
    <div>Vertical Tab 2 Content</div>
  </bntv-tab>
  <bntv-tab [title]="'Tab 3'">
    <div>Vertical Tab 3 Content</div>
  </bntv-tab>
</bntv-tabs>`,
    },
  };

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    Object.keys(this.currentCode).forEach((key) => {
      this.currentCode[key] = this.tabCodeSnippets[key]?.default || '';
    });
  }

  onVariantClick(section: string, variant: string = 'default'): void {
    if (this.tabCodeSnippets[section] && this.tabCodeSnippets[section][variant]) {
      this.currentCode[section] = this.tabCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }
}
