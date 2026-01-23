import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  standalone: false,
  selector: 'pmgt-advance-search',
  templateUrl: './advance-search.component.html',
  styleUrls: ['./advance-search.component.scss'],
})
export class AdvanceSearchComponent implements OnInit {
  currentCode: { [key: string]: string } = {
    basic: '',
    withLabel: '',
    multiselect: '',
    customSuffix: '',
    disabled: '',
  };

  searchControl = new UntypedFormControl();
  searchFormGroup = new UntypedFormGroup({
    search: new UntypedFormControl(),
  });

  advanceSearchCodeSnippets: { [key: string]: { [key: string]: string } } = {
    basic: {
      default: `<!-- Basic Advance Search -->
<bntv-advance-search
  [control]="searchControl"
  [placeholder]="'Search'"
  [showSearchIcon]="true"
  [displayNoDataMsg]="true"
>
</bntv-advance-search>`,
    },
    withLabel: {
      default: `<!-- Advance Search with Label -->
<bntv-advance-search
  [control]="searchControl"
  [label]="'Search Items'"
  [placeholder]="'Enter search term'"
  [required]="true"
  [showSearchIcon]="true"
>
</bntv-advance-search>`,
    },
    multiselect: {
      default: `<!-- Multiselect Advance Search -->
<bntv-advance-search
  [control]="searchControl"
  [multiselect]="true"
  [placeholder]="'Search and select multiple items'"
  [showSearchIcon]="true"
>
</bntv-advance-search>`,
    },
    customSuffix: {
      default: `<!-- Advance Search with Custom Suffix -->
<bntv-advance-search
  [control]="searchControl"
  [placeholder]="'Search'"
  [isCustomSuffixRightIcon]="true"
  [customSuffixTemplateRef]="customSuffixTemplate"
  [showSearchIcon]="true"
>
</bntv-advance-search>`,
    },
    disabled: {
      default: `<!-- Disabled Advance Search -->
<bntv-advance-search
  [control]="searchControl"
  [placeholder]="'Search'"
  [disabled]="true"
  [showSearchIcon]="true"
>
</bntv-advance-search>`,
    },
  };

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    Object.keys(this.currentCode).forEach((key) => {
      this.currentCode[key] = this.advanceSearchCodeSnippets[key]?.default || '';
    });
  }

  onVariantClick(section: string, variant: string): void {
    if (
      this.advanceSearchCodeSnippets[section] &&
      this.advanceSearchCodeSnippets[section][variant]
    ) {
      this.currentCode[section] =
        this.advanceSearchCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }
}
