import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  standalone: false,
  selector: 'pmgt-input-fields',
  templateUrl: './input-fields.component.html',
  styleUrls: ['./input-fields.component.scss'],
})
export class InputFieldsComponent implements OnInit {
  currentCode: { [key: string]: string } = {
    basic: '',
    types: '',
    states: '',
  };

  inputValue = '';
  passwordValue = '';
  emailValue = '';
  numberValue = '';
  textareaValue = '';
  disabledValue = '';
  requiredValue = '';

  inputFieldsCodeSnippets: { [key: string]: { [key: string]: string } } = {
    basic: {
      default: `<!-- input-field-basic -->
<div>
  <bntv-input-box
    [label]="'Input Field'"
    [placeholder]="'Enter text'"
    [(data)]="inputValue"
  >
  </bntv-input-box>
</div>`,
      withLabel: `<!-- input-field-with-label -->
<div>
  <bntv-input-box
    [label]="'Input Field'"
    [placeholder]="'Enter text'"
    [required]="true"
    [(data)]="inputValue"
  >
  </bntv-input-box>
</div>`,
    },
    types: {
      text: `<!-- input-field-text -->
<div>
  <bntv-input-box
    [label]="'Text field'"
    [placeholder]="'Enter text'"
    [type]="'text'"
    [(data)]="inputValue"
  >
  </bntv-input-box>
</div>`,
      password: `<!-- input-field-password -->
<div>
  <bntv-input-box
    [label]="'Password field'"
    [placeholder]="'Enter password'"
    [type]="'password'"
    [(data)]="passwordValue"
  >
  </bntv-input-box>
</div>`,
      email: `<!-- input-field-email -->
<div>
  <bntv-input-box
    [label]="'Email field'"
    [placeholder]="'Enter email'"
    [type]="'email'"
    [(data)]="emailValue"
  >
  </bntv-input-box>
</div>`,
      number: `<!-- input-field-number -->
<div>
  <bntv-input-box
    [label]="'Number field'"
    [placeholder]="'Enter number'"
    [type]="'number'"
    [(data)]="numberValue"
  >
  </bntv-input-box>
</div>`,
      textarea: `<!-- input-field-textarea -->
<div>
  <bntv-input-box
    [label]="'Textarea field'"
    [placeholder]="'Enter text'"
    [type]="'textbox'"
    [(data)]="textareaValue"
  >
  </bntv-input-box>
</div>`,
    },
    states: {
      disabled: `<!-- input-field-disabled -->
<div>
  <bntv-input-box
    [label]="'Disabled field'"
    [placeholder]="'Cannot edit'"
    [disabled]="true"
    [(data)]="disabledValue"
  >
  </bntv-input-box>
</div>`,
      required: `<!-- input-field-required -->
<div>
  <bntv-input-box
    [label]="'Required field'"
    [placeholder]="'Enter text'"
    [required]="true"
    [(data)]="requiredValue"
  >
  </bntv-input-box>
</div>`,
    },
  };

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    this.currentCode['basic'] = this.inputFieldsCodeSnippets['basic']?.default || '';
    this.currentCode['types'] = this.inputFieldsCodeSnippets['types']?.text || '';
    this.currentCode['states'] = this.inputFieldsCodeSnippets['states']?.disabled || '';
  }

  onVariantClick(section: string, variant: string): void {
    if (
      this.inputFieldsCodeSnippets[section] &&
      this.inputFieldsCodeSnippets[section][variant]
    ) {
      this.currentCode[section] = this.inputFieldsCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }
}
