import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  standalone: false,
  selector: 'pmgt-vw-cards',
  templateUrl: './vw-cards.component.html',
  styleUrls: ['./vw-cards.component.scss'],
})
export class VwCardsRootComponent implements OnInit {
  currentCode: { [key: string]: string } = {
    basic: '',
    cardIconRight: '',
    cardIconRightWithBg: '',
    kpi: '',
    kpiIconMom: '',
    kpiGrid: '',
    withChips: '',
    semanticVariants: '',
    withVariance: '',
    parentChild: '',
    revenueCard: '',
    recentDocuments: '',
    quickAction: '',
    vwIcon: '',
  };

  vwCardsCodeSnippets: { [key: string]: { [key: string]: string } } = {
    basic: {
      default: `<div class="vw-card-section" style="display: flex; flex-direction: column; justify-content: space-between; max-width: 360px;">
  <div class="vw-card-title">Report name</div>
  <div class="vw-card-description">Short summary. Use only core-mixin.scss card classes.</div>
</div>`,
    },
    cardIconRight: {
      default: `<div class="vw-card-section" style="display: flex; flex-direction: column; justify-content: space-between; max-width: 300px;">
  <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.75rem; flex-direction: row;">
    <div class="vw-card-title">Potential Revenue</div>
    <div style="flex-shrink: 0;">
      <bntv-icon [iconName]="'Refresh-New'" [type]="'fontset'" [fontSet]="'icomoon'" [width]="'20px'" [height]="'20px'" [color]="'#374151'"></bntv-icon>
    </div>
  </div>
  <div style="display: flex; justify-content: space-between; align-items: baseline; gap: 0.5rem; flex-wrap: wrap;">
    <div class="vw-card-metric-lg">₹2.5M</div>
    <div class="vw-card-variance is-positive"><bntv-icon [iconName]="'trend-up-bold'" [type]="'fontset'" [fontSet]="'icomoon'" [width]="'1em'" [height]="'1em'"></bntv-icon> +12% from last week</div>
  </div>
</div>`,
    },
    cardIconRightWithBg: {
      default: `<div class="vw-card-section" style="display: flex; flex-direction: column; justify-content: space-between; max-width: 300px;">
  <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.75rem; flex-direction: row;">
    <div class="vw-card-title">Potential Revenue</div>
    <span class="vw-chip vw-chip--neutral" style="display: inline-flex; align-items: center; justify-content: center; padding: 0.5rem;">
      <bntv-icon [iconName]="'Refresh-New'" [type]="'fontset'" [fontSet]="'icomoon'" [width]="'20px'" [height]="'20px'"></bntv-icon>
    </span>
  </div>
  <div style="display: flex; justify-content: space-between; align-items: baseline; gap: 0.5rem; flex-wrap: wrap;">
    <div class="vw-card-metric-lg">₹2.5M</div>
    <div class="vw-card-variance is-positive"><bntv-icon [iconName]="'trend-up-bold'" [type]="'fontset'" [fontSet]="'icomoon'" [width]="'1em'" [height]="'1em'"></bntv-icon> +12% from last week</div>
  </div>
</div>`,
    },
    kpi: {
      default: `<div class="vw-card-section" style="display: flex; flex-direction: column; justify-content: space-between; max-width: 300px;">
  <div class="vw-card-title">Potential Revenue</div>
  <div style="display: flex; justify-content: space-between; align-items: baseline; gap: 0.5rem; flex-wrap: wrap;">
    <div class="vw-card-metric-lg">₹2.5M</div>
    <div class="vw-card-variance is-positive"><bntv-icon [iconName]="'trend-up-bold'" [type]="'fontset'" [fontSet]="'icomoon'" [width]="'1em'" [height]="'1em'"></bntv-icon> +12% from last week</div>
  </div>
</div>`,
    },
    kpiIconMom: {
      default: `<div class="vw-card-section" style="display: flex; flex-direction: column; justify-content: space-between; max-width: 360px;">
  <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.75rem; flex-direction: row;">
    <div class="vw-card-title">Total purchases</div>
    <div class="vw-card-icon-lg vw-chip--info">
      <bntv-icon [iconName]="'Cart-Outline'" [type]="'fontset'" [fontSet]="'icomoon'" [width]="'24px'" [height]="'24px'" [color]="'#0369a1'"></bntv-icon>
    </div>
  </div>
  <div style="display: flex; justify-content: space-between; align-items: flex-end; gap: 0.75rem; flex-direction: row;">
    <div class="vw-card-metric-xl">₹19.39M</div>
    <div style="display: flex; flex-direction: row; gap: 0.25rem; align-items: flex-end;">
      <div class="vw-card-variance is-positive"><bntv-icon [iconName]="'trend-up-bold'" [type]="'fontset'" [fontSet]="'icomoon'" [width]="'1em'" [height]="'1em'"></bntv-icon> <span class="vw-card-metric-md">₹2.49M</span></div>
      <div class="vw-card-metric-label-sub">MoM</div>
    </div>
  </div>
</div>`,
    },
    kpiGrid: {
      default: `<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1rem;">
  <div class="vw-card-section" style="display: flex; flex-direction: column; justify-content: space-between;">
    <div class="vw-card-title">Potential Revenue</div>
    <div style="display: flex; justify-content: space-between; align-items: baseline; gap: 0.5rem; flex-wrap: wrap;">
      <div class="vw-card-metric-lg">₹2.5M</div>
      <div class="vw-card-variance is-positive"><bntv-icon [iconName]="'trend-up-bold'" [type]="'fontset'" [fontSet]="'icomoon'" [width]="'1em'" [height]="'1em'"></bntv-icon> +12%</div>
    </div>
  </div>
  <div class="vw-card-section" style="display: flex; flex-direction: column; justify-content: space-between;">
    <div class="vw-card-title">Lead Velocity</div>
    <div style="display: flex; justify-content: space-between; align-items: baseline; gap: 0.5rem; flex-wrap: wrap;">
      <div class="vw-card-metric-lg">10</div>
      <div class="vw-card-variance is-negative"><bntv-icon [iconName]="'trend-down-bold'" [type]="'fontset'" [fontSet]="'icomoon'" [width]="'1em'" [height]="'1em'"></bntv-icon> −8%</div>
    </div>
  </div>
  <!-- Repeat for more cards -->
</div>`,
    },
    withChips: {
      default: `<div class="vw-card-section" style="display: flex; flex-direction: column; justify-content: space-between; max-width: 420px;">
  <div style="display: flex; align-items: center; gap: 0.5rem;">
    <div class="vw-card-title">Leads</div>
    <span class="vw-chip vw-chip--success">Active</span>
  </div>
  <div>
    <div class="vw-card-metric-lg">20</div>
    <div class="vw-card-metric-label" style="margin-top: 0.75rem;">Created (L30D)</div>
    <div class="vw-card-metric-md">10</div>
  </div>
</div>`,
    },
    semanticVariants: {
      default: `<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1rem;">
  <div class="vw-card-section vw-card--success" style="display: flex; flex-direction: column; justify-content: space-between;">
    <div class="vw-card-title">Success</div>
    <div class="vw-card-metric-lg">100</div>
  </div>
  <div class="vw-card-section vw-card--error" style="display: flex; flex-direction: column; justify-content: space-between;">
    <div class="vw-card-title">Error</div>
    <div class="vw-card-metric-lg">5</div>
  </div>
  <div class="vw-card-section vw-card--warning" style="display: flex; flex-direction: column; justify-content: space-between;">
    <div class="vw-card-title">Warning</div>
    <div class="vw-card-metric-lg">15</div>
  </div>
  <div class="vw-card-section vw-card--info" style="display: flex; flex-direction: column; justify-content: space-between;">
    <div class="vw-card-title">Info</div>
    <div class="vw-card-metric-lg">42</div>
  </div>
</div>`,
    },
    withVariance: {
      default: `<div class="vw-card-section" style="display: flex; flex-direction: column; justify-content: space-between; max-width: 380px;">
  <div class="vw-card-title">Total Revenue</div>
  <div>
    <div style="display: flex; justify-content: space-between; align-items: baseline; gap: 0.5rem; flex-wrap: wrap;">
      <div class="vw-card-metric-lg">90.6M</div>
      <div class="vw-card-variance is-positive"><bntv-icon [iconName]="'trend-up-bold'" [type]="'fontset'" [fontSet]="'icomoon'" [width]="'1em'" [height]="'1em'"></bntv-icon> +15.2% (MoM)</div>
    </div>
    <div class="vw-card-footer-divider">
      <div class="vw-card-metric-label">Total invoice</div>
      <div class="vw-card-metric-md">2028</div>
    </div>
  </div>
</div>`,
    },
    parentChild: {
      default: `<div class="vw-card-parent" style="display: flex; flex-direction: column; justify-content: space-between; max-width: 400px;">
  <div class="vw-card-title">Parent Card</div>
  <div>
    <div class="vw-card-description" style="margin-top: 0.5rem;">This is a parent card with child cards inside.</div>
    <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-top: 1rem;">
      <div class="vw-card-child">
        <div class="vw-card-title">Child Card 1</div>
        <div class="vw-card-metric-md" style="margin-top: 0.25rem;">Value 1</div>
      </div>
      <div class="vw-card-child">
        <div class="vw-card-title" style="font-size: 14px;">Child Card 2</div>
        <div class="vw-card-metric-md" style="margin-top: 0.25rem;">Value 2</div>
      </div>
      <div class="vw-card-child-shaded">
        <div class="vw-card-title" style="font-size: 14px;">Child Card 3 (shaded)</div>
        <div class="vw-card-metric-md" style="margin-top: 0.25rem;">Value 3</div>
      </div>
    </div>
  </div>
</div>`,
    },
    revenueCard: {
      default: `<div class="vw-card-section" style="display: flex; flex-direction: column; justify-content: space-between; max-width: 380px;">
  <div style="display: flex; align-items: flex-start; gap: 0.75rem;">
    <div class="vw-card-icon-lg vw-chip--info">
      <bntv-icon [iconName]="'Dollar-Outline'" [type]="'fontset'" [fontSet]="'icomoon'" [width]="'24px'" [height]="'24px'" [color]="'#ffffff'"></bntv-icon>
    </div>
    <div style="flex: 1; min-width: 0;">
      <div class="vw-card-metric-label" style="margin-bottom: 0.25rem;">
        Total revenue <span style="font-size: 0.85em; opacity: 0.7;">(ITD)</span>
      </div>
      <div style="display: flex; align-items: baseline; gap: 0.5rem; flex-wrap: wrap;">
        <div class="vw-card-metric-lg">90.6M</div>
        <div class="vw-card-variance is-positive">
          <bntv-icon [iconName]="'trend-up-bold'" [type]="'fontset'" [fontSet]="'icomoon'" [width]="'1em'" [height]="'1em'"></bntv-icon> 15.2% <span style="font-size: 0.85em; opacity: 0.8;">(MoM)</span>
        </div>
      </div>
    </div>
  </div>
  <div class="vw-card-footer-divider">
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <div class="vw-card-metric-label">Total invoice</div>
      <div class="vw-card-metric-md">2028</div>
    </div>
  </div>
</div>`,
    },
    recentDocuments: {
      default: `<div class="vw-card-section" style="display: flex; flex-direction: column; justify-content: space-between; max-width: 400px;">
  <div class="vw-card-title" style="font-weight: 500;">Recent documents</div>
  <div style="display: flex; flex-direction: column; gap: 0.75rem;">
    <div style="display: flex; align-items: flex-start; gap: 0.75rem;">
      <div class="vw-card-icon-md vw-chip--neutral">
        <bntv-icon [iconName]="'File-Outline'" [type]="'fontset'" [fontSet]="'icomoon'" [width]="'20px'" [height]="'20px'" [color]="'#6b7280'"></bntv-icon>
      </div>
      <div style="flex: 1; min-width: 0;">
        <div class="vw-card-activity-label">Knowledge Hub</div>
        <div class="vw-card-activity-value" style="margin-top: 0.25rem;">December 26, 2024</div>
      </div>
    </div>
    <div style="display: flex; align-items: flex-start; gap: 0.75rem;">
      <div class="vw-card-icon-md vw-chip--neutral">
        <bntv-icon [iconName]="'Folder-Outline'" [type]="'fontset'" [fontSet]="'icomoon'" [width]="'20px'" [height]="'20px'" [color]="'#6b7280'"></bntv-icon>
      </div>
      <div style="flex: 1; min-width: 0;">
        <div class="vw-card-activity-label">first created folder</div>
        <div class="vw-card-activity-value" style="margin-top: 0.25rem;">January 27, 2026</div>
      </div>
    </div>
    <!-- Add more items as needed -->
  </div>
</div>`,
    },
    quickAction: {
      default: `<div class="vw-card-section" style="display: flex; flex-direction: column; justify-content: space-between; align-items: center; text-align: center; max-width: 320px;">
  <div class="vw-card-title">Create new flow</div>
  <div>
    <div class="vw-card-icon-lg vw-chip--neutral">
      <bntv-icon [iconName]="'Plus'" [type]="'fontset'" [fontSet]="'icomoon'" [width]="'24px'" [height]="'24px'" [color]="'#374151'"></bntv-icon>
    </div>
    <div class="vw-card-description" style="margin-top: 1rem;">Build flows to orchestrate automated workflows</div>
  </div>
</div>`,
    },
    vwIcon: {
      default: `<!-- Sizes from core-mixin: .vw-card-icon-sm | .vw-card-icon-md | .vw-card-icon-lg -->
<!-- Colors: add .vw-chip--neutral | .vw-chip--success | .vw-chip--info etc. -->
<div class="vw-card-icon-sm vw-chip--neutral">
  <bntv-icon [iconName]="'Plus'" [type]="'fontset'" [fontSet]="'icomoon'" [width]="'12px'" [height]="'12px'" [color]="'#374151'"></bntv-icon>
</div>
<div class="vw-card-icon-md vw-chip--neutral">
  <bntv-icon [iconName]="'Plus'" [type]="'fontset'" [fontSet]="'icomoon'" [width]="'16px'" [height]="'16px'" [color]="'#374151'"></bntv-icon>
</div>
<div class="vw-card-icon-lg vw-chip--neutral">
  <bntv-icon [iconName]="'Plus'" [type]="'fontset'" [fontSet]="'icomoon'" [width]="'24px'" [height]="'24px'" [color]="'#374151'"></bntv-icon>
</div>
<div class="vw-card-icon-lg vw-chip--success">
  <bntv-icon [iconName]="'Check'" [type]="'fontset'" [fontSet]="'icomoon'" [width]="'24px'" [height]="'24px'" [color]="'#1a7f10'"></bntv-icon>
</div>
<div class="vw-card-icon-lg vw-chip--info">
  <bntv-icon [iconName]="'Info'" [type]="'fontset'" [fontSet]="'icomoon'" [width]="'24px'" [height]="'24px'" [color]="'#124e8e'"></bntv-icon>
</div>`,
    },
  };

