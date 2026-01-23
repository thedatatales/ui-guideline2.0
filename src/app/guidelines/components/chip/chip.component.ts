import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { UntypedFormGroup } from '@angular/forms';

@Component({
  standalone: false,
  selector: 'pmgt-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
})
export class ChipComponent implements OnInit {
  currentCode: { [key: string]: string } = {
    basic: '',
    withInput: '',
    variants: '',
    removable: '',
    disabled: '',
  };

  formGroup = new UntypedFormGroup({});
  chipData = [
    { name: 'Chip 1', disabled: false },
    { name: 'Chip 2', disabled: false },
  ];

  chipDataWithInput: any[] = [];
  chipDataVariants = [
    { name: 'Success', chipVariant: 'success' },
    { name: 'Error', chipVariant: 'error' },
    { name: 'Warning', chipVariant: 'warning' },
    { name: 'Info', chipVariant: 'info' },
  ];

  autocompleteOptions = [
    { name: 'Option 1', icon: 'arrow_back' },
    { name: 'Option 2', icon: 'arrow_forward' },
    { name: 'Option 3', icon: 'arrow_left' },
  ];

  chipCodeSnippets: { [key: string]: { [key: string]: string } } = {
    basic: {
      default: `<!-- Basic Chip -->
<bntv-chip
  [label]="'Chips'"
  [data]="chipData"
  [formGroup]="formGroup"
  [formControlKey]="'chips'"
  [displayExpression]="'$name'"
>
</bntv-chip>`,
    },
    withInput: {
      default: `<!-- Chip with Input -->
<bntv-chip
  [label]="'Add Chips'"
  [data]="chipDataWithInput"
  [formGroup]="formGroup"
  [formControlKey]="'chipsWithInput'"
  [chipWithInput]="true"
  [autocompleteoptions]="autocompleteOptions"
  [displayExpression]="'$name'"
>
</bntv-chip>`,
    },
    variants: {
      default: `<!-- Chip Variants -->
<bntv-chip
  [label]="'Chip Variants'"
  [data]="chipDataVariants"
  [formGroup]="formGroup"
  [formControlKey]="'chipVariants'"
  [displayExpression]="'$name'"
>
</bntv-chip>`,
    },
    removable: {
      default: `<!-- Removable Chips -->
<bntv-chip
  [label]="'Removable Chips'"
  [data]="chipData"
  [formGroup]="formGroup"
  [formControlKey]="'removableChips'"
  [displayExpression]="'$name'"
  [removable]="true"
>
</bntv-chip>`,
    },
    disabled: {
      default: `<!-- Disabled Chip -->
<bntv-chip
  [label]="'Disabled Chips'"
  [data]="chipData"
  [formGroup]="formGroup"
  [formControlKey]="'disabledChips'"
  [displayExpression]="'$name'"
  [disabled]="true"
>
</bntv-chip>`,
    },
  };

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    Object.keys(this.currentCode).forEach((key) => {
      this.currentCode[key] = this.chipCodeSnippets[key]?.default || '';
    });
  }

  onVariantClick(section: string, variant: string): void {
    if (
      this.chipCodeSnippets[section] &&
      this.chipCodeSnippets[section][variant]
    ) {
      this.currentCode[section] =
        this.chipCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }

  chipVariants = [
    { 
      name: 'Success', 
      variant: 'success',
      bgColorVar: '--chipSuccessBgColor',
      textColorVar: '--chipSuccessTextColor',
      bgColor: '#d7f7d9',
      textColor: '#0a4d00'
    },
    { 
      name: 'Error', 
      variant: 'error',
      bgColorVar: '--chipErrorBgColor',
      textColorVar: '--chipErrorTextColor',
      bgColor: '#ffe8e8',
      textColor: '#ba0000'
    },
    { 
      name: 'Warning', 
      variant: 'warning',
      bgColorVar: '--chipWarningBgColor',
      textColorVar: '--chipWarningTextColor',
      bgColor: '#fff5c2',
      textColor: '#7a5900'
    },
    { 
      name: 'Info', 
      variant: 'info',
      bgColorVar: '--chipInfoBgColor',
      textColorVar: '--chipInfoTextColor',
      bgColor: '#e6f1ff',
      textColor: '#004085'
    },
    { 
      name: 'Purple', 
      variant: 'purple',
      bgColorVar: '--chipPurpleBgColor',
      textColorVar: '--chipPurpleTextColor',
      bgColor: '#efdffa',
      textColor: '#552684'
    },
    { 
      name: 'Orange', 
      variant: 'orange',
      bgColorVar: '--chipOrangeBgColor',
      textColorVar: '--chipOrangeTextColor',
      bgColor: '#ffecd8',
      textColor: '#824313'
    },
    { 
      name: 'Pink', 
      variant: 'pink',
      bgColorVar: '--chipPinkBgColor',
      textColorVar: '--chipPinkTextColor',
      bgColor: '#ffebf4',
      textColor: '#750f3d'
    },
    { 
      name: 'Cyan', 
      variant: 'cyan',
      bgColorVar: '--chipCyanBgColor',
      textColorVar: '--chipCyanTextColor',
      bgColor: '#d9f7fa',
      textColor: '#00555e'
    },
    { 
      name: 'Neutral', 
      variant: 'neutral',
      bgColorVar: '--chipNeutralBgColor',
      textColorVar: '--chipNeutralTextColor',
      bgColor: 'transparent',
      textColor: 'var(--grayColor700)'
    },
  ];

  copyVariable(variable: string): void {
    this.clipboard.copy(variable);
  }
}
