import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  standalone: false,
  selector: 'pmgt-vw-cards-adv',
  templateUrl: './vw-cards-adv.component.html',
  styleUrls: ['./vw-cards-adv.component.scss'],
})
export class VwCardsAdvComponent implements OnInit {
  currentCode: { [key: string]: string } = {
    minimal: '',
    simpleKpi: '',
    kpiGrid: '',
    headerChipsMetrics: '',
    footerActions: '',
    childCard: '',
    chipsHeader: '',
    activity: '',
    panelHeading: '',
    flows: '',
    revenueCard: '',
  };

  vwCardsCodeSnippets: { [key: string]: { [key: string]: string } } = {
    minimal: {
      default: `<article class="vw-card" style="max-width: 360px;">
  <header class="vw-card__header">
    <span class="vw-card__title">Report name</span>
    <p class="vw-card__subtitle">Last updated today</p>
  </header>
  <div class="vw-card__body">
    <p class="vw-card__description">Short summary. Use only entity classes and tokens.</p>
  </div>
</article>`,
    },
    simpleKpi: {
      default: `<article class="vw-card">
  <header class="vw-card__header">
    <div class="vw-card__title-row">
      <i class="ph ph-chart-line vw-card__icon" aria-hidden="true"></i>
      <span class="vw-card__title">Potential Revenue</span>
    </div>
    <span class="vw-card__metric vw-card__metric--primary">₹2.5M</span>
    <span class="vw-card__delta vw-card__delta--positive">+12% from last week</span>
  </header>
</article>`,
    },
    kpiGrid: {
      default: `<div class="vw-cards-demo-grid vw-cards-demo-grid--4">
  <article class="vw-card">
    <header class="vw-card__header">
      <div class="vw-card__title-row">
        <i class="ph ph-chart-line vw-card__icon" aria-hidden="true"></i>
        <span class="vw-card__title">Potential Revenue</span>
      </div>
      <span class="vw-card__metric vw-card__metric--primary">₹2.5M</span>
      <span class="vw-card__delta vw-card__delta--positive">+12%</span>
    </header>
  </article>
  <!-- Repeat for more cards -->
</div>`,
    },
    headerChipsMetrics: {
      default: `<article class="vw-card" style="max-width: 420px;">
  <header class="vw-card__header">
    <div class="vw-card__title-row">
      <i class="ph ph-users vw-card__icon" aria-hidden="true"></i>
      <span class="vw-card__title">Leads</span>
      <span class="vw-card__chip"><span class="vw-chip vw-chip--success">Active</span></span>
    </div>
    <p class="vw-card__legend">Open (L12M)</p>
    <span class="vw-card__metric vw-card__metric--primary">20</span>
  </header>
  <div class="vw-card__divider" role="presentation"></div>
  <div class="vw-card__body">
    <div class="vw-card__metrics">
      <div class="vw-card__metric vw-card__metric--secondary">
        <span class="vw-card__metric-label">Created (L30D)</span>
        <div class="vw-card__metric-row">
          <span class="vw-card__metric-value">10</span>
          <span class="vw-card__delta vw-card__delta--positive">+12%</span>
        </div>
      </div>
      <!-- More metrics -->
    </div>
  </div>
</article>`,
    },
    footerActions: {
      default: `<article class="vw-card" style="max-width: 400px;">
  <header class="vw-card__header">
    <span class="vw-card__title">Billing summary</span>
    <p class="vw-card__subtitle">Q4 2024</p>
  </header>
  <div class="vw-card__divider" role="presentation"></div>
  <div class="vw-card__body">
    <p class="vw-card__description">Outstanding receivables and paid amount for the period.</p>
    <div class="vw-card__metrics">
      <div class="vw-card__metric vw-card__metric--secondary">
        <span class="vw-card__metric-label">Outstanding</span>
        <div class="vw-card__metric-row">
          <span class="vw-card__metric-value">₹73.5M</span>
          <span class="vw-card__delta vw-card__delta--negative">−4%</span>
        </div>
      </div>
    </div>
  </div>
  <footer class="vw-card__footer">
    <div class="vw-card__actions">
      <bntv-mat-button [value]="'View details'" [theme]="'accent'" [type]="'stroked'"></bntv-mat-button>
      <bntv-mat-button [value]="'Export'" [theme]="'primary'" [type]="'raised'"></bntv-mat-button>
    </div>
  </footer>
</article>`,
    },
    childCard: {
      default: `<article class="vw-card" style="max-width: 440px;">
  <header class="vw-card__header">
    <span class="vw-card__title">Config section</span>
    <p class="vw-card__subtitle">Dataset and filters</p>
  </header>
  <div class="vw-card__body">
    <p class="vw-card__description">Nested context uses a child card for grouping.</p>
    <div class="vw-card__child vw-card">
      <div class="vw-card__body">
        <div class="vw-card__metric vw-card__metric--secondary">
          <span class="vw-card__metric-label">Records</span>
          <div class="vw-card__metric-row">
            <span class="vw-card__metric-value">1,240</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</article>`,
    },
    chipsHeader: {
      default: `<article class="vw-card" style="max-width: 380px;">
  <header class="vw-card__header">
    <div class="vw-card__title-row">
      <i class="ph ph-quotes vw-card__icon" aria-hidden="true"></i>
      <span class="vw-card__title">Quote pipeline</span>
      <span class="vw-card__chip"><span class="vw-chip vw-chip--info">Draft</span></span>
      <span class="vw-card__chip"><span class="vw-chip vw-chip--neutral">B2B</span></span>
    </div>
    <span class="vw-card__metric vw-card__metric--primary">67</span>
    <p class="vw-card__legend">Active (L12M)</p>
  </header>
</article>`,
    },
    activity: {
      default: `<div class="vw-cards-activity-sample">
  <div class="vw-cards-activity-row">
    <div class="vw-cards-activity-avatar vw-cards-activity-avatar--email">E</div>
    <div class="vw-cards-activity-content">
      <p class="vw-cards-activity-desc">Email - Avalon Technologies requires 300 Mbps leased lines</p>
      <span class="vw-cards-activity-date">Jan 12, 2026</span>
    </div>
  </div>
  <div class="vw-cards-activity-separator"></div>
  <!-- More activity rows -->
</div>`,
    },
    panelHeading: {
      default: `<article class="vw-card vw-cards-panel-heading-card">
  <header class="vw-card__header">
    <div class="vw-card__title-row vw-cards-task-title-row">
      <span class="vw-card__title">WIFI commissioning and verification</span>
      <button type="button" class="vw-cards-task-menu" aria-label="More options">
        <i class="ph ph-dots-three-vertical" aria-hidden="true"></i>
      </button>
    </div>
    <p class="vw-card__subtitle">WIFI2-Wifi-00001065</p>
  </header>
  <div class="vw-card__body">
    <div class="vw-cards-status-row">
      <span class="vw-cards-chip vw-cards-chip--success">Completed</span>
    </div>
    <div class="vw-cards-progress-row">
      <bntv-progress-bar [type]="'line'" [mode]="'determinate'" [value]="100" [theme]="'primary'"></bntv-progress-bar>
      <span class="vw-cards-progress-label">100% Progress</span>
    </div>
    <!-- More content -->
  </div>
</article>`,
    },
    flows: {
      default: `<article class="vw-card" style="max-width: 360px;">
  <header class="vw-card__header">
    <div class="vw-card__header-row vw-card__header-row--spread">
      <div class="vw-card__title-row">
        <i class="ph ph-squares-four vw-card__icon" aria-hidden="true"></i>
        <span class="vw-card__title">Flows</span>
      </div>
      <span class="vw-card__metric vw-card__metric--primary">60</span>
    </div>
  </header>
  <div class="vw-card__body">
    <div class="vw-card__metrics vw-card__metrics--list vw-card__metrics--divided">
      <div class="vw-card__metric vw-card__metric--secondary vw-card__metric--row">
        <span class="vw-card__metric-label">New</span>
        <span class="vw-card__metric-value vw-card__metric-value--info">20</span>
      </div>
      <div class="vw-card__metric vw-card__metric--secondary vw-card__metric--row">
        <span class="vw-card__metric-label">Awaiting approval</span>
        <span class="vw-card__metric-value vw-card__metric-value--warning">0</span>
      </div>
      <div class="vw-card__metric vw-card__metric--secondary vw-card__metric--row">
        <span class="vw-card__metric-label">Approved</span>
        <span class="vw-card__metric-value vw-card__metric-value--success">40</span>
      </div>
      <div class="vw-card__metric vw-card__metric--secondary vw-card__metric--row">
        <span class="vw-card__metric-label">Rejected</span>
        <span class="vw-card__metric-value vw-card__metric-value--negative">0</span>
      </div>
    </div>
  </div>
</article>`,
    },
    revenueCard: {
      default: `<article class="vw-card" style="max-width: 380px;">
  <header class="vw-card__header">
    <div class="vw-card__header-row vw-card__header-row--spread">
      <div class="vw-card__title-row">
        <div class="vw-card-revenue-icon">
          <i class="ph ph-currency-dollar" aria-hidden="true"></i>
        </div>
      </div>
      <div style="flex: 1; min-width: 0; margin-left: var(--card-gap-md, var(--vw-space-md));">
        <div class="vw-card__metric-label" style="margin-bottom: var(--card-gap-xs, var(--vw-space-xs));">
          Total revenue <span style="font-size: 0.85em; opacity: 0.7;">(ITD)</span>
        </div>
        <div style="display: flex; align-items: baseline; gap: var(--card-gap, var(--vw-space-sm)); flex-wrap: wrap;">
          <span class="vw-card__metric vw-card__metric--primary">90.6M</span>
          <span class="vw-card__delta vw-card__delta--positive">
            <i class="ph ph-arrow-up" aria-hidden="true"></i>
            15.2% <span style="font-size: 0.85em; opacity: 0.8;">(MoM)</span>
          </span>
        </div>
      </div>
    </div>
  </header>
  <div class="vw-card__divider" role="presentation"></div>
  <footer class="vw-card__footer">
    <div class="vw-card__metric vw-card__metric--row" style="width: 100%;">
      <span class="vw-card__metric-label">Total invoice</span>
      <span class="vw-card__metric-value">2028</span>
    </div>
  </footer>
</article>`,
    },
  };

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    Object.keys(this.currentCode).forEach((key) => {
      this.currentCode[key] = this.vwCardsCodeSnippets[key]?.default || '';
    });
  }

  onVariantClick(section: string, variant: string): void {
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
