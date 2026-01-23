import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  standalone: false,
  selector: 'pmgt-view-switcher',
  templateUrl: './view-switcher.component.html',
  styleUrls: ['./view-switcher.component.scss'],
})
export class ViewSwitcherComponent implements OnInit {
  currentCode: { [key: string]: string } = {
    basic: '',
    withDetail: '',
    custom: '',
  };

  gridJson = {
    cardName: 'default',
    gridOptions: {
      columnDefs: [
        { headerName: 'Name', field: 'name' },
        { headerName: 'Status', field: 'status' },
        { headerName: 'Date', field: 'date' },
      ],
    },
    rowActions: [],
  };

  cardData = [
    { id: 1, name: 'Item 1', status: 'Active', date: '2024-01-15' },
    { id: 2, name: 'Item 2', status: 'Inactive', date: '2024-01-14' },
    { id: 3, name: 'Item 3', status: 'Active', date: '2024-01-13' },
  ];

  viewSwitcherCodeSnippets: { [key: string]: { [key: string]: string } } = {
    basic: {
      default: `<!-- Basic View Switcher (Split View) -->
<bntv-split-view
  [proxyRequired]="false"
  [agGridName]="'myGrid'"
  [gridJson]="gridJson"
>
</bntv-split-view>`,
    },
    withDetail: {
      default: `<!-- View Switcher with Detail Template -->
<ng-template #detailTemplate let-data="data">
  <div class="detail-content">
    <h3>{{ data.name }}</h3>
    <p>Status: {{ data.status }}</p>
    <p>Date: {{ data.date }}</p>
  </div>
</ng-template>

<bntv-split-view
  [proxyRequired]="false"
  [agGridName]="'myGrid'"
  [gridJson]="gridJson"
  [splitViewDetailTemplateRef]="detailTemplate"
>
</bntv-split-view>`,
    },
    custom: {
      default: `<!-- Custom View Switcher Configuration -->
<bntv-split-view
  [proxyRequired]="true"
  [agGridName]="'customGrid'"
  [gridJson]="customGridJson"
  [splitViewDetailTemplateRef]="customDetailTemplate"
  [hideRowActions]="false"
  (actionClicked)="onActionClick($event)"
>
</bntv-split-view>`,
    },
  };

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    Object.keys(this.currentCode).forEach((key) => {
      this.currentCode[key] = this.viewSwitcherCodeSnippets[key]?.default || '';
    });
  }

  onVariantClick(section: string, variant: string): void {
    if (
      this.viewSwitcherCodeSnippets[section] &&
      this.viewSwitcherCodeSnippets[section][variant]
    ) {
      this.currentCode[section] =
        this.viewSwitcherCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }

  onActionClick(event: any): void {
    console.log('Action clicked', event);
  }
}
