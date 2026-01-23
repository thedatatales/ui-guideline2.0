import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  standalone: false,
  selector: 'pmgt-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarGuidelineComponent implements OnInit {
  currentCode: { [key: string]: string } = {
    basic: '',
    withSidebar: '',
    customTemplates: '',
  };

  calendarConfig: any = {
    suppressSideView: false,
    sideConfigs: {
      sideDirection: 'left',
      suppressSideCalendarTemplate: false,
      suppressMiniCalendar: false,
    },
    headerConfigs: {
      suppressCalendarTitle: false,
      suppressTodayButton: false,
      suppressAutoRefresh: false,
      suppresstToggleButton: false,
      suppressHeader: false,
    },
    calendarOptions: {
      suppressEventCreation: false,
      suppressEventView: false,
    },
    componentOptions: {
      defaultView: 'month',
      defaultDate: new Date().toISOString(),
    },
  };

  calendarCodeSnippets: { [key: string]: { [key: string]: string } } = {
    basic: {
      default: `<!-- Basic Calendar -->
<bntv-calendar
  [calendarConfig]="calendarConfig"
>
</bntv-calendar>`,
    },
    withSidebar: {
      default: `<!-- Calendar with Sidebar -->
<bntv-calendar
  [calendarConfig]="calendarConfig"
  [calendarSideTemplate]="sideTemplate"
  [syncCalendars]="true"
>
</bntv-calendar>`,
    },
    customTemplates: {
      default: `<!-- Calendar with Custom Templates -->
<bntv-calendar
  [calendarConfig]="calendarConfig"
  [customHeaderTemplate]="headerTemplate"
  [addEventTemplate]="addEventTemplate"
  [viewEventTemplate]="viewEventTemplate"
  [eventTemplate]="eventTemplate"
>
</bntv-calendar>`,
    },
  };

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    Object.keys(this.currentCode).forEach((key) => {
      this.currentCode[key] = this.calendarCodeSnippets[key]?.default || '';
    });
  }

  onVariantClick(section: string, variant: string): void {
    if (
      this.calendarCodeSnippets[section] &&
      this.calendarCodeSnippets[section][variant]
    ) {
      this.currentCode[section] =
        this.calendarCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }
}
