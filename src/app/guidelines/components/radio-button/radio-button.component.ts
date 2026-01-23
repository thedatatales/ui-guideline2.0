import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  standalone: false,
  selector: 'pmgt-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
})
export class RadioButtonComponent implements OnInit {
  currentCode: { [key: string]: string } = {
    single: '',
    group: '',
    themes: '',
    states: '',
    extended: '',
  };

  singleRadioValue = true;
  groupRadioValue = 'option1';
  groupRadioValue2 = 'option1';
  radioOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  // Extended radio data
  extendedRadioDefault: any = 'actionType1';
  extendedRadioCard2: any = 'actionType1';
  extendedRadioCard3: any = 'actionType1';
  extendedRadioCard4: any = 'actionType1';
  extendedIconCard3: any = 'iconCard1';
  extendedIconCardNoCheck: any = 'iconCard1';
  extendedIconCardNoDesc: any = 'iconCard1';
  extendedIconCardNoIcon: any = 'iconCard1';
  extendedIconCardNoIconDesc: any = 'iconCard1';

  // Extended radio item lists
  actionTypeRowList = [
    {
      label: 'Action Type 1',
      value: 'actionType1',
      description: 'This is a description for action type 1 for long description',
      checked: true,
      labelIconConfig: { name: 'Info-Outline', fontSize: '1.2em', color: 'var(--grayColor600)' },
    },
    {
      label: 'Action Type 2',
      value: 'actionType2',
      description: 'This is a description for action type 2 for long description',
      labelIconConfig: { name: 'Info-Outline', fontSize: '1.2em', color: 'var(--grayColor600)' },
    },
    {
      label: 'Action Type 3',
      value: 'actionType3',
      description: 'This is a description for action type 3 for long description',
      labelIconConfig: { name: 'Info-Outline', fontSize: '1.2em', color: 'var(--grayColor600)' },
    },
    {
      label: 'Action Type 4',
      value: 'actionType4',
      description: 'This is a description for action type 4 for long description',
    },
    {
      label: 'Action Type 5',
      value: 'actionType5',
      description: 'This is a description for action type 5 for long description',
    },
    {
      label: 'Action Type 6',
      value: 'actionType6',
      description: 'This is a description for action type 6 for long description',
    },
  ];

  iconCardList = [
    {
      label: 'Icon Card 1',
      value: 'iconCard1',
      description: 'This is a description for Icon Card 1 for long description',
      icon: 'Search',
      checked: true,
    },
    {
      label: 'Icon Card 2',
      value: 'iconCard2',
      description: 'This is a description for icon card 2 for long description',
      icon: 'Info',
    },
    {
      label: 'Icon Card 3',
      value: 'iconCard3',
      description: 'This is a description for icon card 3 for long description',
      icon: 'Delete-Outline',
    },
    {
      label: 'Icon Card 4',
      value: 'iconCard4',
      description: 'This is a description for icon card 4 for long description',
      icon: 'Delete-Outline',
    },
    {
      label: 'Icon Card 5',
      value: 'iconCard5',
      description: 'This is a description for icon card 5 for long description',
      icon: 'Delete-Outline',
    },
    {
      label: 'Icon Card 6',
      value: 'iconCard6',
      description: 'This is a description for icon card 6 for long description',
      icon: 'Delete-Outline',
    },
  ];

  iconCardListWithoutDescription = [
    {
      label: 'Icon Card 1',
      value: 'iconCard1',
      icon: 'Search',
      checked: true,
    },
    {
      label: 'Icon Card 2',
      value: 'iconCard2',
      icon: 'Search',
    },
    {
      label: 'Icon Card 3',
      value: 'iconCard3',
      icon: 'Search',
    },
    {
      label: 'Icon Card 4',
      value: 'iconCard4',
      icon: 'Search',
    },
    {
      label: 'Icon Card 5',
      value: 'iconCard5',
      icon: 'Search',
    },
    {
      label: 'Icon Card 6',
      value: 'iconCard6',
      icon: 'Search',
    },
  ];

  iconCardListWithoutIcon = [
    {
      label: 'Icon Card 1',
      value: 'iconCard1',
      description: 'This is a description for Icon Card 1 for long description',
      checked: true,
    },
    {
      label: 'Icon Card 2',
      value: 'iconCard2',
      description: 'This is a description for icon card 2 for long description',
    },
    {
      label: 'Icon Card 3',
      value: 'iconCard3',
      description: 'This is a description for icon card 3 for long description',
    },
    {
      label: 'Icon Card 4',
      value: 'iconCard4',
      description: 'This is a description for icon card 4 for long description',
    },
    {
      label: 'Icon Card 5',
      value: 'iconCard5',
      description: 'This is a description for icon card 5 for long description',
    },
    {
      label: 'Icon Card 6',
      value: 'iconCard6',
      description: 'This is a description for icon card 6',
    },
  ];

