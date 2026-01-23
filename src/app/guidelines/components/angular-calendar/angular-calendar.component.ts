import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { startOfDay } from '@fullcalendar/core/internal';
import { CalendarEvent, CalendarView } from 'angular-calendar';

@Component({
  standalone: false,
  selector: 'pmgt-angular-calendar',
  templateUrl: './angular-calendar.component.html',
  styleUrls: ['./angular-calendar.component.scss'],
})
export class AngularCalendarComponent implements OnInit {
  currentCode: { [key: string]: string } = {
    month: '',
    week: '',
    day: '',
  };

  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;

  events: CalendarEvent[] = [
    {
      start: startOfDay(new Date()),
      title: 'First event',
    },
    {
      start: startOfDay(new Date()),
      title: 'Second event',
    },
    {
      start: startOfDay(new Date(new Date().setDate(new Date().getDate() + 1))),
      title: 'Future event',
    },
  ];

  angularCalendarCodeSnippets: { [key: string]: { [key: string]: string } } = {
    month: {
      default: `<!-- Month View -->
<mwl-calendar-month-view
  [viewDate]="viewDate"
  [events]="events"
>
</mwl-calendar-month-view>`,
    },
    week: {
      default: `<!-- Week View -->
<mwl-calendar-week-view
  [viewDate]="viewDate"
  [events]="events"
  [hourSegments]="4"
>
</mwl-calendar-week-view>`,
    },
    day: {
      default: `<!-- Day View -->
<mwl-calendar-day-view
  [viewDate]="viewDate"
  [events]="events"
  [hourSegments]="4"
>
</mwl-calendar-day-view>`,
    },
  };

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    Object.keys(this.currentCode).forEach((key) => {
      this.currentCode[key] = this.angularCalendarCodeSnippets[key]?.default || '';
    });
  }

  onVariantClick(section: string, variant: string): void {
    if (
      this.angularCalendarCodeSnippets[section] &&
      this.angularCalendarCodeSnippets[section][variant]
    ) {
      this.currentCode[section] =
        this.angularCalendarCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }

  setView(view: CalendarView): void {
    this.view = view;
  }
}
