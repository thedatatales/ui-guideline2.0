import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  standalone: false,
  selector: 'app-selectbox',
  templateUrl: './selectbox.component.html',
  styleUrls: ['./selectbox.component.scss'],
})
export class SelectboxComponent implements OnInit {
  selectedValue: any = null;
  selectedValue2: any = null;
  selectedValue3: any[] = [];
  selectedValue4: any = null;
  multiSelectWithIcon: any[] = [];
  multiSelectWithDisabled: any[] = [];
  multiSelectWithSelectAll: any[] = [];
  multiSelectDisabled: any[] = [];

  itemList = [
    { id: 1, name: 'Option 1', value: 'option1' },
    { id: 2, name: 'Option 2', value: 'option2' },
    { id: 3, name: 'Option 3', value: 'option3' },
    { id: 4, name: 'Option 4', value: 'option4' },
  ];

  hobbiesArr = [
    { id: 1, name: 'Reading', displayName: 'Reading Books', value: 'reading' },
    { id: 2, name: 'Writing', displayName: 'Writing Stories', value: 'writing' },
    { id: 3, name: 'Coding', displayName: 'Coding Projects', value: 'coding' },
    { id: 4, name: 'Gaming', displayName: 'Playing Games', value: 'gaming' },
    { id: 5, name: 'Sports', displayName: 'Playing Sports', value: 'sports' },
  ];

  statusList = [
    { name: 'Active', value: 'active' },
    { name: 'Inactive', value: 'inactive' },
    { name: 'Pending', value: 'pending' },
    { name: 'Completed', value: 'completed' },
  ];

  defaultItemList = [
    { id: 1, name: 'Item 1', value: 'item1' },
    { id: 2, name: 'Item 2', value: 'item2' },
    { id: 3, name: 'Item 3', value: 'item3' },
    { id: 4, name: 'Item 4', value: 'item4' },
    { id: 5, name: 'Item 5', value: 'item5' },
  ];

  formGroup = new UntypedFormGroup({
    basicSelect: new UntypedFormControl(null),
    disabledSelect: new UntypedFormControl('option2'),
    multiSelect: new UntypedFormControl([]),
    requiredSelect: new UntypedFormControl(null),
  });

  currentCode: { [key: string]: string } = {
    basic: '',
    disabled: '',
    multiSelect: '',
    multiSelectWithIcon: '',
    multiSelectWithDisabled: '',
    multiSelectWithSelectAll: '',
    multiSelectDisabled: '',
    required: '',
    withIcon: '',
  };

