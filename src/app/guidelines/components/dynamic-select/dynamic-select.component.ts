import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { IUrlMetaData } from '@enttribe/core/tools';

@Component({
  standalone: false,
  selector: 'pmgt-dynamic-select',
  templateUrl: './dynamic-select.component.html',
  styleUrls: ['./dynamic-select.component.scss'],
})
export class DynamicSelectComponent implements OnInit {
  currentCode: { [key: string]: string } = {
    dynamic: '',
    batched: '',
    infiniteScroll: '',
  };

  urlMetaData: IUrlMetaData = {
    context: 'UM_PLATFORM',
    url: 'MultiLingualConfiguration/getMultiLingualProps',
    payload: {
      filters: [],
      projection: null,
      lLimit: 0,
      uLimit: 24,
      orderByColumnName: 'appName',
      orderType: 'ASC',
    },
    uLimitkey: 'uLimit',
    lLimitKey: 'lLimit',
    pagingParamsType: 'JSON',
  };

  mockBankList = [
    { id: 1, name: 'Bank A' },
    { id: 2, name: 'Bank B' },
    { id: 3, name: 'Bank C' },
  ];

  dynamicSelectCodeSnippets: { [key: string]: { [key: string]: string } } = {
    dynamic: {
      default: `<!-- Dynamic Select -->
<bntv-select-box
  [label]="'Dynamic Select'"
  [mode]="'dynamic'"
  [urlMetaData]="urlMetaData"
  [displayExpression]="'$name'"
  [uniqueItemKey]="'id'"
  [batchSize]="10"
>
</bntv-select-box>`,
    },
    batched: {
      default: `<!-- Batched Select -->
<bntv-select-box
  [label]="'Batched Select'"
  [mode]="'batched'"
  [itemList]="itemList"
  [displayExpression]="'$name'"
  [uniqueItemKey]="'id'"
  [isMultipleSelect]="true"
>
</bntv-select-box>`,
    },
    infiniteScroll: {
      default: `<!-- Infinite Scroll Select -->
<bntv-select-box
  [label]="'Infinite Scroll Select'"
  [mode]="'batched'"
  [itemList]="itemList"
  [enableOnscroll]="true"
  [infiniteScrollComplete]="infiniteScrollComplete"
  (onScroll)="onScroll($event)"
  (searchTextChange)="onSearchChange($event)"
  [searching]="searching"
>
</bntv-select-box>`,
    },
  };

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    Object.keys(this.currentCode).forEach((key) => {
      this.currentCode[key] = this.dynamicSelectCodeSnippets[key]?.default || '';
    });
  }

  onVariantClick(section: string, variant: string): void {
    if (
      this.dynamicSelectCodeSnippets[section] &&
      this.dynamicSelectCodeSnippets[section][variant]
    ) {
      this.currentCode[section] =
        this.dynamicSelectCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }
}
