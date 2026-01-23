import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { UntypedFormGroup } from '@angular/forms';

@Component({
  standalone: false,
  selector: 'pmgt-affix-input',
  templateUrl: './affix-input.component.html',
  styleUrls: ['./affix-input.component.scss'],
})
export class AffixInputComponent implements OnInit {
  currentCode: { [key: string]: string } = {
    basic: '',
    prefix: '',
    suffix: '',
    both: '',
    disabled: '',
  };

  formGroup = new UntypedFormGroup({});
  inputValue: any = '';

  affixInputCodeSnippets: { [key: string]: { [key: string]: string } } = {
    basic: {
      default: `<!-- Basic Affix Input -->
<bntv-affix-input
  [label]="'Input'"
  [formGroup]="formGroup"
  [formControlKey]="'input'"
  [(data)]="inputValue"
>
</bntv-affix-input>`,
    },
    prefix: {
      default: `<!-- Affix Input with Prefix -->
<bntv-affix-input
  [label]="'Amount'"
  [formGroup]="formGroup"
  [formControlKey]="'amount'"
  [prefixText]="'$'"
  [(data)]="inputValue"
>
</bntv-affix-input>`,
    },
    suffix: {
      default: `<!-- Affix Input with Suffix -->
<bntv-affix-input
  [label]="'Weight'"
  [formGroup]="formGroup"
  [formControlKey]="'weight'"
  [suffixText]="'kg'"
  [(data)]="inputValue"
>
</bntv-affix-input>`,
    },
    both: {
      default: `<!-- Affix Input with Both Prefix and Suffix -->
<bntv-affix-input
  [label]="'Price'"
  [formGroup]="formGroup"
  [formControlKey]="'price'"
  [prefixText]="'$'"
  [suffixText]="'.00'"
  [(data)]="inputValue"
>
</bntv-affix-input>`,
    },
    disabled: {
      default: `<!-- Disabled Affix Input -->
<bntv-affix-input
  [label]="'Input'"
  [formGroup]="formGroup"
  [formControlKey]="'inputDisabled'"
  [prefixText]="'$'"
  [(data)]="inputValue"
  [disabled]="true"
>
</bntv-affix-input>`,
    },
  };

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    Object.keys(this.currentCode).forEach((key) => {
      this.currentCode[key] = this.affixInputCodeSnippets[key]?.default || '';
    });
  }

  onVariantClick(section: string, variant: string): void {
    if (
      this.affixInputCodeSnippets[section] &&
      this.affixInputCodeSnippets[section][variant]
    ) {
      this.currentCode[section] =
        this.affixInputCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }
}

