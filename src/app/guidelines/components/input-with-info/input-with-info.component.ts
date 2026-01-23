import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { UntypedFormGroup } from '@angular/forms';

@Component({
  standalone: false,
  selector: 'pmgt-input-with-info',
  templateUrl: './input-with-info.component.html',
  styleUrls: ['./input-with-info.component.scss'],
})
export class InputWithInfoComponent implements OnInit {
  @ViewChild('infoTemplate') infoTemplate: TemplateRef<any>;
  currentCode: { [key: string]: string } = {
    withInfoMessage: '',
    withLabelInfoIcon: '',
    withInfoTemplate: '',
  };

  formGroup = new UntypedFormGroup({});
  textValue = '';
  infoMessage = 'This is a helpful information message';
  labelInfoMessage = 'This is a label info icon message';

  inputWithInfoCodeSnippets: { [key: string]: { [key: string]: string } } = {
    withInfoMessage: {
      default: `<!-- Input Box with Info Message -->
<bntv-input-box
  [label]="'Input with Info'"
  [placeholder]="'Enter text'"
  [type]="'text'"
  [infoMessage]="'This is a helpful information message'"
  [(data)]="textValue"
>
</bntv-input-box>`,
    },
    withLabelInfoIcon: {
      default: `<!-- Input Box with Label Info Icon -->
<bntv-input-box
  [label]="'Input with Label Info'"
  [placeholder]="'Enter text'"
  [type]="'text'"
  [lableinfoIconMessage]="'This is a label info icon message'"
  [(data)]="textValue"
>
</bntv-input-box>`,
    },
    withInfoTemplate: {
      default: `<!-- Input Box with Info Template -->
<bntv-input-box
  [label]="'Input with Info Template'"
  [placeholder]="'Enter text'"
  [type]="'text'"
  [infoTemplateRef]="infoTemplate"
  [(data)]="textValue"
>
</bntv-input-box>

<!-- Template -->
<ng-template #infoTemplate>
  <div>Custom info template content</div>
</ng-template>`,
    },
  };

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    Object.keys(this.currentCode).forEach((key) => {
      this.currentCode[key] = this.inputWithInfoCodeSnippets[key]?.default || '';
    });
  }

  onVariantClick(section: string, variant: string): void {
    if (
      this.inputWithInfoCodeSnippets[section] &&
      this.inputWithInfoCodeSnippets[section][variant]
    ) {
      this.currentCode[section] =
        this.inputWithInfoCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }
}
