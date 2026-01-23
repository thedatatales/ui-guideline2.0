import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { UntypedFormGroup } from '@angular/forms';

@Component({
  standalone: false,
  selector: 'pmgt-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss'],
})
export class AutoCompleteComponent implements OnInit {
  currentCode: { [key: string]: string } = {
    basic: '',
    withIcon: '',
    multiselect: '',
    withApi: '',
    disabled: '',
  };

  formGroup = new UntypedFormGroup({});
  selectedValue: any = null;

  allPersons = [
    { id: 101, name: 'John', age: '25', email: 'John@ent.biz' },
    { id: 102, name: 'Gary', age: '23', email: 'Gary@ent.biz' },
    { id: 103, name: 'Rohit', age: '21', email: 'Rohit@ent.biz' },
    { id: 104, name: 'Steve', age: '23', email: 'Steve@ent.biz' },
  ];

  selectedMultiValue: any[] = [
    { id: 101, name: 'John', age: '25', email: 'John@ent.biz' },
  ];

  autoCompleteCodeSnippets: { [key: string]: { [key: string]: string } } = {
    basic: {
      default: `<!-- Basic Auto Complete -->
<bntv-auto-complete
  [label]="'Select Person'"
  [required]="true"
  [trackByKey]="'id'"
  [displayExpression]="'$name'"
  [autocompleteoptions]="allPersons"
  [(data)]="selectedValue"
>
</bntv-auto-complete>`,
    },
    withIcon: {
      default: `<!-- Auto Complete with Icon -->
<bntv-auto-complete
  [label]="'Select Person'"
  [required]="true"
  [leftIconName]="'users-bold'"
  [iconType]="'fontset'"
  [fontSet]="'icomoon'"
  [trackByKey]="'id'"
  [displayExpression]="'$name'"
  [autocompleteoptions]="allPersons"
  [(data)]="selectedValue"
>
</bntv-auto-complete>`,
    },
    multiselect: {
      default: `<!-- Multi Select Auto Complete -->
<bntv-auto-complete
  [label]="'Select Multiple'"
  [required]="true"
  [type]="'multiselect'"
  [trackByKey]="'id'"
  [displayExpression]="'$name'"
  [autocompleteoptions]="allPersons"
  [(data)]="selectedMultiValue"
>
</bntv-auto-complete>`,
    },
    withApi: {
      default: `<!-- Auto Complete with API -->
<bntv-auto-complete
  [label]="'Search Items'"
  [required]="true"
  [urlMetaData]="urlMetaData"
  [trackByKey]="'id'"
  [displayExpression]="'$name'"
>
</bntv-auto-complete>`,
    },
    disabled: {
      default: `<!-- Disabled Auto Complete -->
<bntv-auto-complete
  [label]="'Select Person'"
  [required]="true"
  [trackByKey]="'id'"
  [displayExpression]="'$name'"
  [autocompleteoptions]="allPersons"
  [(data)]="selectedValue"
  [disabled]="true"
>
</bntv-auto-complete>`,
    },
  };

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    Object.keys(this.currentCode).forEach((key) => {
      this.currentCode[key] = this.autoCompleteCodeSnippets[key]?.default || '';
    });
  }

  onVariantClick(section: string, variant: string): void {
    if (
      this.autoCompleteCodeSnippets[section] &&
      this.autoCompleteCodeSnippets[section][variant]
    ) {
      this.currentCode[section] =
        this.autoCompleteCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }
}
