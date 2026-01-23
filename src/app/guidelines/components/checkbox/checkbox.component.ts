import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  standalone: false,
  selector: 'pmgt-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent implements OnInit {
  currentCode: { [key: string]: string } = {
    basic: '',
    themes: '',
    states: '',
    indeterminate: '',
    extended: '',
  };

  checkboxCodeSnippets: { [key: string]: { [key: string]: string } } = {
    basic: {
      checked: `<!-- checkbox-checked -->
<div>
  <bntv-check-box
    [(data)]="checkboxData.basicChecked"
    [label]="'Checked'"
    [theme]="'accent'"
    (change)="onCheckboxChange($event)"
  >
  </bntv-check-box>
</div>`,
      unchecked: `<!-- checkbox-unchecked -->
<div>
  <bntv-check-box
    [(data)]="checkboxData.basicUnchecked"
    [label]="'Unchecked'"
    [theme]="'accent'"
    (change)="onCheckboxChange($event)"
  >
  </bntv-check-box>
</div>`,
      withLabel: `<!-- checkbox-with-label -->
<div>
  <bntv-check-box
    [(data)]="checkboxData.withLabel"
    [label]="'Accept Terms and Conditions'"
    [theme]="'accent'"
    (change)="onCheckboxChange($event)"
  >
  </bntv-check-box>
</div>`,
    },
    themes: {
      primary: `<!-- checkbox-primary -->
<div>
  <bntv-check-box
    [(data)]="checkboxData.primary"
    [label]="'Primary Theme'"
    [theme]="'primary'"
    (change)="onCheckboxChange($event)"
  >
  </bntv-check-box>
</div>`,
      accent: `<!-- checkbox-accent -->
<div>
  <bntv-check-box
    [(data)]="checkboxData.accent"
    [label]="'Accent Theme'"
    [theme]="'accent'"
    (change)="onCheckboxChange($event)"
  >
  </bntv-check-box>
</div>`,
      warn: `<!-- checkbox-warn -->
<div>
  <bntv-check-box
    [(data)]="checkboxData.warn"
    [label]="'Warn Theme'"
    [theme]="'warn'"
    (change)="onCheckboxChange($event)"
  >
  </bntv-check-box>
</div>`,
    },
    states: {
      disabled: `<!-- checkbox-disabled -->
<div>
  <bntv-check-box
    [(data)]="checkboxData.disabled"
    [label]="'Disabled'"
    [theme]="'accent'"
    [disabled]="true"
    (change)="onCheckboxChange($event)"
  >
  </bntv-check-box>
</div>`,
      disabledChecked: `<!-- checkbox-disabled-checked -->
<div>
  <bntv-check-box
    [(data)]="checkboxData.disabledChecked"
    [label]="'Disabled Checked'"
    [theme]="'accent'"
    [disabled]="true"
    (change)="onCheckboxChange($event)"
  >
  </bntv-check-box>
</div>`,
      required: `<!-- checkbox-required -->
<div>
  <bntv-check-box
    [(data)]="checkboxData.required"
    [label]="'Required'"
    [theme]="'accent'"
    [required]="true"
    (change)="onCheckboxChange($event)"
  >
  </bntv-check-box>
</div>`,
    },
    indeterminate: {
      indeterminate: `<!-- checkbox-indeterminate -->
<div>
  <bntv-check-box
    [(data)]="checkboxData.indeterminate"
    [label]="'Indeterminate'"
    [theme]="'accent'"
    [indeterminate]="true"
    (change)="onCheckboxChange($event)"
  >
  </bntv-check-box>
</div>`,
    },
    extended: {
      basic: `<!-- extended-checkbox-basic -->
<div>
  <bntv-extended-check-box
    [label]="'Extended check-box'"
    [description]="'Extended check-box description'"
    [(data)]="checkboxData.extended"
  >
  </bntv-extended-check-box>
</div>`,
      withBgAndIcon: `<!-- extended-checkbox-with-bg-and-icon -->
<div>
  <bntv-extended-check-box
    [label]="'Extended check-box with background color and icon'"
    [description]="'Extended check-box description long sentence to check the ellipsis and show description line clamp as the default max line count is 2'"
    [labelIconConfig]="{ fontSize: '1.2em', name: 'Info-Outline', color: 'var(--grayColor600)'}"
    [bgColor]="'var(--bgColor10)'"
    [(data)]="checkboxData.extendedWithBg"
  >
  </bntv-extended-check-box>
</div>`,
    },
  };

  checkboxData = {
    basicChecked: true,
    basicUnchecked: false,
    withLabel: false,
    primary: true,
    accent: true,
    warn: true,
    disabled: false,
    disabledChecked: true,
    required: false,
    indeterminate: false,
    extended: true,
    extendedWithBg: true,
  };

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    // Initialize with first variant for each section
    this.currentCode['basic'] = this.checkboxCodeSnippets['basic']?.checked || '';
    this.currentCode['themes'] = this.checkboxCodeSnippets['themes']?.primary || '';
    this.currentCode['states'] = this.checkboxCodeSnippets['states']?.disabled || '';
    this.currentCode['indeterminate'] = this.checkboxCodeSnippets['indeterminate']?.indeterminate || '';
    this.currentCode['extended'] = this.checkboxCodeSnippets['extended']?.basic || '';
  }

  onVariantClick(section: string, variant: string): void {
    if (
      this.checkboxCodeSnippets[section] &&
      this.checkboxCodeSnippets[section][variant]
    ) {
      this.currentCode[section] = this.checkboxCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }

  onCheckboxChange(event: any): void {
    // Handle checkbox change
    console.log('Checkbox changed:', event);
  }
}
