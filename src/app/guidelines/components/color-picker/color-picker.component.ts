import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  standalone: false,
  selector: 'pmgt-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
})
export class ColorPickerComponent implements OnInit {
  currentCode: { [key: string]: string } = {
    basic: '',
    withBorder: '',
    withColorCode: '',
    withInput: '',
    disabled: '',
  };

  selectedColor = '#1976d2';
  selectedColor2 = '#ff5722';
  selectedColor3 = '#4caf50';
  selectedColor4 = '#9c27b0';
  selectedColor5 = '#000000';

  colorPickerCodeSnippets: { [key: string]: { [key: string]: string } } = {
    basic: {
      default: `<!-- color-picker-basic -->
<div>
  <bntv-color-picker
    [label]="'Select color'"
    [(selectedColor)]="selectedColor"
  >
  </bntv-color-picker>
</div>`,
      withLabel: `<!-- color-picker-with-label -->
<div>
  <bntv-color-picker
    [label]="'Select color'"
    [labelPosition]="'top'"
    [(selectedColor)]="selectedColor"
  >
  </bntv-color-picker>
</div>`,
    },
    withBorder: {
      bordered: `<!-- color-picker-with-border -->
<div>
  <bntv-color-picker
    [label]="'Select color'"
    [border]="true"
    [(selectedColor)]="selectedColor"
  >
  </bntv-color-picker>
</div>`,
      borderedDisabled: `<!-- color-picker-bordered-disabled -->
<div>
  <bntv-color-picker
    [label]="'Select color'"
    [border]="true"
    [disabled]="true"
    [(selectedColor)]="selectedColor"
  >
  </bntv-color-picker>
</div>`,
    },
    withColorCode: {
      showCode: `<!-- color-picker-show-color-code -->
<div>
  <bntv-color-picker
    [label]="'Select color'"
    [border]="true"
    [showColorCode]="true"
    [(selectedColor)]="selectedColor"
  >
  </bntv-color-picker>
</div>`,
    },
    withInput: {
      showInput: `<!-- color-picker-show-input -->
<div>
  <bntv-color-picker
    [label]="'Select color'"
    [labelPosition]="'top'"
    [showInput]="true"
    [(selectedColor)]="selectedColor"
  >
  </bntv-color-picker>
</div>`,
      showInputDisabled: `<!-- color-picker-show-input-disabled -->
<div>
  <bntv-color-picker
    [label]="'Select color'"
    [labelPosition]="'top'"
    [showInput]="true"
    [disabled]="true"
    [(selectedColor)]="selectedColor"
  >
  </bntv-color-picker>
</div>`,
    },
    disabled: {
      disabled: `<!-- color-picker-disabled -->
<div>
  <bntv-color-picker
    [label]="'Select color'"
    [labelPosition]="'top'"
    [disabled]="true"
    [(selectedColor)]="selectedColor"
  >
  </bntv-color-picker>
</div>`,
    },
  };

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    this.currentCode['basic'] = this.colorPickerCodeSnippets['basic']?.default || '';
    this.currentCode['withBorder'] = this.colorPickerCodeSnippets['withBorder']?.bordered || '';
    this.currentCode['withColorCode'] = this.colorPickerCodeSnippets['withColorCode']?.showCode || '';
    this.currentCode['withInput'] = this.colorPickerCodeSnippets['withInput']?.showInput || '';
    this.currentCode['disabled'] = this.colorPickerCodeSnippets['disabled']?.disabled || '';
  }

  onVariantClick(section: string, variant: string): void {
    if (
      this.colorPickerCodeSnippets[section] &&
      this.colorPickerCodeSnippets[section][variant]
    ) {
      this.currentCode[section] = this.colorPickerCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }

  onColorChange(color: string): void {
    console.log('Color changed:', color);
  }
}
