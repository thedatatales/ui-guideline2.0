import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  standalone: false,
  selector: 'pmgt-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  currentCode: { [key: string]: string } = {
    basic: '',
    withIcons: '',
    custom: '',
  };

  historyList = [
    {
      eventDate: new Date('2024-01-15T10:30:00'),
      topLeft: 'User Action',
      topRight: 'John Doe',
      bottomLeft: 'Created',
      bottomRight: 'New record created',
    },
    {
      eventDate: new Date('2024-01-14T14:20:00'),
      topLeft: 'System Event',
      topRight: 'System',
      bottomLeft: 'Updated',
      bottomRight: 'Record updated successfully',
    },
    {
      eventDate: new Date('2024-01-13T09:15:00'),
      topLeft: 'User Action',
      topRight: 'Jane Smith',
      bottomLeft: 'Deleted',
      bottomRight: 'Record deleted',
    },
  ];

  historyConfig = {
    suppressAction: false,
    suppressMessage: false,
    suppressLeftKey: false,
    suppressRightAction: true,
    leftConfig: {
      type: 'date',
      dateTimeFormat: 'MM/dd/yyyy HH:mm',
      key: '$eventDate',
      timeFormat: 'HH:mm',
    },
    rightConfig: {
      actionConfig: {
        key: '$topLeft: $topRight',
      },
      messageConfig: {
        key: '$bottomLeft: $bottomRight',
      },
    },
  };

  timelineCodeSnippets: { [key: string]: { [key: string]: string } } = {
    basic: {
      default: `<!-- Basic Timeline -->
<bntv-history
  [historyList]="historyList"
  [config]="historyConfig"
  [iconTimeline]="false"
>
</bntv-history>`,
    },
    withIcons: {
      default: `<!-- Timeline with Icons -->
<bntv-history
  [historyList]="historyList"
  [config]="historyConfig"
  [iconTimeline]="true"
>
</bntv-history>`,
    },
    custom: {
      default: `<!-- Custom Timeline Configuration -->
<bntv-history
  [historyList]="historyList"
  [config]="customHistoryConfig"
  [iconTimeline]="true"
  [isGrouping]="true"
  [height]="'500px'"
>
</bntv-history>`,
    },
  };

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    Object.keys(this.currentCode).forEach((key) => {
      this.currentCode[key] = this.timelineCodeSnippets[key]?.default || '';
    });
  }

  onVariantClick(section: string, variant: string): void {
    if (
      this.timelineCodeSnippets[section] &&
      this.timelineCodeSnippets[section][variant]
    ) {
      this.currentCode[section] =
        this.timelineCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }
}
