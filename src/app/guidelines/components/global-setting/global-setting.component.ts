import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { GenericModalService } from '@enttribe/core/tools/generic-modal';
import { GlobalSettingComponent } from '@enttribe/core/global-setting';

@Component({
  standalone: false,
  selector: 'pmgt-global-setting',
  templateUrl: './global-setting.component.html',
  styleUrls: ['./global-setting.component.scss'],
})
export class GlobalSettingGuidelineComponent implements OnInit {
  currentCode: { [key: string]: string } = {
    basic: '',
    withDefaultModule: '',
  };

  globalSettingCodeSnippets: { [key: string]: { [key: string]: string } } = {
    basic: {
      default: `<!-- Open Global Settings Dialog -->
<bntv-mat-button
  [value]="'Open Global Settings'"
  (clickButton)="openGlobalSettings()"
  [theme]="'primary'"
  [type]="'basic'"
>
</bntv-mat-button>

<!-- In Component TypeScript -->
import { GenericModalService } from '@enttribe/core/tools/generic-modal';
import { GlobalSettingComponent } from '@enttribe/core/global-setting';

constructor(private modal: GenericModalService) {}

openGlobalSettings() {
  const dialogRef = this.modal.openDialog(GlobalSettingComponent, {
    data: {
      isDefaultModuleVisible: false
    },
    width: '44.26em',
    height: '31.57em',
  });
  dialogRef.afterClosed().subscribe(() => {});
}`,
    },
    withDefaultModule: {
      default: `<!-- Open Global Settings with Default Module Visible -->
<bntv-mat-button
  [value]="'Open Global Settings'"
  (clickButton)="openGlobalSettings()"
  [theme]="'primary'"
  [type]="'basic'"
>
</bntv-mat-button>

<!-- In Component TypeScript -->
openGlobalSettings() {
  const dialogRef = this.modal.openDialog(GlobalSettingComponent, {
    data: {
      isDefaultModuleVisible: true
    },
    width: '44.26em',
    height: '31.57em',
  });
  dialogRef.afterClosed().subscribe(() => {});
}`,
    },
  };

  constructor(
    private clipboard: Clipboard,
    public modal: GenericModalService
  ) {}

  ngOnInit(): void {
    Object.keys(this.currentCode).forEach((key) => {
      this.currentCode[key] = this.globalSettingCodeSnippets[key]?.default || '';
    });
  }

  openGlobalSettings(showDefaultModule: boolean = false): void {
    const dialogRef = this.modal.openDialog(GlobalSettingComponent, {
      data: {
        isDefaultModuleVisible: showDefaultModule,
      },
      width: '44.26em',
      height: '31.57em',
    });
    dialogRef.afterClosed().subscribe(() => {});
  }

  onVariantClick(section: string, variant: string): void {
    if (
      this.globalSettingCodeSnippets[section] &&
      this.globalSettingCodeSnippets[section][variant]
    ) {
      this.currentCode[section] =
        this.globalSettingCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }
}