  iconCardListWithoutIconAndDescription = [
    {
      label: 'Icon Card 1',
      value: 'iconCard1',
      checked: true,
    },
    {
      label: 'Icon Card 2',
      value: 'iconCard2',
    },
    {
      label: 'Icon Card 3',
      value: 'iconCard3',
    },
    {
      label: 'Icon Card 4',
      value: 'iconCard4',
    },
    {
      label: 'Icon Card 5',
      value: 'iconCard5',
    },
    {
      label: 'Icon Card 6',
      value: 'iconCard6',
    },
    {
      label: 'Icon Card 7',
      value: 'iconCard7',
    },
  ];

  radioButtonCodeSnippets: { [key: string]: { [key: string]: string } } = {
    single: {
      default: `<!-- radio-button-single -->
<div>
  <bntv-radio
    [type]="'single'"
    [text]="'Single Radio Button'"
    [checked]="true"
    [direction]="'row'"
  >
  </bntv-radio>
</div>`,
      unchecked: `<!-- radio-button-single-unchecked -->
<div>
  <bntv-radio
    [type]="'single'"
    [text]="'Unchecked Radio'"
    [checked]="false"
    [direction]="'row'"
  >
  </bntv-radio>
</div>`,
    },
    group: {
      default: `<!-- radio-button-group -->
<div>
  <bntv-radio
    [type]="'group'"
    [label]="'Select Option'"
    [itemList]="radioOptions"
    [displayExpression]="'$label'"
    [value]="'value'"
    [(data)]="groupRadioValue"
    [direction]="'row'"
  >
  </bntv-radio>
</div>`,
      column: `<!-- radio-button-group-column -->
<div>
  <bntv-radio
    [type]="'group'"
    [label]="'Select Option'"
    [itemList]="radioOptions"
    [displayExpression]="'$label'"
    [value]="'value'"
    [(data)]="groupRadioValue"
    [direction]="'column'"
  >
  </bntv-radio>
</div>`,
    },
    themes: {
      primary: `<!-- radio-button-primary -->
<div>
  <bntv-radio
    [type]="'group'"
    [label]="'Primary Theme'"
    [itemList]="radioOptions"
    [displayExpression]="'$label'"
    [value]="'value'"
    [theme]="'primary'"
    [(data)]="groupRadioValue"
  >
  </bntv-radio>
</div>`,
      accent: `<!-- radio-button-accent -->
<div>
  <bntv-radio
    [type]="'group'"
    [label]="'Accent Theme'"
    [itemList]="radioOptions"
    [displayExpression]="'$label'"
    [value]="'value'"
    [theme]="'accent'"
    [(data)]="groupRadioValue"
  >
  </bntv-radio>
</div>`,
      warn: `<!-- radio-button-warn -->
<div>
  <bntv-radio
    [type]="'group'"
    [label]="'Warn Theme'"
    [itemList]="radioOptions"
    [displayExpression]="'$label'"
    [value]="'value'"
    [theme]="'warn'"
    [(data)]="groupRadioValue"
  >
  </bntv-radio>
</div>`,
    },
    states: {
      disabled: `<!-- radio-button-disabled -->
<div>
  <bntv-radio
    [type]="'group'"
    [label]="'Disabled Group'"
    [itemList]="radioOptions"
    [displayExpression]="'$label'"
    [value]="'value'"
    [disabled]="true"
    [(data)]="groupRadioValue"
  >
  </bntv-radio>
</div>`,
      required: `<!-- radio-button-required -->
<div>
  <bntv-radio
    [type]="'group'"
    [label]="'Required Group'"
    [itemList]="radioOptions"
    [displayExpression]="'$label'"
    [value]="'value'"
    [required]="true"
    [(data)]="groupRadioValue"
  >
  </bntv-radio>
</div>`,
    },
    extended: {
      default: `<!-- extended-radio-default -->
<bntv-extended-radio
  [label]="'Radio default'"
  [(data)]="extendedRadioDefault"
  [itemList]="actionTypeRowList"
  [displayExpression]="'$label'"
  [value]="'value'"
  [descriptionKey]="'description'"
  [description]="'This is a description for default layout of radio button'"
  [labelIconConfig]="{ name: 'Info-Outline', fontSize: '1.2em', color: 'var(--grayColor600)' }"
  (onchange)="onRadioChange($event)"
></bntv-extended-radio>`,
      radioCard2: `<!-- extended-radio-card-2-columns -->
<bntv-extended-radio
  [label]="'Radio Card'"
  [(data)]="extendedRadioCard2"
  [itemList]="actionTypeRowList"
  [displayExpression]="'$label'"
  [value]="'value'"
  [numberOfColumns]="2"
  [layoutType]="'radioCard'"
  [descriptionKey]="'description'"
  [description]="'This is a description for radio card layout of radio button'"
  [labelIconConfig]="{ name: 'Info-Outline', fontSize: '1.2em', color: 'var(--grayColor600)' }"
  (onchange)="onRadioChange($event)"
></bntv-extended-radio>`,
      radioCard3: `<!-- extended-radio-card-3-columns -->
<bntv-extended-radio
  [label]="'Radio Card'"
  [(data)]="extendedRadioCard3"
  [itemList]="actionTypeRowList"
  [displayExpression]="'$label'"
  [value]="'value'"
  [numberOfColumns]="3"
  [layoutType]="'radioCard'"
  [descriptionKey]="'description'"
  [description]="'This is a description for radio card layout of radio button'"
  [labelIconConfig]="{ name: 'Info-Outline', fontSize: '1.2em', color: 'var(--grayColor600)' }"
  (onchange)="onRadioChange($event)"
></bntv-extended-radio>`,
      radioCard4: `<!-- extended-radio-card-4-columns -->
<bntv-extended-radio
  [label]="'Radio Card'"
  [(data)]="extendedRadioCard4"
  [itemList]="actionTypeRowList"
  [displayExpression]="'$label'"
  [value]="'value'"
  [numberOfColumns]="4"
  [layoutType]="'radioCard'"
  [descriptionKey]="'description'"
  [description]="'This is a description for radio card layout of radio button'"
  [labelIconConfig]="{ name: 'Info-Outline', fontSize: '1.2em', color: 'var(--grayColor600)' }"
  (onchange)="onRadioChange($event)"
></bntv-extended-radio>`,
      iconCard3: `<!-- extended-radio-icon-card-3-columns -->
<bntv-extended-radio
  [label]="'Icon Card'"
  [(data)]="extendedIconCard3"
  [itemList]="iconCardList"
  [displayExpression]="'$label'"
  [value]="'value'"
  [numberOfColumns]="3"
  [layoutType]="'iconCard'"
  [descriptionKey]="'description'"
  [description]="'This is a description for icon card layout of radio button'"
></bntv-extended-radio>`,
      iconCardNoCheck: `<!-- extended-radio-icon-card-no-checkmark -->
<bntv-extended-radio
  [label]="'Icon Card without check mark'"
  [(data)]="extendedIconCardNoCheck"
  [itemList]="iconCardList"
  [displayExpression]="'$label'"
  [value]="'value'"
  [suppressCheckMark]="true"
  [numberOfColumns]="4"
  [layoutType]="'iconCard'"
  [descriptionKey]="'description'"
  [description]="'This is a description for icon card layout of radio button'"
></bntv-extended-radio>`,
      iconCardNoDesc: `<!-- extended-radio-icon-card-no-description -->
<bntv-extended-radio
  [label]="'Icon Card without description'"
  [(data)]="extendedIconCardNoDesc"
  [itemList]="iconCardListWithoutDescription"
  [displayExpression]="'$label'"
  [value]="'value'"
  [numberOfColumns]="5"
  [layoutType]="'iconCard'"
  [descriptionKey]="'description'"
  [description]="'This is a description for icon card layout of radio button'"
></bntv-extended-radio>`,
      iconCardNoIcon: `<!-- extended-radio-icon-card-no-icon -->
<bntv-extended-radio
  [label]="'Icon Card without icon'"
  [(data)]="extendedIconCardNoIcon"
  [itemList]="iconCardListWithoutIcon"
  [displayExpression]="'$label'"
  [value]="'value'"
  [numberOfColumns]="6"
  [layoutType]="'iconCard'"
  [descriptionKey]="'description'"
  [description]="'This is a description for icon card layout of radio button'"
></bntv-extended-radio>`,
      iconCardNoIconDesc: `<!-- extended-radio-icon-card-no-icon-description -->
<bntv-extended-radio
  [label]="'Icon Card without icon and description'"
  [(data)]="extendedIconCardNoIconDesc"
  [itemList]="iconCardListWithoutIconAndDescription"
  [displayExpression]="'$label'"
  [value]="'value'"
  [numberOfColumns]="7"
  [layoutType]="'iconCard'"
  [descriptionKey]="'description'"
  [description]="'This is a description for icon card layout of radio button'"
></bntv-extended-radio>`,
    },
  };

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    this.currentCode['single'] = this.radioButtonCodeSnippets['single']?.default || '';
    this.currentCode['group'] = this.radioButtonCodeSnippets['group']?.default || '';
    this.currentCode['themes'] = this.radioButtonCodeSnippets['themes']?.primary || '';
    this.currentCode['states'] = this.radioButtonCodeSnippets['states']?.disabled || '';
    this.currentCode['extended'] = this.radioButtonCodeSnippets['extended']?.default || '';
  }

  onVariantClick(section: string, variant: string): void {
    if (
      this.radioButtonCodeSnippets[section] &&
      this.radioButtonCodeSnippets[section][variant]
    ) {
      this.currentCode[section] = this.radioButtonCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }

  onRadioChange(event: any): void {
    console.log('Radio changed:', event);
  }
}
