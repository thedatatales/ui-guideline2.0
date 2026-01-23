import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  standalone: false,
  selector: 'pmgt-icon-select-box',
  templateUrl: './icon-select-box.component.html',
  styleUrls: ['./icon-select-box.component.scss'],
})
export class IconSelectBoxComponent implements OnInit {
  currentCode: { [key: string]: string } = {
    basic: '',
    iconWithName: '',
    onlyName: '',
    customSize: '',
    customPosition: '',
  };

  selectedIcon: any = null;
  selectedIcon2: any = null;
  selectedIcon3: any = null;

  iconList = [
    { id: 1, name: 'Arrow Back', icon: 'arrow_back', value: 'arrow_back' },
    { id: 2, name: 'Arrow Forward', icon: 'arrow_forward', value: 'arrow_forward' },
    { id: 3, name: 'Arrow Left', icon: 'arrow_left', value: 'arrow_left' },
    { id: 4, name: 'Arrow Right', icon: 'arrow_right', value: 'arrow_right' },
    { id: 5, name: 'Search', icon: 'search', value: 'search' },
    { id: 6, name: 'Home', icon: 'home', value: 'home' },
    { id: 7, name: 'Settings', icon: 'settings', value: 'settings' },
    { id: 8, name: 'User', icon: 'user', value: 'user' },
  ];

  iconSelectBoxCodeSnippets: { [key: string]: { [key: string]: string } } = {
    basic: {
      default: `<!-- Basic Icon Select Box -->
<bntv-icon-select-box
  [itemList]="iconList"
  [displayExpression]="'$name'"
  [value]="'value'"
  [iconKey]="'icon'"
  [type]="'icon'"
  [displayMode]="'onlyIcon'"
  [(data)]="selectedIcon"
>
</bntv-icon-select-box>`,
    },
    iconWithName: {
      default: `<!-- Icon Select Box with Name -->
<bntv-icon-select-box
  [itemList]="iconList"
  [displayExpression]="'$name'"
  [value]="'value'"
  [iconKey]="'icon'"
  [type]="'icon'"
  [displayMode]="'iconWithName'"
  [(data)]="selectedIcon2"
>
</bntv-icon-select-box>`,
    },
    onlyName: {
      default: `<!-- Icon Select Box - Name Only -->
<bntv-icon-select-box
  [itemList]="iconList"
  [displayExpression]="'$name'"
  [value]="'value'"
  [type]="'icon'"
  [displayMode]="'onlyName'"
  [(data)]="selectedIcon3"
>
</bntv-icon-select-box>`,
    },
    customSize: {
      default: `<!-- Icon Select Box with Custom Size -->
<bntv-icon-select-box
  [itemList]="iconList"
  [displayExpression]="'$name'"
  [value]="'value'"
  [iconKey]="'icon'"
  [type]="'icon'"
  [displayMode]="'onlyIcon'"
  [height]="'4em'"
  [itemInRows]="3"
  [(data)]="selectedIcon"
>
</bntv-icon-select-box>`,
    },
    customPosition: {
      default: `<!-- Icon Select Box with Custom Position -->
<bntv-icon-select-box
  [itemList]="iconList"
  [displayExpression]="'$name'"
  [value]="'value'"
  [iconKey]="'icon'"
  [type]="'icon'"
  [displayMode]="'onlyIcon'"
  [xPosition]="'before'"
  [yPosition]="'above'"
  [(data)]="selectedIcon"
>
</bntv-icon-select-box>`,
    },
  };

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    Object.keys(this.currentCode).forEach((key) => {
      this.currentCode[key] =
        this.iconSelectBoxCodeSnippets[key]?.default || '';
    });
  }

  onVariantClick(section: string, variant: string): void {
    if (
      this.iconSelectBoxCodeSnippets[section] &&
      this.iconSelectBoxCodeSnippets[section][variant]
    ) {
      this.currentCode[section] =
        this.iconSelectBoxCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }
}
