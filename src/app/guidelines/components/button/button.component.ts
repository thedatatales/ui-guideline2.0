import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  standalone: false,
  selector: 'pmgt-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  currentCode: { [key: string]: string } = {
    raised: '',
    stroked: '',
    flatStroked: '',
    flat: '',
    secondary: '',
    linkButton: '',
    basic: '',
    icon: '',
    iconStroked: '',
    fab: '',
    miniFab: '',
  };

  buttonCodeSnippets: { [key: string]: { [key: string]: string } } = {
    stroked: {
      primary: `<!-- stroked-primary -->
<div >
  <bntv-mat-button
    [value]="'primary'"
    [theme]="'primary'"
    [isHover]="false"
    [iconName]="'search'"
    [iconLeftAlign]="true"
    (clickButton)="clickButton()"
    [type]="'stroked'"
  >
  </bntv-mat-button>
</div>`,
      iconOnly: `<!-- stroked-icon-only -->
<div >
  <bntv-mat-button
    [value]="''"
    (clickButton)="clickButton()"
    [iconName]="'search'"
    [iconLeftAlign]="true"
    [theme]="'accent'"
    [type]="'stroked'"
  >
  </bntv-mat-button>
</div>`,
      accent: `<!-- stroked-accent -->
<div >
  <bntv-mat-button
    [value]="'accent'"
    [theme]="'accent'"
    [isHover]="false"
    [iconName]="'search'"
    [iconLeftAlign]="true"
    (clickButton)="clickButton()"
    [type]="'stroked'"
  >
  </bntv-mat-button>
</div>`,
      warn: `<!-- stroked-warn -->
<div >
  <bntv-mat-button
    [value]="'warn'"
    [theme]="'warn'"
    [iconName]="'search'"
    [iconLeftAlign]="true"
    [isHover]="false"
    (clickButton)="clickButton()"
    [type]="'stroked'"
  >
  </bntv-mat-button>
</div>`,
      disabled: `<!-- stroked-disabled -->
<div >
  <bntv-mat-button
    [value]="'disabled'"
    [disabled]="true"
    [theme]="'warn'"
    [iconName]="'search'"
    [iconLeftAlign]="true"
    (clickButton)="clickButton()"
    [type]="'stroked'"
  >
  </bntv-mat-button>
</div>`,
    },
    flatStroked: {
      primary: `<!-- flat-stroked-primary -->
<div >
  <bntv-mat-button
    [value]="'primary'"
    [theme]="'primary'"
    [isHover]="false"
    [iconName]="'search'"
    [iconLeftAlign]="true"
    (clickButton)="clickButton()"
    [type]="'flat-stroked'"
  >
  </bntv-mat-button>
</div>`,
      iconOnly: `<!-- flat-stroked-icon-only -->
<div >
  <bntv-mat-button
    [value]="''"
    (clickButton)="clickButton()"
    [iconName]="'search'"
    [iconLeftAlign]="true"
    [theme]="'accent'"
    [type]="'flat-stroked'"
  >
  </bntv-mat-button>
</div>`,
      accent: `<!-- flat-stroked-accent -->
<div >
  <bntv-mat-button
    [value]="'accent'"
    [theme]="'accent'"
    [isHover]="false"
    [iconName]="'search'"
    [iconLeftAlign]="true"
    (clickButton)="clickButton()"
    [type]="'flat-stroked'"
  >
  </bntv-mat-button>
</div>`,
      warn: `<!-- flat-stroked-warn -->
<div >
  <bntv-mat-button
    [value]="'warn'"
    [theme]="'warn'"
    [iconName]="'search'"
    [iconLeftAlign]="true"
    [isHover]="false"
    (clickButton)="clickButton()"
    [type]="'flat-stroked'"
  >
  </bntv-mat-button>
</div>`,
      disabled: `<!-- flat-stroked-disabled -->
<div >
  <bntv-mat-button
    [value]="'disabled'"
    [disabled]="true"
    [theme]="'warn'"
    [iconName]="'search'"
    [iconLeftAlign]="true"
    (clickButton)="clickButton()"
    [type]="'flat-stroked'"
  >
  </bntv-mat-button>
</div>`,
    },
    flat: {
      primary: `<!-- flat-primary -->
<div >
  <bntv-mat-button
    [value]="'primary'"
    [theme]="'primary'"
    [iconName]="'search'"
    [iconLeftAlign]="true"
    (clickButton)="clickButton()"
    [type]="'flat'"
  >
  </bntv-mat-button>
</div>`,
      iconOnly: `<!-- flat-icon-only -->
<div >
  <bntv-mat-button
    [value]="''"
    (clickButton)="clickButton()"
    [iconName]="'search'"
    [iconLeftAlign]="true"
    [theme]="'accent'"
    [type]="'flat'"
  >
  </bntv-mat-button>
</div>`,
      accent: `<!-- flat-accent -->
<div >
  <bntv-mat-button
    [value]="'accent'"
    [iconName]="'search'"
    [iconLeftAlign]="true"
    (clickButton)="clickButton()"
    [type]="'flat'"
  >
  </bntv-mat-button>
</div>`,
      warn: `<!-- flat-warn -->
<div >
  <bntv-mat-button
    [value]="'warn'"
    [theme]="'warn'"
    [iconName]="'search'"
    [iconLeftAlign]="true"
    (clickButton)="clickButton()"
    [type]="'flat'"
  >
  </bntv-mat-button>
</div>`,
      disabled: `<!-- flat-disabled -->
<div >
  <bntv-mat-button
    [value]="'disabled'"
    [disabled]="true"
    [theme]="'warn'"
    [iconName]="'search'"
    [iconLeftAlign]="true"
    (clickButton)="clickButton()"
    [type]="'flat'"
  >
  </bntv-mat-button>
</div>`,
    },
    raised: {
      primary: `<!-- raised-primary -->
<div >
  <bntv-mat-button
    [value]="'primary'"
    [theme]="'primary'"
    [iconName]="'search'"
    [isHover]="false"
    (clickButton)="clickButton()"
    [type]="'raised'"
  >
  </bntv-mat-button>
</div>`,
      iconOnly: `<!-- raised-icon-only -->
<div >
  <bntv-mat-button
    [value]="''"
    (clickButton)="clickButton()"
    [iconName]="'search'"
    [iconLeftAlign]="true"
    [theme]="'accent'"
    [type]="'raised'"
  >
  </bntv-mat-button>
</div>`,
      accent: `<!-- raised-accent -->
<div >
  <bntv-mat-button
    [value]="'accent'"
    [isHover]="false"
    [theme]="'accent'"
    [iconName]="'search'"
    (clickButton)="clickButton()"
    [type]="'raised'"
  >
  </bntv-mat-button>
</div>`,
      warn: `<!-- raised-warn -->
<div >
  <bntv-mat-button
    [value]="'warn'"
    [theme]="'warn'"
    [isHover]="false"
    [iconName]="'search'"
    (clickButton)="clickButton()"
    [type]="'raised'"
  >
  </bntv-mat-button>
</div>`,
      disabled: `<!-- raised-disabled -->
<div >
  <bntv-mat-button
    [value]="'disabled'"
    [disabled]="true"
    [iconName]="'search'"
    [theme]="'warn'"
    (clickButton)="clickButton()"
    [type]="'raised'"
  >
  </bntv-mat-button>
</div>`,
    },
    icon: {
      primary: `<!-- icon-primary -->
<div >
  <bntv-mat-button
    [iconName]="'search'"
    [iconLeftAlign]="true"
    [theme]="'primary'"
    (clickButton)="clickButton()"
    [type]="'icon'"
  >
  </bntv-mat-button>
</div>`,
      accent: `<!-- icon-accent -->
<div >
  <bntv-mat-button
    [iconName]="'search'"
    [iconLeftAlign]="true"
    [theme]="'accent'"
    (clickButton)="clickButton()"
    [type]="'icon'"
  >
  </bntv-mat-button>
</div>`,
      warn: `<!-- icon-warn -->
<div >
  <bntv-mat-button
    [iconName]="'search'"
    [iconLeftAlign]="true"
    [theme]="'warn'"
    (clickButton)="clickButton()"
    [type]="'icon'"
  >
  </bntv-mat-button>
</div>`,
      disabled: `<!-- icon-disabled -->
<div >
  <bntv-mat-button
    [iconName]="'search'"
    [disabled]="true"
    [theme]="'warn'"
    [iconLeftAlign]="true"
    (clickButton)="clickButton()"
    [type]="'icon'"
  >
  </bntv-mat-button>
</div>`,
    },
    iconStroked: {
      primary: `<!-- icon-stroked-primary -->
<div >
  <bntv-mat-button
    [iconName]="'search'"
    [theme]="'primary'"
    (clickButton)="clickButton()"
    [type]="'icon-stroked'"
  >
  </bntv-mat-button>
</div>`,
      accent: `<!-- icon-stroked-accent -->
<div >
  <bntv-mat-button
    [iconName]="'search'"
    [theme]="'accent'"
    (clickButton)="clickButton()"
    [type]="'icon-stroked'"
  >
  </bntv-mat-button>
</div>`,
      warn: `<!-- icon-stroked-warn -->
<div >
  <bntv-mat-button
    [iconName]="'search'"
    [theme]="'warn'"
    (clickButton)="clickButton()"
    [type]="'icon-stroked'"
  >
  </bntv-mat-button>
</div>`,
      disabled: `<!-- icon-stroked-disabled -->
<div >
  <bntv-mat-button
    [iconName]="'search'"
    [disabled]="true"
    [theme]="'warn'"
    (clickButton)="clickButton()"
    [type]="'icon-stroked'"
  >
  </bntv-mat-button>
</div>`,
    },
    miniFab: {
      primary: `<!-- mini-fab-primary -->
<div >
  <bntv-mat-button
    [value]="'primary'"
    [iconName]="'search'"
    [theme]="'primary'"
    (clickButton)="clickButton()"
    [type]="'mini-fab'"
  >
  </bntv-mat-button>
</div>`,
      iconOnly: `<!-- mini-fab-icon-only -->
<div >
  <bntv-mat-button
    [iconName]="'search'"
    [theme]="'accent'"
    (clickButton)="clickButton()"
    [type]="'mini-fab'"
  >
  </bntv-mat-button>
</div>`,
      accent: `<!-- mini-fab-accent -->
<div >
  <bntv-mat-button
    [value]="'accent'"
    [iconName]="'search'"
    [theme]="'accent'"
    (clickButton)="clickButton()"
    [type]="'mini-fab'"
  >
  </bntv-mat-button>
</div>`,
      warn: `<!-- mini-fab-warn -->
<div >
  <bntv-mat-button
    [value]="'warn'"
    [iconName]="'search'"
    [theme]="'warn'"
    (clickButton)="clickButton()"
    [type]="'mini-fab'"
  >
  </bntv-mat-button>
</div>`,
      disabled: `<!-- mini-fab-disabled -->
<div >
  <bntv-mat-button
    [iconName]="'search'"
    [value]="'disabled'"
    [disabled]="true"
    [theme]="'warn'"
    (clickButton)="clickButton()"
    [type]="'mini-fab'"
  >
  </bntv-mat-button>
</div>`,
    },
    fab: {
      primary: `<!-- fab-primary -->
<div >
  <bntv-mat-button
    [iconName]="'search'"
    [theme]="'primary'"
    (clickButton)="clickButton()"
    [type]="'fab'"
  >
  </bntv-mat-button>
</div>`,
      accent: `<!-- fab-accent -->
<div >
  <bntv-mat-button
    [iconName]="'search'"
    [iconLeftAlign]="true"
    [theme]="'accent'"
    (clickButton)="clickButton()"
    [type]="'fab'"
  >
  </bntv-mat-button>
</div>`,
      warn: `<!-- fab-warn -->
<div >
  <bntv-mat-button
    [iconName]="'search'"
    [theme]="'warn'"
    (clickButton)="clickButton()"
    [type]="'fab'"
  >
  </bntv-mat-button>
</div>`,
      disabled: `<!-- fab-disabled -->
<div >
  <bntv-mat-button
    [iconName]="'search'"
    [disabled]="true"
    [theme]="'warn'"
    (clickButton)="clickButton()"
    [type]="'fab'"
  >
  </bntv-mat-button>
</div>`,
    },
    secondary: {
      default: `<!-- secondary-button -->
<bntv-mat-button
  [value]="'Reset'"
  [type]="'secondary'"
  (clickButton)="clickButton()"
>
</bntv-mat-button>`,
      withIcon: `<!-- secondary-button-with-icon -->
<bntv-mat-button
  [value]="'Clear'"
  [type]="'secondary'"
  [iconName]="'Delete-Outline'"
  [iconLeftAlign]="true"
  (clickButton)="clickButton()"
>
</bntv-mat-button>`,
      disabled: `<!-- secondary-disabled -->
<bntv-mat-button
  [value]="'Disabled'"
  [type]="'secondary'"
  [disabled]="true"
  (clickButton)="clickButton()"
>
</bntv-mat-button>`,
    },
    linkButton: {
      default: `<!-- link-button -->
<bntv-mat-button
  [value]="'Learn More'"
  [type]="'link-button'"
  (clickButton)="clickButton()"
>
</bntv-mat-button>`,
      withIconLeft: `<!-- link-button-icon-left -->
<bntv-mat-button
  [value]="'View Details'"
  [type]="'link-button'"
  [iconName]="'Eye-Outline'"
  [iconLeftAlign]="true"
  (clickButton)="clickButton()"
>
</bntv-mat-button>`,
      withIconRight: `<!-- link-button-icon-right -->
<bntv-mat-button
  [value]="'Learn More'"
  [type]="'link-button'"
  [iconName]="'Arrow-Right'"
  [iconRightAlign]="true"
  (clickButton)="clickButton()"
>
</bntv-mat-button>`,
      disabled: `<!-- link-button-disabled -->
<bntv-mat-button
  [value]="'Disabled Link'"
  [type]="'link-button'"
  [disabled]="true"
  (clickButton)="clickButton()"
>
</bntv-mat-button>`,
    },
    basic: {
      primary: `<!-- basic-primary -->
<div >
  <bntv-mat-button
    [value]="'primary'"
    (clickButton)="clickButton()"
    [enableDebounce]="true"
    [theme]="'primary'"
    [type]="'basic'"
    [iconName]="'search'"
    [iconLeftAlign]="true"
  >
  </bntv-mat-button>
</div>`,
      iconOnly: `<!-- basic-icon-only -->
<div >
  <bntv-mat-button
    [value]="''"
    (clickButton)="clickButton()"
    [iconName]="'search'"
    [iconLeftAlign]="true"
    [theme]="'accent'"
    [type]="'basic'"
  >
  </bntv-mat-button>
</div>`,
      accent: `<!-- basic-accent -->
<div >
  <bntv-mat-button
    [value]="'accent'"
    (clickButton)="clickButton()"
    [theme]="'accent'"
    [iconName]="'search'"
    [iconLeftAlign]="true"
    [type]="'basic'"
  >
  </bntv-mat-button>
</div>`,
      warn: `<!-- basic-warn -->
<div >
  <bntv-mat-button
    [value]="'warn'"
    [theme]="'warn'"
    (clickButton)="clickButton()"
    [type]="'basic'"
    [iconName]="'search'"
    [iconLeftAlign]="true"
  >
  </bntv-mat-button>
</div>`,
      disabled: `<!-- basic-disabled -->
<div >
  <bntv-mat-button
    [value]="'disabled'"
    [disabled]="true"
    [theme]="'warn'"
    (clickButton)="clickButton()"
    [type]="'basic'"
    [iconName]="'search'"
    [iconLeftAlign]="true"
  >
  </bntv-mat-button>
</div>`,
    },
  };

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    // Initialize with primary variant for each section
    Object.keys(this.currentCode).forEach((key) => {
      this.currentCode[key] = this.buttonCodeSnippets[key]?.primary || '';
    });
  }

  onVariantClick(section: string, variant: string): void {
    if (
      this.buttonCodeSnippets[section] &&
      this.buttonCodeSnippets[section][variant]
    ) {
      this.currentCode[section] = this.buttonCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }

  clickButton(): void {
    // Handle button click
  }
}
