import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  standalone: false,
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent implements OnInit {
  @ViewChild('customTooltipTemplate') customTooltipTemplate: TemplateRef<any>;

  currentCode: { [key: string]: string } = {
    basic: '',
    tippy: '',
    customTemplate: '',
  };

  tooltipCodeSnippets: { [key: string]: { [key: string]: string } } = {
    basic: {
      default: `<!-- Basic Tooltip using appTooltip directive -->
<button mat-button [appTooltip]="'This is a tooltip message'">
  Hover me
</button>

<!-- Tooltip with custom offsets -->
<button mat-button 
  [appTooltip]="'Tooltip with offset'"
  [offsetX]="10"
  [offsetY]="20">
  Hover me
</button>`,
    },
    tippy: {
      default: `<!-- Tooltip using appTippy directive (Tippy.js) -->
<button mat-button 
  [appTippyTitle]="'Tippy Tooltip'"
  [tippyTitlePosition]="'top'">
  Hover me
</button>

<!-- Tippy with HTML content -->
<button mat-button 
  [appTippyTitle]="'<strong>Bold</strong> tooltip text'"
  [tippyAllowHTML]="true">
  Hover me
</button>

<!-- Tippy with custom options -->
<button mat-button 
  [appTippyTitle]="'Custom Tippy'"
  [tippyTitlePosition]="'bottom'">
  Hover me
</button>`,
    },
    customTemplate: {
      default: `<!-- Tooltip with Custom Template -->
<button mat-button 
  [appTooltip]="'Custom tooltip'"
  [templateRef]="customTooltipTemplate">
  Hover me
</button>

<ng-template #customTooltipTemplate>
  <div fxLayout="column" fxLayoutGap="4px">
    <strong>Custom Tooltip</strong>
    <span>This is a custom template</span>
  </div>
</ng-template>

<!-- Using bntv-tooltip component -->
<bntv-tooltip [text]="'Tooltip text'"></bntv-tooltip>`,
    },
  };

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    Object.keys(this.currentCode).forEach((key) => {
      this.currentCode[key] = this.tooltipCodeSnippets[key]?.default || '';
    });
  }

  onVariantClick(section: string, variant: string = 'default'): void {
    if (this.tooltipCodeSnippets[section] && this.tooltipCodeSnippets[section][variant]) {
      this.currentCode[section] = this.tooltipCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }
}
