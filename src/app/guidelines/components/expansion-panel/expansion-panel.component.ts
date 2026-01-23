import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  standalone: false,
  selector: 'pmgt-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss'],
})
export class ExpansionPanelComponent implements OnInit {
  currentCode: { [key: string]: string } = {
    basic: '',
    multi: '',
    controlled: '',
    withActions: '',
    customTheme: '',
  };

  expansionPanelCodeSnippets: { [key: string]: { [key: string]: string } } = {
    basic: {
      default: `<!-- Basic Expansion Panel -->
<bntv-expansion-panel
  [multi]="false"
  [togglePosition]="'after'"
>
  <bntv-panel
    [title]="'Panel 1'"
    [panelData]="{ text: 'Content for panel 1' }"
  >
    <div class="p-md">
      <p>Content for panel 1</p>
    </div>
  </bntv-panel>
  <bntv-panel
    [title]="'Panel 2'"
    [panelData]="{ text: 'Content for panel 2' }"
  >
    <div class="p-md">
      <p>Content for panel 2</p>
    </div>
  </bntv-panel>
</bntv-expansion-panel>`,
    },
    multi: {
      default: `<!-- Multi Expansion Panel -->
<bntv-expansion-panel
  [multi]="true"
  [togglePosition]="'after'"
>
  <bntv-panel [title]="'Panel 1'">
    <div class="p-md">
      <p>Content for panel 1</p>
    </div>
  </bntv-panel>
  <bntv-panel [title]="'Panel 2'">
    <div class="p-md">
      <p>Content for panel 2</p>
    </div>
  </bntv-panel>
</bntv-expansion-panel>`,
    },
    controlled: {
      default: `<!-- Controlled Expansion Panel -->
<bntv-expansion-panel
  [multi]="false"
  [controlled]="true"
  [togglePosition]="'after'"
>
  <bntv-panel
    [title]="'Panel 1'"
    [isExpanded]="true"
  >
    <div class="p-md">
      <p>Content for panel 1</p>
    </div>
  </bntv-panel>
  <bntv-panel
    [title]="'Panel 2'"
    [isExpanded]="false"
  >
    <div class="p-md">
      <p>Content for panel 2</p>
    </div>
  </bntv-panel>
</bntv-expansion-panel>`,
    },
    withActions: {
      default: `<!-- Expansion Panel with Actions -->
<bntv-expansion-panel
  [multi]="false"
  [actionsTemplate]="actionsTemplate"
  [togglePosition]="'after'"
>
  <bntv-panel [title]="'Panel with Actions'">
    <div class="p-md">
      <p>Content with action buttons</p>
    </div>
  </bntv-panel>
</bntv-expansion-panel>`,
    },
    customTheme: {
      default: `<!-- Expansion Panel with Custom Theme -->
<bntv-expansion-panel
  [multi]="false"
  [themeType]="'basic'"
  [displayMode]="'flat'"
  [togglePosition]="'after'"
>
  <bntv-panel [title]="'Custom Theme Panel'">
    <div class="p-md">
      <p>Content with custom theme</p>
    </div>
  </bntv-panel>
</bntv-expansion-panel>`,
    },
  };

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    Object.keys(this.currentCode).forEach((key) => {
      this.currentCode[key] =
        this.expansionPanelCodeSnippets[key]?.default || '';
    });
  }

  onVariantClick(section: string, variant: string): void {
    if (
      this.expansionPanelCodeSnippets[section] &&
      this.expansionPanelCodeSnippets[section][variant]
    ) {
      this.currentCode[section] =
        this.expansionPanelCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }
}
