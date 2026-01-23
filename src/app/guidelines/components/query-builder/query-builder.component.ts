import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { IRuleConfig } from '@enttribe/core/query-builder';

@Component({
  standalone: false,
  selector: 'pmgt-query-builder',
  templateUrl: './query-builder.component.html',
  styleUrls: ['./query-builder.component.scss'],
})
export class QueryBuilderComponent implements OnInit {
  currentCode: { [key: string]: string } = {
    basic: '',
    nested: '',
    customStyle: '',
    disabled: '',
  };

  formGroup = new UntypedFormGroup({});
  queryFormGroup = new UntypedFormGroup({});

  fieldList = [
    { label: 'Name', key: 'name', type: 'string' },
    { label: 'Age', key: 'age', type: 'integer' },
    {
      label: 'Status',
      key: 'status',
      type: 'enum',
      options: [
        { name: 'Active', value: 'active' },
        { name: 'Inactive', value: 'inactive' },
      ],
    },
    { label: 'Date', key: 'date', type: 'date' },
  ];

  ruleSetConfig: IRuleConfig = {
    add: {
      label: 'Add Rule Set',
      hide: false,
      iconType: 'stroked',
      hideInNested: true,
      addDefaultRule: true,
    },
    remove: {
      iconName: 'Delete-Outline',
      onCard: false,
      hide: false,
    },
  };

  ruleConfig: IRuleConfig = {
    add: {
      label: 'Add Rule',
      hide: false,
      iconType: 'stroked',
      showParentAdd: true,
    },
    remove: {
      onCard: false,
      hide: false,
    },
  };

  styleConfig = {
    bgColor: 'var(--bgColor10)',
    showNestedBorder: true,
  };

  basicData = {
    condition: 'AND',
    rules: [{}],
  };

  nestedData = {
    condition: 'AND',
    rules: [
      {
        condition: 'AND',
        rules: [{}],
      },
    ],
  };

  queryBuilderCodeSnippets: { [key: string]: { [key: string]: string } } = {
    basic: {
      default: `<!-- Basic Query Builder -->
<bntv-query-builder
  [fieldList]="fieldList"
  [data]="basicData"
  [formGroup]="formGroup"
  [ruleSetConfig]="ruleSetConfig"
  [ruleConfig]="ruleConfig"
  [enableValidation]="true"
>
</bntv-query-builder>`,
    },
    nested: {
      default: `<!-- Nested Query Builder -->
<bntv-query-builder
  [fieldList]="fieldList"
  [data]="nestedData"
  [formGroup]="formGroup"
  [ruleSetConfig]="ruleSetConfig"
  [ruleConfig]="ruleConfig"
  [enableValidation]="true"
>
</bntv-query-builder>`,
    },
    customStyle: {
      default: `<!-- Query Builder with Custom Style -->
<bntv-query-builder
  [fieldList]="fieldList"
  [data]="basicData"
  [formGroup]="formGroup"
  [ruleSetConfig]="ruleSetConfig"
  [ruleConfig]="ruleConfig"
  [styleConfig]="styleConfig"
  [enableValidation]="true"
>
</bntv-query-builder>`,
    },
    disabled: {
      default: `<!-- Disabled Query Builder -->
<bntv-query-builder
  [fieldList]="fieldList"
  [data]="basicData"
  [formGroup]="formGroup"
  [ruleSetConfig]="ruleSetConfig"
  [ruleConfig]="ruleConfig"
  [disabled]="true"
  [enableValidation]="true"
>
</bntv-query-builder>`,
    },
  };

  constructor(
    private clipboard: Clipboard,
    private fb: UntypedFormBuilder
  ) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({});
    this.queryFormGroup = this.fb.group({});
    Object.keys(this.currentCode).forEach((key) => {
      this.currentCode[key] =
        this.queryBuilderCodeSnippets[key]?.default || '';
    });
  }

  onVariantClick(section: string, variant: string): void {
    if (
      this.queryBuilderCodeSnippets[section] &&
      this.queryBuilderCodeSnippets[section][variant]
    ) {
      this.currentCode[section] =
        this.queryBuilderCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }
}
