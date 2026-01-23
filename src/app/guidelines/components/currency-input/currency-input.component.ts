import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { UntypedFormGroup } from '@angular/forms';

@Component({
  standalone: false,
  selector: 'pmgt-currency-input',
  templateUrl: './currency-input.component.html',
  styleUrls: ['./currency-input.component.scss'],
})
export class CurrencyInputComponent implements OnInit {
  currentCode: { [key: string]: string } = {
    basic: '',
    leftPosition: '',
    rightPosition: '',
    withValue: '',
    disabled: '',
  };

  formGroup = new UntypedFormGroup({});
  currencyData: any = '';
  currencyData2: any = '';

  currencyList = [
    { symbol: 'USD', name: 'US Dollar', code: 'USD' },
    { symbol: 'EUR', name: 'Euro', code: 'EUR' },
    { symbol: 'GBP', name: 'British Pound', code: 'GBP' },
    { symbol: 'INR', name: 'Indian Rupee', code: 'INR' },
  ];

  currencyCodeSnippets: { [key: string]: { [key: string]: string } } = {
    basic: {
      default: `<!-- Basic Currency Input -->
<bntv-currency-input
  [label]="'Amount'"
  [itemList]="currencyList"
  [formGroup]="formGroup"
  [formControlKey]="'amount'"
  [(data)]="currencyData"
>
</bntv-currency-input>`,
    },
    leftPosition: {
      default: `<!-- Currency Input with Left Position -->
<bntv-currency-input
  [label]="'Amount'"
  [itemList]="currencyList"
  [currencyInputPosition]="'left'"
  [formGroup]="formGroup"
  [formControlKey]="'amountLeft'"
  [(data)]="currencyData"
>
</bntv-currency-input>`,
    },
    rightPosition: {
      default: `<!-- Currency Input with Right Position -->
<bntv-currency-input
  [label]="'Amount'"
  [itemList]="currencyList"
  [currencyInputPosition]="'right'"
  [formGroup]="formGroup"
  [formControlKey]="'amountRight'"
  [(data)]="currencyData"
>
</bntv-currency-input>`,
    },
    withValue: {
      default: `<!-- Currency Input with Pre-filled Value -->
<bntv-currency-input
  [label]="'Amount'"
  [itemList]="currencyList"
  [formGroup]="formGroup"
  [formControlKey]="'amountWithValue'"
  [(data)]="currencyData2"
>
</bntv-currency-input>`,
    },
    disabled: {
      default: `<!-- Disabled Currency Input -->
<bntv-currency-input
  [label]="'Amount'"
  [itemList]="currencyList"
  [formGroup]="formGroup"
  [formControlKey]="'amountDisabled'"
  [(data)]="currencyData"
  [disabled]="true"
>
</bntv-currency-input>`,
    },
  };

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    Object.keys(this.currentCode).forEach((key) => {
      this.currentCode[key] = this.currencyCodeSnippets[key]?.default || '';
    });
  }

  onVariantClick(section: string, variant: string): void {
    if (
      this.currencyCodeSnippets[section] &&
      this.currencyCodeSnippets[section][variant]
    ) {
      this.currentCode[section] =
        this.currencyCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }
}
