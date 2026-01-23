import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { IHistoryConfig } from '@enttribe/core/tools/history';

@Component({
  standalone: false,
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  @ViewChild('historyLeftContentTemplate') historyLeftContentTemplate: TemplateRef<any>;
  @ViewChild('historyRightTemplateRef') historyRightTemplateRef: TemplateRef<any>;

  basicHistoryList = [
    {
      createdTime: 1597070734378,
      data: {
        actionName: 'Created',
        message: 'Mayumi Kubo Created Ticket',
      },
    },
    {
      createdTime: 1597070734378,
      data: {
        actionName: 'Acquire',
        message: 'Noriitsu Mitsuyama Opened the Ticket',
      },
    },
    {
      createdTime: 1597070734378,
      data: {
        actionName: 'Comment Added',
        message: 'Noriitsu Mitsuyama Commented',
      },
    },
    {
      createdTime: 1597070734378,
      data: {
        actionName: 'Resolved',
        message: 'Ticket has been resolved successfully',
      },
    },
  ];

  iconHistoryList = [
    {
      createdTime: 1597070734378,
      leftIcon: 'Calendar-outline',
      data: {
        actionName: 'Resolved',
        message: 'Ticket resolved successfully',
      },
      icon: 'check-bold',
      borderColor: 'var(--accentColor500)',
    },
    {
      createdTime: 1597070734378,
      leftIcon: 'Calendar-outline',
      data: {
        actionName: 'Comment Added',
        message: 'Noriitsu Mitsuyama Commented',
      },
      icon: 'arrow-u-up-right-bold',
      borderColor: 'var(--accentColor500)',
    },
    {
      createdTime: 1597070734378,
      leftIcon: 'Calendar-outline',
      data: {
        actionName: 'Created',
        message: 'Mayumi Kubo Created Ticket',
      },
      icon: 'Performance_Anomaly-candidate',
      borderColor: 'var(--accentColor500)',
    },
  ];

  groupedHistoryList = [
    {
      createdTime: 1597070734378,
      data: {
        actionName: 'Created',
        message: 'Mayumi Kubo Created Ticket',
      },
    },
    {
      createdTime: 1597070734378,
      data: {
        actionName: 'Acquire',
        message: 'Noriitsu Mitsuyama Opened the Ticket',
      },
    },
    {
      createdTime: 1597070734378,
      data: {
        actionName: 'Comment Added',
        message: 'Noriitsu Mitsuyama Commented',
      },
    },
  ];

  basicConfig: IHistoryConfig = {
    suppressAction: true,
    suppressMessage: false,
    suppressLeftKey: false,
    leftConfig: {
      type: 'date',
      dateTimeFormat: 'YYYY/MM/DD, HH:mm:ss',
      key: '$createdTime',
    },
    rightConfig: {
      actionConfig: {
        key: '$data.actionName',
      },
      messageConfig: {
        key: '$data.message',
      },
    },
  };

  iconConfig: IHistoryConfig = {
    suppressAction: true,
    suppressMessage: false,
    suppressLeftKey: false,
    leftConfig: {
      type: 'date',
      dateTimeFormat: 'YYYY/MM/DD, HH:mm:ss',
      key: '$createdTime',
    },
    rightConfig: {
      actionConfig: {
        key: '$data.actionName',
      },
      messageConfig: {
        key: '$data.message',
      },
    },
  };

  currentCode: { [key: string]: string } = {
    basic: '',
    icons: '',
    grouped: '',
  };

  historyCodeSnippets: { [key: string]: { [key: string]: string } } = {
    basic: {
      default: `<!-- Basic History -->
<bntv-history
  [historyList]="historyList"
  [config]="config"
></bntv-history>

<!-- Config -->
config: IHistoryConfig = {
  suppressAction: true,
  suppressMessage: false,
  suppressLeftKey: false,
  leftConfig: {
    type: 'date',
    dateTimeFormat: 'YYYY/MM/DD, HH:mm:ss',
    key: '$createdTime',
  },
  rightConfig: {
    actionConfig: {
      key: '$data.actionName',
    },
    messageConfig: {
      key: '$data.message',
    },
  },
};`,
    },
    icons: {
      default: `<!-- History with Icons -->
<bntv-history
  [historyList]="historyList"
  [config]="config"
  [iconTimeline]="true"
  [templateRef]="historyRightTemplateRef"
  [historyLeftContentTemplate]="historyLeftContentTemplate"
></bntv-history>

<ng-template #historyLeftContentTemplate let-optionRef="optionRef">
  <div fxLayout="row" fxLayoutAlign="start center" fxLayoutGap="8px">
    <bntv-icon
      [iconName]="optionRef?.leftIcon"
      [fontSet]="'icomoon'"
      [type]="'fontset'"
    ></bntv-icon>
    <span>{{ optionRef?.createdTime | date:'MM/dd/yyyy HH:mm:ss' }}</span>
  </div>
</ng-template>

<ng-template #historyRightTemplateRef let-history="optionRef">
  <span>Action: {{ history.data.actionName }}</span>
  <span>Message: {{ history.data.message }}</span>
</ng-template>`,
    },
    grouped: {
      default: `<!-- Grouped History -->
<bntv-history
  [historyList]="historyList"
  [config]="config"
  [isGrouping]="true"
></bntv-history>`,
    },
  };

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    Object.keys(this.currentCode).forEach((key) => {
      this.currentCode[key] = this.historyCodeSnippets[key]?.default || '';
    });
  }

  onVariantClick(section: string, variant: string = 'default'): void {
    if (this.historyCodeSnippets[section] && this.historyCodeSnippets[section][variant]) {
      this.currentCode[section] = this.historyCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }
}
