import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  standalone: false,
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @ViewChild('basicTemplate') basicTemplate: TemplateRef<any>;
  @ViewChild('customTemplate') customTemplate: TemplateRef<any>;

  listItems = [
    { id: 1, name: 'Item 1', description: 'Description for item 1' },
    { id: 2, name: 'Item 2', description: 'Description for item 2' },
    { id: 3, name: 'Item 3', description: 'Description for item 3' },
  ];

  customListItems = [
    { id: 1, name: 'Custom Item 1', icon: 'home', color: 'blue' },
    { id: 2, name: 'Custom Item 2', icon: 'settings', color: 'green' },
    { id: 3, name: 'Custom Item 3', icon: 'user', color: 'red' },
  ];

  currentCode: { [key: string]: string } = {
    basic: '',
    custom: '',
  };

  listCodeSnippets: { [key: string]: { [key: string]: string } } = {
    basic: {
      default: `<!-- Basic List -->
<bntv-nav-list
  [listTemplateRef]="basicTemplate"
  [listItems]="listItems"
  (listItemClick)="onListItemClick($event)"
></bntv-nav-list>

<ng-template #basicTemplate let-listItemData="listItemData">
  <div>{{ listItemData.name }}</div>
</ng-template>`,
    },
    custom: {
      default: `<!-- Custom List Template -->
<bntv-nav-list
  [listTemplateRef]="customTemplate"
  [listItems]="customListItems"
  (listItemClick)="onListItemClick($event)"
></bntv-nav-list>

<ng-template #customTemplate let-listItemData="listItemData">
  <div fxLayout="row" fxLayoutAlign="start center" fxLayoutGap="16px">
    <bntv-icon [iconName]="listItemData.icon" [type]="'fontset'" [fontSet]="'icomoon'"></bntv-icon>
    <span>{{ listItemData.name }}</span>
  </div>
</ng-template>`,
    },
  };

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    Object.keys(this.currentCode).forEach((key) => {
      this.currentCode[key] = this.listCodeSnippets[key]?.default || '';
    });
  }

  onVariantClick(section: string, variant: string = 'default'): void {
    if (this.listCodeSnippets[section] && this.listCodeSnippets[section][variant]) {
      this.currentCode[section] = this.listCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }

  onListItemClick(item: any): void {
    console.log('List item clicked:', item);
  }
}
