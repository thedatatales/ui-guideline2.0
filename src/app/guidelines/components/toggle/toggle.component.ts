import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  standalone: false,
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent implements OnInit {
  slideToggleValue = true;
  slideToggleValue2 = false;
  slideToggleValue3 = true;
  slideToggleValue4 = false;
  slideToggleValue5 = true;
  slideToggleValue6 = false;
  slideToggleValue7 = true;
  slideToggleValue8 = false;
  extendedToggleValue = false;
  extendedToggleValue2 = true;

  buttonToggleList = [
    { label: 'AND', value: 'and', checked: true },
    { label: 'OR', value: 'or', checked: false },
  ];

  andOrList = [
    { value: ';', label: 'AND', checked: true },
    { value: ',', label: 'OR', checked: false },
  ];

  iconList = [
    {
      value: 'Chart',
      iconName: 'Graph',
      icon: 'Graph$fontset$icomoon',
      hasIcon: true,
      checked: true,
    },
    {
      value: 'Map',
      iconName: 'Map-Outline',
      icon: 'Map-Outline$fontset$icomoon',
      hasIcon: true,
      checked: false,
    },
  ];

  iconList1 = [
    {
      value: 'Chart',
      label: 'Chart',
      iconName: 'Graph',
      icon: 'Graph$fontset$icomoon',
      hasIcon: true,
      checked: true,
    },
    {
      value: 'Map',
      label: 'Map',
      iconName: 'Map-Outline',
      icon: 'Map-Outline$fontset$icomoon',
      hasIcon: true,
      checked: false,
    },
  ];

  multipleList = [
    { label: 'A', value: 'tool', checked: true },
    { label: 'C', value: 'address book', checked: false },
    { label: 'B', value: 'abc', checked: false },
  ];

  currentCode: { [key: string]: string } = {
    slideToggle: '',
    slideToggleDisabled: '',
    slideToggleBox: '',
    slideToggleBoxDisabled: '',
    slideToggleInlineBox: '',
    slideToggleInlineBoxDisabled: '',
    extendedToggle: '',
    extendedToggleWithBg: '',
    buttonToggle: '',
    buttonToggleText: '',
    buttonToggleTextDisabled: '',
    buttonToggleIcon: '',
    buttonToggleIconDisabled: '',
    buttonToggleIconLabel: '',
    buttonToggleIconLabelDisabled: '',
    buttonToggleMultiple: '',
    buttonToggleMultipleDisabled: '',
    buttonToggleStroked: '',
    buttonToggleStrokedDisabled: '',
  };

  activeCodeSection: string = 'slideToggleBox';

  toggleCodeSnippets: { [key: string]: { [key: string]: string } } = {
    slideToggle: {
      default: `<!-- Slide Toggle -->
<bntv-slide-toggle
  [text]="'Enable Feature'"
  [(checked)]="slideToggleValue"
  [theme]="'accent'"
></bntv-slide-toggle>`,
    },
    slideToggleDisabled: {
      default: `<!-- Disabled Slide Toggle -->
<bntv-slide-toggle
  [text]="'Disabled Toggle'"
  [(checked)]="slideToggleValue"
  [disabled]="true"
></bntv-slide-toggle>`,
    },
    extendedToggle: {
      default: `<!-- Extended Toggle -->
<bntv-extended-toggle
  [label]="'Extended toggle button'"
  [description]="'Extended toggle button description'"
  [disabled]="false"
  [required]="false"
  [(data)]="extendedToggleValue"
></bntv-extended-toggle>`,
    },
    slideToggleBox: {
      active: `<!-- Slide Toggle Box Type (Active) -->
<bntv-slide-toggle
  [text]="'Advanced'"
  [(checked)]="slideToggleValue"
  [styleType]="'box'"
></bntv-slide-toggle>`,
      inactive: `<!-- Slide Toggle Box Type (Inactive) -->
<bntv-slide-toggle
  [text]="'Advanced'"
  [(checked)]="slideToggleValue2"
  [styleType]="'box'"
></bntv-slide-toggle>`,
      activeDisabled: `<!-- Slide Toggle Box Type (Active Disabled) -->
<bntv-slide-toggle
  [text]="'Advanced'"
  [(checked)]="slideToggleValue3"
  [disabled]="true"
  [styleType]="'box'"
></bntv-slide-toggle>`,
      inactiveDisabled: `<!-- Slide Toggle Box Type (Inactive Disabled) -->
<bntv-slide-toggle
  [text]="'Advanced'"
  [(checked)]="slideToggleValue4"
  [disabled]="true"
  [styleType]="'box'"
></bntv-slide-toggle>`,
    },
    slideToggleBoxDisabled: {
      default: `<!-- Slide Toggle Box Type Disabled -->
<bntv-slide-toggle
  [text]="'Advanced'"
  [(checked)]="slideToggleValue3"
  [disabled]="true"
  [styleType]="'box'"
></bntv-slide-toggle>`,
    },
    slideToggleInlineBox: {
      active: `<!-- Slide Toggle InlineBox Type (Active) -->
<bntv-slide-toggle
  [text]="'Advanced'"
  [(checked)]="slideToggleValue5"
  [styleType]="'inlineBox'"
></bntv-slide-toggle>`,
      inactive: `<!-- Slide Toggle InlineBox Type (Inactive) -->
<bntv-slide-toggle
  [text]="'Advanced'"
  [(checked)]="slideToggleValue6"
  [styleType]="'inlineBox'"
></bntv-slide-toggle>`,
      activeDisabled: `<!-- Slide Toggle InlineBox Type (Active Disabled) -->
<bntv-slide-toggle
  [text]="'Advanced'"
  [(checked)]="slideToggleValue7"
  [disabled]="true"
  [styleType]="'inlineBox'"
></bntv-slide-toggle>`,
      inactiveDisabled: `<!-- Slide Toggle InlineBox Type (Inactive Disabled) -->
<bntv-slide-toggle
  [text]="'Advanced'"
  [(checked)]="slideToggleValue8"
  [disabled]="true"
  [styleType]="'inlineBox'"
></bntv-slide-toggle>`,
    },
    slideToggleInlineBoxDisabled: {
      default: `<!-- Slide Toggle InlineBox Type Disabled -->
<bntv-slide-toggle
  [text]="'Advanced'"
  [(checked)]="slideToggleValue8"
  [disabled]="true"
  [styleType]="'inlineBox'"
></bntv-slide-toggle>`,
    },
    extendedToggleWithBg: {
      default: `<!-- Extended Toggle with Background and Icon -->
<bntv-extended-toggle
  [label]="'Extended toggle button with background color and icon'"
  [description]="'Extended toggle button description long sentence to check the ellipsis and show description line clamp as the default max line count is 2'"
  [disabled]="false"
  [required]="false"
  [bgColor]="'var(--bgColor10)'"
  [labelIconConfig]="{ fontSize: '1.2em', name: 'Info-Outline', color: 'var(--grayColor600)' }"
  [(data)]="extendedToggleValue2"
></bntv-extended-toggle>`,
    },
    buttonToggle: {
      default: `<!-- Button Toggle -->
<bntv-button-toggle
  [list]="buttonToggleList"
  [displayExpression]="'$label'"
  [value]="'value'"
  (selectedItem)="onButtonToggleChange($event)"
></bntv-button-toggle>`,
    },
    buttonToggleText: {
      default: `<!-- Button Toggle Text (flat) -->
<bntv-button-toggle
  [list]="andOrList"
></bntv-button-toggle>`,
    },
    buttonToggleTextDisabled: {
      default: `<!-- Button Toggle Text Disabled (flat) -->
<bntv-button-toggle
  [list]="andOrList"
  [disabled]="true"
></bntv-button-toggle>`,
    },
    buttonToggleIcon: {
      default: `<!-- Button Toggle Icon (flat) -->
<bntv-button-toggle
  [(list)]="iconList"
></bntv-button-toggle>`,
    },
    buttonToggleIconDisabled: {
      default: `<!-- Button Toggle Icon Disabled (flat) -->
<bntv-button-toggle
  [(list)]="iconList"
  [disabled]="true"
></bntv-button-toggle>`,
    },
    buttonToggleIconLabel: {
      default: `<!-- Button Toggle Icon Label (flat) -->
<bntv-button-toggle
  [(list)]="iconList1"
></bntv-button-toggle>`,
    },
    buttonToggleIconLabelDisabled: {
      default: `<!-- Button Toggle Icon Label Disabled (flat) -->
<bntv-button-toggle
  [(list)]="iconList1"
  [disabled]="true"
></bntv-button-toggle>`,
    },
    buttonToggleMultiple: {
      default: `<!-- Button Toggle Multiple (flat) -->
<bntv-button-toggle
  [multiple]="true"
  (selectedItem)="onButtonToggleChange($event)"
  [list]="multipleList"
></bntv-button-toggle>`,
    },
    buttonToggleMultipleDisabled: {
      default: `<!-- Button Toggle Multiple Disabled (flat) -->
<bntv-button-toggle
  [multiple]="true"
  [disabled]="true"
  (selectedItem)="onButtonToggleChange($event)"
  [list]="multipleList"
></bntv-button-toggle>`,
    },
    buttonToggleStroked: {
      text: `<!-- Button Toggle Stroked Type (Text) -->
<bntv-button-toggle
  [list]="andOrList"
  [type]="'stroked'"
></bntv-button-toggle>`,
      textDisabled: `<!-- Button Toggle Stroked Type (Text Disabled) -->
<bntv-button-toggle
  [list]="andOrList"
  [disabled]="true"
  [type]="'stroked'"
></bntv-button-toggle>`,
      icon: `<!-- Button Toggle Stroked Type (Icon) -->
<bntv-button-toggle
  [(list)]="iconList"
  [type]="'stroked'"
></bntv-button-toggle>`,
      iconDisabled: `<!-- Button Toggle Stroked Type (Icon Disabled) -->
<bntv-button-toggle
  [(list)]="iconList"
  [disabled]="true"
  [type]="'stroked'"
></bntv-button-toggle>`,
      iconLabel: `<!-- Button Toggle Stroked Type (Icon Label) -->
<bntv-button-toggle
  [(list)]="iconList1"
  [type]="'stroked'"
></bntv-button-toggle>`,
      iconLabelDisabled: `<!-- Button Toggle Stroked Type (Icon Label Disabled) -->
<bntv-button-toggle
  [(list)]="iconList1"
  [disabled]="true"
  [type]="'stroked'"
></bntv-button-toggle>`,
      multiple: `<!-- Button Toggle Stroked Type (Multiple) -->
<bntv-button-toggle
  [multiple]="true"
  [type]="'stroked'"
  (selectedItem)="onButtonToggleChange($event)"
  [list]="multipleList"
></bntv-button-toggle>`,
      multipleDisabled: `<!-- Button Toggle Stroked Type (Multiple Disabled) -->
<bntv-button-toggle
  [multiple]="true"
  [type]="'stroked'"
  [disabled]="true"
  (selectedItem)="onButtonToggleChange($event)"
  [list]="multipleList"
></bntv-button-toggle>`,
    },
    buttonToggleStrokedDisabled: {
      default: `<!-- Button Toggle Stroked Type Disabled -->
<bntv-button-toggle
  [list]="andOrList"
  [disabled]="true"
  [type]="'stroked'"
></bntv-button-toggle>`,
    },
  };

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    this.currentCode['slideToggle'] = this.toggleCodeSnippets['slideToggle']?.default || '';
    this.currentCode['slideToggleDisabled'] = this.toggleCodeSnippets['slideToggleDisabled']?.default || '';
    this.currentCode['slideToggleBox'] = this.toggleCodeSnippets['slideToggleBox']?.active || '';
    this.currentCode['slideToggleBoxDisabled'] = this.toggleCodeSnippets['slideToggleBoxDisabled']?.default || '';
    this.currentCode['slideToggleInlineBox'] = this.toggleCodeSnippets['slideToggleInlineBox']?.active || '';
    this.currentCode['slideToggleInlineBoxDisabled'] = this.toggleCodeSnippets['slideToggleInlineBoxDisabled']?.default || '';
    this.currentCode['extendedToggle'] = this.toggleCodeSnippets['extendedToggle']?.default || '';
    this.currentCode['extendedToggleWithBg'] = this.toggleCodeSnippets['extendedToggleWithBg']?.default || '';
    this.currentCode['buttonToggle'] = this.toggleCodeSnippets['buttonToggle']?.default || '';
    this.currentCode['buttonToggleText'] = this.toggleCodeSnippets['buttonToggleText']?.default || '';
    this.currentCode['buttonToggleTextDisabled'] = this.toggleCodeSnippets['buttonToggleTextDisabled']?.default || '';
    this.currentCode['buttonToggleIcon'] = this.toggleCodeSnippets['buttonToggleIcon']?.default || '';
    this.currentCode['buttonToggleIconDisabled'] = this.toggleCodeSnippets['buttonToggleIconDisabled']?.default || '';
    this.currentCode['buttonToggleIconLabel'] = this.toggleCodeSnippets['buttonToggleIconLabel']?.default || '';
    this.currentCode['buttonToggleIconLabelDisabled'] = this.toggleCodeSnippets['buttonToggleIconLabelDisabled']?.default || '';
    this.currentCode['buttonToggleMultiple'] = this.toggleCodeSnippets['buttonToggleMultiple']?.default || '';
    this.currentCode['buttonToggleMultipleDisabled'] = this.toggleCodeSnippets['buttonToggleMultipleDisabled']?.default || '';
    this.currentCode['buttonToggleStroked'] = this.toggleCodeSnippets['buttonToggleStroked']?.text || '';
    this.currentCode['buttonToggleStrokedDisabled'] = this.toggleCodeSnippets['buttonToggleStrokedDisabled']?.default || '';
  }

  onVariantClick(section: string, variant: string = 'default'): void {
    if (this.toggleCodeSnippets[section] && this.toggleCodeSnippets[section][variant]) {
      this.currentCode[section] = this.toggleCodeSnippets[section][variant];
      this.activeCodeSection = section;
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }

  onButtonToggleChange(event: any): void {
    console.log('Button toggle changed:', event);
  }
}