  /** Currently selected class name for the three-column demo (e.g. 'vw-card-title'). */
  selectedClassKey: string | null = null;

  /** CSS source for each card class; key is class name without dot (e.g. 'vw-card-title'). */
  classCssMap: { [key: string]: string } = {
    'vw-card-section': `.vw-card-section {
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 1rem;
}`,
    'vw-card-parent': `.vw-card-parent {
  background-color: var(--vw-color-white);
  border: 1px solid var(--vw-color-slate-300);
  border-radius: var(--vw-radius-lg);
  padding: var(--vw-space-lg);
  gap: var(--vw-space-sm);
}`,
    'vw-card-child': `.vw-card-child {
  padding: var(--vw-space-sm);
  border: 1px solid var(--vw-color-slate-200);
  border-radius: var(--vw-radius-sm);
  background-color: var(--vw-color-white);
}`,
    'vw-card-child-shaded': `.vw-card-child-shaded {
  padding: var(--vw-space-sm);
  border: 1px solid var(--vw-color-slate-200);
  border-radius: var(--vw-radius-sm);
  background-color: var(--vw-color-slate-50);
}`,
    'vw-card-title': `.vw-card-title {
  font-size: var(--vw-font-heading-lg);
  font-weight: 500;
  line-height: var(--vw-line-heading-md);
  color: var(--vw-color-gray-800);
}`,
    'vw-card-description': `.vw-card-description {
  font-size: var(--vw-font-description);
  line-height: var(--vw-line-description);
  font-weight: 400;
  color: var(--vw-color-gray-600);
}`,
    'vw-card-metric-lg': `.vw-card-metric-lg {
  font-size: var(--vw-font-value-lg);
  font-weight: 500;
  line-height: 1.2;
  color: var(--vw-color-gray-800);
}`,
    'vw-card-metric-xl': `.vw-card-metric-xl {
  font-size: var(--vw-font-value-xl);
  font-weight: 500;
  line-height: 1.2;
  color: var(--vw-color-gray-800);
}`,
    'vw-card-metric-xxl': `.vw-card-metric-xxl {
  font-size: var(--vw-font-value-xxl);
  font-weight: 500;
  line-height: 1.2;
  color: var(--vw-color-gray-800);
}`,
    'vw-card-metric-md': `.vw-card-metric-md {
  font-size: var(--vw-font-value-md);
  font-weight: 500;
  line-height: 1.25;
  color: var(--vw-color-gray-800);
}`,
    'vw-card-metric-sm': `.vw-card-metric-sm {
  font-size: var(--vw-font-value-sm);
  font-weight: 500;
  line-height: 1.25;
  color: var(--vw-color-gray-800);
}`,
    'vw-card-metric-label': `.vw-card-metric-label {
  font-size: var(--vw-font-label-md);
  font-weight: 400;
  line-height: 1.2;
  color: var(--vw-color-gray-600);
}`,
    'vw-card-metric-label-sub': `.vw-card-metric-label-sub {
  font-size: var(--vw-font-label-sm);
  font-weight: 400;
  line-height: 1.2;
  color: var(--vw-color-gray-600);
}`,
    'vw-card-variance': `.vw-card-variance {
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
}`,
    'vw-card-variance.is-positive': `.vw-card-variance.is-positive {
  color: #1a7f10;
}`,
    'vw-card-variance.is-negative': `.vw-card-variance.is-negative {
  color: #d91818;
}`,
    'vw-card-variance.is-neutral': `.vw-card-variance.is-neutral {
  color: #7c7c7c;
}`,
    'vw-card--success': `.vw-card--success {
  background-color: #fcfdfc;
  border-color: #81c784;
}`,
    'vw-card--error': `.vw-card--error {
  background-color: #fffbfa;
  border-color: #fda29b;
}`,
    'vw-card--warning': `.vw-card--warning {
  background-color: #fffdf3;
  border-color: #ffce6d;
}`,
    'vw-card--info': `.vw-card--info {
  background-color: #fbfeff;
  border-color: #94cfec;
}`,
    'vw-chip': `.vw-chip {
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.75rem;
  border-radius: 9999px;
}`,
    'vw-chip--success': `.vw-chip.vw-chip--success {
  /* Success chip: green background and text */
}`,
    'vw-chip--neutral': `.vw-chip.vw-chip--neutral {
  background-color: #f4f4f4;
  color: #515151;
}`,
    'vw-chip--info': `.vw-chip.vw-chip--info {
  background-color: #f5f9ff;
  color: #124e8e;
}`,
    'vw-chip--warning': `.vw-chip.vw-chip--warning {
  background-color: #fffae8;
  color: #926e00;
}`,
    'vw-chip--error': `.vw-chip.vw-chip--error {
  background-color: #fcf6f5;
  color: #b21313;
}`,
    'vw-card-activity-label': `.vw-card-activity-label {
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;
  color: var(--vw-color-gray-800);
}`,
    'vw-card-activity-value': `.vw-card-activity-value {
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.4;
  color: var(--vw-color-gray-600);
}`,
    'vw-card-title-lg': `.vw-card-title-lg {
  font-size: var(--vw-font-heading-xl);
  font-weight: 500;
  line-height: var(--vw-line-heading-md);
  color: var(--vw-color-gray-800);
}`,
    'vw-card-title-sm': `.vw-card-title-sm {
  font-size: var(--vw-font-heading-md);
  font-weight: 500;
  line-height: var(--vw-line-heading-md);
  color: var(--vw-color-gray-800);
}`,
    'vw-card-icon-right': `/* Icon on right — no wrapper; place icon in flex container */
.icon-only {
  flex-shrink: 0;
  color: var(--vw-color-gray-700, #374151);
}`,
    'vw-card-icon-sm': `.vw-card-icon-sm {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: var(--vw-radius-sm, 8px);
  width: 2rem;
  height: 2rem;
}`,
    'vw-card-icon-md': `.vw-card-icon-md {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: var(--vw-radius-sm, 8px);
  width: 2.5rem;
  height: 2.5rem;
}`,
    'vw-card-icon-lg': `.vw-card-icon-lg {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: var(--vw-radius-sm, 8px);
  width: 3rem;
  height: 3rem;
}`,
  };

  get selectedClassCss(): string {
    if (!this.selectedClassKey) {
      return 'Click any element in the card sample to view its CSS.';
    }
    return this.classCssMap[this.selectedClassKey] ?? `/* Unknown class: .${this.selectedClassKey} */`;
  }

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    Object.keys(this.currentCode).forEach((key) => {
      this.currentCode[key] = this.vwCardsCodeSnippets[key]?.default || '';
    });
  }

  onClassClick(className: string): void {
    this.selectedClassKey = className;
  }

  onVariantClick(section: string, variant: string = 'default'): void {
    if (
      this.vwCardsCodeSnippets[section] &&
      this.vwCardsCodeSnippets[section][variant]
    ) {
      this.currentCode[section] =
        this.vwCardsCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }
}
