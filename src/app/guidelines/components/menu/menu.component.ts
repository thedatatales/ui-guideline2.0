import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { MenuItem } from '@enttribe/core/tools/menu';

@Component({
  standalone: false,
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @ViewChild('menuItemTemplate') menuItemTemplate: TemplateRef<any>;
  @ViewChild('basicMenu') basicMenu: any;
  @ViewChild('iconMenu') iconMenu: any;
  @ViewChild('nestedMenu') nestedMenu: any;

  basicMenuItems: MenuItem[] = [
    { displayName: 'Dashboard', action: 'dashboard' },
    { displayName: 'Settings', action: 'settings' },
    { displayName: 'Profile', action: 'profile' },
    { displayName: 'Logout', action: 'logout' },
  ];

  menuWithIcons: MenuItem[] = [
    { displayName: 'Dashboard', action: 'dashboard', icon: 'Dashboard-Outline', iconName: 'Dashboard-Outline' },
    { displayName: 'Settings', action: 'settings', icon: 'Settings-Outline', iconName: 'Settings-Outline' },
    { displayName: 'Profile', action: 'profile', icon: 'User-Outline', iconName: 'User-Outline' },
    { displayName: 'Logout', action: 'logout', icon: 'Logout-Outline', iconName: 'Logout-Outline' },
  ];

  nestedMenuItems: MenuItem[] = [
    {
      displayName: 'File',
      action: 'file',
      child: [
        { displayName: 'New', action: 'file.new' },
        { displayName: 'Open', action: 'file.open' },
        { displayName: 'Save', action: 'file.save' },
      ],
    },
    {
      displayName: 'Edit',
      action: 'edit',
      child: [
        { displayName: 'Cut', action: 'edit.cut' },
        { displayName: 'Copy', action: 'edit.copy' },
        { displayName: 'Paste', action: 'edit.paste' },
      ],
    },
    { displayName: 'View', action: 'view' },
    { displayName: 'Help', action: 'help' },
  ];

  currentCode: { [key: string]: string } = {
    basic: '',
    icons: '',
    nested: '',
  };

  menuCodeSnippets: { [key: string]: { [key: string]: string } } = {
    basic: {
      default: `<!-- Basic Menu -->
<button mat-button [matMenuTriggerFor]="menu.childMenu">Open Menu</button>
<bntv-menu
  #menu
  [list]="menuItems"
  (resultAction)="onMenuAction($event)"
></bntv-menu>

<!-- TypeScript -->
menuItems: MenuItem[] = [
  { displayName: 'Dashboard', action: 'dashboard' },
  { displayName: 'Settings', action: 'settings' },
  { displayName: 'Profile', action: 'profile' },
  { displayName: 'Logout', action: 'logout' },
];

onMenuAction(action: string): void {
  console.log('Menu action:', action);
}`,
    },
    icons: {
      default: `<!-- Menu with Icons -->
<button mat-button [matMenuTriggerFor]="menu.childMenu">Open Menu</button>
<bntv-menu
  #menu
  [list]="menuItems"
  (resultAction)="onMenuAction($event)"
></bntv-menu>

<!-- TypeScript -->
menuItems: MenuItem[] = [
  { 
    displayName: 'Dashboard', 
    action: 'dashboard', 
    icon: 'Dashboard-Outline',
    iconName: 'Dashboard-Outline'
  },
];`,
    },
    nested: {
      default: `<!-- Nested Menu -->
<button mat-button [matMenuTriggerFor]="menu.childMenu">Open Menu</button>
<bntv-menu
  #menu
  [list]="menuItems"
  (resultAction)="onMenuAction($event)"
></bntv-menu>

<!-- TypeScript -->
menuItems: MenuItem[] = [
  {
    displayName: 'File',
    action: 'file',
    child: [
      { displayName: 'New', action: 'file.new' },
      { displayName: 'Open', action: 'file.open' },
    ],
  },
];`,
    },
  };

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    Object.keys(this.currentCode).forEach((key) => {
      this.currentCode[key] = this.menuCodeSnippets[key]?.default || '';
    });
  }

  onVariantClick(section: string, variant: string = 'default'): void {
    if (this.menuCodeSnippets[section] && this.menuCodeSnippets[section][variant]) {
      this.currentCode[section] = this.menuCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }

  onMenuAction(action: string): void {
    console.log('Menu action:', action);
  }
}