  selectboxCodeSnippets: { [key: string]: { [key: string]: string } } = {
    basic: {
      default: `<!-- Basic Selectbox -->
<bntv-select-box
  [label]="'Select Option'"
  [placeholder]="'Choose an option'"
  [itemList]="itemList"
  [displayExpression]="'$name'"
  [value]="'value'"
  [(data)]="selectedValue"
></bntv-select-box>`,
    },
    disabled: {
      default: `<!-- Disabled Selectbox -->
<bntv-select-box
  [label]="'Select Option'"
  [placeholder]="'Choose an option'"
  [itemList]="itemList"
  [displayExpression]="'$name'"
  [value]="'value'"
  [(data)]="selectedValue"
  [disabled]="true"
></bntv-select-box>`,
    },
    multiSelect: {
      default: `<!-- Multi Select Selectbox -->
<bntv-select-box
  [label]="'Select Multiple Options'"
  [placeholder]="'Choose options'"
  [itemList]="itemList"
  [displayExpression]="'$name'"
  [value]="'value'"
  [isMultipleSelect]="true"
  [(data)]="selectedValue3"
></bntv-select-box>`,
    },
    multiSelectWithIcon: {
      withIcon: `<!-- Multi Select with Icon -->
<bntv-select-box
  [label]="'Simple Multiple-Select-box with an optional affix icon'"
  [placeholder]="'input'"
  [iconName]="'lock-simple-bold'"
  [iconPosition]="'left'"
  [required]="true"
  [isMultipleSelect]="true"
  [iconColor]="'red'"
  [iconFontSize]="'1em'"
  [itemList]="statusList"
  [(data)]="multiSelectWithIcon"
  [infoMessage]="'Select-box configured with an optional affix icon'"
></bntv-select-box>`,
    },
    multiSelectWithDisabled: {
      withDisabled: `<!-- Multi Select with Disabled Options -->
<bntv-select-box
  [label]="'Multiple-Select-box with a few disabled options'"
  [appearance]="'outline'"
  [placeholder]="'Select item'"
  [(data)]="multiSelectWithDisabled"
  [itemList]="hobbiesArr"
  [displayExpression]="'$name'"
  [isMultipleSelect]="true"
  [isDefaultOption]="true"
  [required]="true"
  [optionDisabledFn]="optionDisabledFn"
></bntv-select-box>`,
    },
    multiSelectWithSelectAll: {
      withSelectAll: `<!-- Multi Select with Select All -->
<bntv-select-box
  [label]="'Multiple-Select-box with a select-all option'"
  [appearance]="'outline'"
  [placeholder]="'Select item'"
  [trackByKey]="'id'"
  [(data)]="multiSelectWithSelectAll"
  [itemList]="defaultItemList"
  [displayExpression]="'$name'"
  [isMultipleSelect]="true"
  [isDefaultOption]="true"
  [required]="true"
  [displaySelectedCount]="1"
  [formControlKey]="'select'"
  [search]="true"
  [optionDisabledFn]="optionDisabledFn"
  [dynamicClass]="'inheritFontSize'"
  [iconName]="'search'"
  [triggerTemplate]="'chip'"
  [uniqueItemKey]="'id'"
></bntv-select-box>`,
    },
    multiSelectDisabled: {
      disabled: `<!-- Multi Select Disabled -->
<bntv-select-box
  [label]="'Multiple-Select-box (disabled)'"
  [appearance]="'outline'"
  [placeholder]="'Select item'"
  [trackByKey]="'id'"
  [(data)]="multiSelectDisabled"
  [itemList]="defaultItemList"
  [displayExpression]="'$name ($id)'"
  [isMultipleSelect]="true"
  [isDefaultOption]="true"
  [required]="true"
  [disabled]="true"
  [displaySelectedCount]="1"
  [formControlKey]="'select'"
  [search]="true"
  [optionDisabledFn]="optionDisabledFn"
  [dynamicClass]="'inheritFontSize'"
  [iconName]="'search'"
  [triggerTemplate]="'chip'"
  [uniqueItemKey]="'id'"
></bntv-select-box>`,
    },
    required: {
      default: `<!-- Required Selectbox -->
<bntv-select-box
  [label]="'Select Option'"
  [placeholder]="'Choose an option'"
  [itemList]="itemList"
  [displayExpression]="'$name'"
  [value]="'value'"
  [(data)]="selectedValue"
  [required]="true"
></bntv-select-box>`,
    },
    withIcon: {
      default: `<!-- Selectbox with Icon -->
<bntv-select-box
  [label]="'Select Option'"
  [placeholder]="'Choose an option'"
  [itemList]="itemList"
  [displayExpression]="'$name'"
  [value]="'value'"
  [(data)]="selectedValue"
  [iconName]="'circle-filled'"
  [iconPosition]="'left'"
  [iconColor]="'green'"
></bntv-select-box>`,
    },
  };

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    this.currentCode['basic'] = this.selectboxCodeSnippets['basic']?.default || '';
    this.currentCode['disabled'] = this.selectboxCodeSnippets['disabled']?.default || '';
    this.currentCode['multiSelect'] = this.selectboxCodeSnippets['multiSelect']?.default || '';
    this.currentCode['multiSelectWithIcon'] = this.selectboxCodeSnippets['multiSelectWithIcon']?.withIcon || '';
    this.currentCode['multiSelectWithDisabled'] = this.selectboxCodeSnippets['multiSelectWithDisabled']?.withDisabled || '';
    this.currentCode['multiSelectWithSelectAll'] = this.selectboxCodeSnippets['multiSelectWithSelectAll']?.withSelectAll || '';
    this.currentCode['multiSelectDisabled'] = this.selectboxCodeSnippets['multiSelectDisabled']?.disabled || '';
    this.currentCode['required'] = this.selectboxCodeSnippets['required']?.default || '';
    this.currentCode['withIcon'] = this.selectboxCodeSnippets['withIcon']?.default || '';
  }

  optionDisabledFn = (option: any): boolean => {
    // Example: disable options with name 'Reading' or 'Travel'
    return option.name === 'Reading' || option.name === 'Travel';
  };

  onVariantClick(section: string, variant: string = 'default'): void {
    if (this.selectboxCodeSnippets[section] && this.selectboxCodeSnippets[section][variant]) {
      this.currentCode[section] = this.selectboxCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }
}
