import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  standalone: false,
  selector: 'pmgt-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent implements OnInit {
  currentCode: { [key: string]: string } = {
    calendarBasic: '',
    calendarRange: '',
    calendarWeek: '',
    calendarMultiple: '',
    timerSingle: '',
    timerRange: '',
    timerMinMax: '',
    bothSingle: '',
    bothRange: '',
    bothWeek: '',
    bothMultiple: '',
    bothMinMax: '',
    monthBasic: '',
    yearBasic: '',
    advanced: '',
  };

  // Calendar picker data
  calendarValue: Date = new Date();
  calendarRange: Date[] = [new Date(), new Date()];
  calendarWeek: Date[] = [new Date(), new Date()];
  calendarMultiple: Date[] = [];
  calendarRangeFrom: Date[] = [new Date(), new Date()];
  calendarRangeTo: Date[] = [new Date(), new Date()];
  calendarDisabled: Date = new Date();

  // Timer picker data
  timerValue: Date = new Date();
  timerRange: Date[] = [new Date(), new Date()];
  timerRangeFrom: Date[] = [new Date(), new Date()];
  timerRangeTo: Date[] = [new Date(), new Date()];

  // Both picker data
  bothValue: Date = new Date();
  bothRange: Date[] = [new Date(), new Date()];
  bothRangeFrom: Date[] = [new Date(), new Date()];
  bothRangeTo: Date[] = [new Date(), new Date()];
  bothWeek: Date[] = [new Date(), new Date()];
  bothMultiple: Date[] = [];
  bothPastDate: Date = new Date();
  bothFormatted: Date = new Date();

  // Month/Year picker data
  monthValue: Date = new Date();
  monthYear: Date = new Date();
  yearValue: Date = new Date();
  yearSingle: Date = new Date();

  // Advanced
  advancedValue: Date = new Date();

  minDate = new Date(2020, 0, 1);
  maxDate = new Date(2030, 11, 31);
  minTime = "06:00:00";
  maxTime = "22:00:00";
  defaultTime = "12:00:00";
  min = new Date(2020, 0, 1);
  max = new Date(2030, 11, 31);

  datePickerCodeSnippets: { [key: string]: { [key: string]: string } } = {
    calendarBasic: {
      simple: `<!-- Simple date picker -->
<bntv-datetime-picker
  [label]="'Simple date picker'"
  [pickerType]="'calendar'"
  [hideActions]="true"
  [showSecondsTimer]="false"
  [(data)]="calendarValue"
>
</bntv-datetime-picker>`,
      disabled: `<!-- Disabled date picker -->
<bntv-datetime-picker
  [label]="'Disabled date picker'"
  [disabled]="true"
  [pickerType]="'calendar'"
  [hideActions]="true"
  [showSecondsTimer]="false"
  [(data)]="calendarDisabled"
>
</bntv-datetime-picker>`,
      leftPosition: `<!-- Date picker left position -->
<bntv-datetime-picker
  [label]="'Date picker left position'"
  [pickerPosition]="'left'"
  [pickerType]="'calendar'"
  [hideActions]="true"
  [showSecondsTimer]="false"
  [(data)]="calendarValue"
>
</bntv-datetime-picker>`,
    },
    calendarRange: {
      range: `<!-- Range date picker -->
<bntv-datetime-picker
  [label]="'Range date picker'"
  [pickerType]="'calendar'"
  [selectMode]="'range'"
  [rangeSeparator]="'~'"
  [setMaxZeroHour]="false"
  [min]="minDate"
  [max]="maxDate"
  [(data)]="calendarRange"
>
</bntv-datetime-picker>`,
      monthRange: `<!-- Month range picker -->
<bntv-datetime-picker
  [label]="'Month range picker'"
  [readonly]="false"
  [required]="true"
  [(data)]="calendarRange"
  [pickerType]="'calendar'"
  [selectMode]="'range'"
></bntv-datetime-picker>`,
      rangeFrom: `<!-- Calendar rangeFrom -->
<bntv-datetime-picker
  [label]="'Calendar rangeFrom'"
  [readonly]="false"
  [required]="true"
  [pickerType]="'calendar'"
  [selectMode]="'rangeFrom'"
  [(data)]="calendarRangeFrom"
></bntv-datetime-picker>`,
      rangeTo: `<!-- Calendar rangeTo -->
<bntv-datetime-picker
  [label]="'Calendar rangeTo'"
  [readonly]="false"
  [required]="true"
  [pickerType]="'calendar'"
  [selectMode]="'rangeTo'"
  [(data)]="calendarRangeTo"
></bntv-datetime-picker>`,
    },
    calendarWeek: {
      week: `<!-- Week picker -->
<bntv-datetime-picker
  [label]="'Week picker'"
  [readonly]="false"
  [required]="true"
  [selectMode]="'week'"
  [pickerType]="'calendar'"
  [(data)]="calendarWeek"
></bntv-datetime-picker>`,
      calendarWeek: `<!-- Calendar week -->
<bntv-datetime-picker
  [label]="'Calendar week'"
  [readonly]="false"
  [required]="true"
  [pickerType]="'calendar'"
  [selectMode]="'week'"
  [(data)]="calendarWeek"
></bntv-datetime-picker>`,
    },
    calendarMultiple: {
      multiple: `<!-- Select multiple date -->
<bntv-datetime-picker
  [label]="'Select multiple date'"
  [readonly]="false"
  [required]="true"
  [pickerType]="'calendar'"
  [selectMode]="'multiple'"
  [(data)]="calendarMultiple"
></bntv-datetime-picker>`,
    },
    timerSingle: {
      single: `<!-- Timer single -->
<bntv-datetime-picker
  [label]="'Timer single'"
  [readonly]="false"
  [required]="true"
  [hour12Timer]="true"
  [showSecondsTimer]="false"
  [pickerType]="'timer'"
  [(data)]="timerValue"
></bntv-datetime-picker>`,
      timePicker: `<!-- Time picker -->
<bntv-datetime-picker
  [label]="'Time picker'"
  [pickerType]="'timer'"
  [showSecondsTimer]="false"
  [(data)]="timerValue"
>
</bntv-datetime-picker>`,
    },
    timerRange: {
      range: `<!-- Timer range -->
<bntv-datetime-picker
  [label]="'Timer range'"
  [readonly]="false"
  [required]="true"
  [hour12Timer]="true"
  [pickerType]="'timer'"
  [selectMode]="'range'"
  [(data)]="timerRange"
></bntv-datetime-picker>`,
      rangeFrom: `<!-- Timer rangeFrom -->
<bntv-datetime-picker
  [label]="'Timer rangeFrom'"
  [readonly]="false"
  [required]="true"
  [hour12Timer]="true"
  [pickerType]="'timer'"
  [selectMode]="'rangeFrom'"
  [(data)]="timerRangeFrom"
></bntv-datetime-picker>`,
      rangeTo: `<!-- Timer rangeTo -->
<bntv-datetime-picker
  [label]="'Timer rangeTo'"
  [readonly]="false"
  [required]="true"
  [hour12Timer]="true"
  [pickerType]="'timer'"
  [selectMode]="'rangeTo'"
  [(data)]="timerRangeTo"
></bntv-datetime-picker>`,
    },
    timerMinMax: {
      minMax: `<!-- Time with minTime maxTime -->
<bntv-datetime-picker
  [label]="'Time with minTime maxTime'"
  [pickerType]="'timer'"
  [minTime]="minTime"
  [maxTime]="maxTime"
  [(data)]="timerValue"
>
</bntv-datetime-picker>`,
      minMaxError: `<!-- Time with minTime maxTime with error message -->
<bntv-datetime-picker
  [label]="'Time with minTime maxTime with error message'"
  [pickerType]="'timer'"
  [minTime]="minTime"
  [maxTime]="maxTime"
  [minTimeErrorMsg]="'Invalid minTime'"
  [maxTimeErrorMsg]="'Invalid maxTime'"
  [(data)]="timerValue"
>
</bntv-datetime-picker>`,
    },
    bothSingle: {
      pastDate: `<!-- Select past date with time -->
<bntv-datetime-picker
  [label]="'Select past date with time'"
  [readonly]="false"
  [required]="true"
  [pickerType]="'both'"
  [min]="min"
  [max]="max"
  [(data)]="bothPastDate"
></bntv-datetime-picker>`,
      formatted: `<!-- Select Date & Time (DD-MMM-YYYY hh:mm AM/PM) -->
<bntv-datetime-picker
  [label]="'Select Date & Time (DD-MMM-YYYY hh:mm AM/PM)'"
  [required]="true"
  [showSecondsTimer]="false"
  [hour12Timer]="true"
  [multiYearView]="true"
  [selectMode]="'single'"
  [pickerType]="'both'"
  [timeFormat]="'hh:mm A'"
  [(data)]="bothFormatted"
>
</bntv-datetime-picker>`,
      single: `<!-- Picker type both and selectMode single -->
<bntv-datetime-picker
  [label]="'Picker type both and selectMode single'"
  [readonly]="false"
  [required]="true"
  [hideHeaderDate]="true"
  [hour12Timer]="true"
  [pickerType]="'both'"
  [selectMode]="'single'"
  [(data)]="bothValue"
></bntv-datetime-picker>`,
    },
    bothRange: {
      range: `<!-- PickerType both & selectMode range -->
<bntv-datetime-picker
  [label]="'PickerType both & selectMode range'"
  [readonly]="false"
  [required]="true"
  [hour12Timer]="true"
  [pickerType]="'both'"
  [selectMode]="'range'"
  [(data)]="bothRange"
></bntv-datetime-picker>`,
      rangeFrom: `<!-- PickerType both & selectMode rangeFrom -->
<bntv-datetime-picker
  [label]="'PickerType both & selectMode rangeFrom'"
  [readonly]="false"
  [required]="true"
  [hour12Timer]="true"
  [pickerType]="'both'"
  [selectMode]="'rangeFrom'"
  [(data)]="bothRangeFrom"
></bntv-datetime-picker>`,
      rangeTo: `<!-- Date & Time (From-To) pickerType both & selectMode rangeTo -->
<bntv-datetime-picker
  [label]="'Date & Time (From-To) pickerType both & selectMode rangeTo'"
  [readonly]="false"
  [required]="true"
  [hour12Timer]="true"
  [pickerType]="'both'"
  [selectMode]="'rangeTo'"
  [(data)]="bothRangeTo"
></bntv-datetime-picker>`,
    },
    bothWeek: {
      week: `<!-- Select Week & Time Range, picker type both & selectMode week -->
<bntv-datetime-picker
  [label]="'Select Week & Time Range, picker type both & selectMode week'"
  [readonly]="false"
  [required]="true"
  [hour12Timer]="true"
  [pickerType]="'both'"
  [selectMode]="'week'"
  [(data)]="bothWeek"
></bntv-datetime-picker>`,
    },
    bothMultiple: {
      multiple: `<!-- Select multiple dates, both multiple -->
<bntv-datetime-picker
  [label]="'Select multiple dates, both multiple'"
  [readonly]="false"
  [required]="true"
  [hour12Timer]="true"
  [pickerType]="'both'"
  [selectMode]="'multiple'"
  [(data)]="bothMultiple"
></bntv-datetime-picker>`,
    },
    bothMinMax: {
      minMaxTime: `<!-- Date time picker with minTime maxTime -->
<bntv-datetime-picker
  [label]="'Date time picker with minTime maxTime'"
  [pickerType]="'both'"
  [minTime]="minTime"
  [maxTime]="maxTime"
  [(data)]="bothValue"
>
</bntv-datetime-picker>`,
      minMaxTimeError: `<!-- Date time picker with minTime maxTime with error message -->
<bntv-datetime-picker
  [label]="'Date time picker with minTime maxTime with error message'"
  [pickerType]="'both'"
  [minTime]="minTime"
  [maxTime]="maxTime"
  [minTimeErrorMsg]="'Invalid minTime'"
  [maxTimeErrorMsg]="'Invalid maxTime'"
  [(data)]="bothValue"
>
</bntv-datetime-picker>`,
      minMaxDate: `<!-- Date time picker with minDate maxDate -->
<bntv-datetime-picker
  [label]="'Date time picker with minDate maxDate'"
  [pickerType]="'both'"
  [min]="minDate"
  [max]="maxDate"
  [(data)]="bothValue"
>
</bntv-datetime-picker>`,
      minMaxDateDefaultTime: `<!-- Date time picker with minDate maxDate with defaultTime -->
<bntv-datetime-picker
  [label]="'Date time picker with minDate maxDate with defaultTime'"
  [pickerType]="'both'"
  [minTime]="defaultTime"
  [min]="minDate"
  [max]="maxDate"
  [(data)]="bothValue"
>
</bntv-datetime-picker>`,
    },
    monthBasic: {
      month: `<!-- Month Picker -->
<bntv-datetime-picker
  [label]="'Month Picker'"
  [readonly]="false"
  [required]="true"
  [pickerType]="'month-calendar'"
  [(data)]="monthValue"
></bntv-datetime-picker>`,
      monthYear: `<!-- Select month & year -->
<bntv-datetime-picker
  [label]="'Select month & year'"
  [readonly]="false"
  [required]="true"
  [pickerType]="'month-calendar'"
  [selectMode]="'single'"
  [(data)]="monthYear"
></bntv-datetime-picker>`,
    },
    yearBasic: {
      year: `<!-- Year picker -->
<bntv-datetime-picker
  [label]="'Year picker'"
  [readonly]="false"
  [required]="true"
  [pickerType]="'year-calendar'"
  [(data)]="yearValue"
></bntv-datetime-picker>`,
      yearSingle: `<!-- Year-calendar single -->
<bntv-datetime-picker
  [label]="'Year-calendar single'"
  [readonly]="false"
  [required]="true"
  [pickerType]="'year-calendar'"
  [selectMode]="'single'"
  [(data)]="yearSingle"
></bntv-datetime-picker>`,
    },
    advanced: {
      advanced: `<!-- Advance -->
<bntv-datetime-picker
  [label]="'Advance'"
  [readonly]="false"
  [required]="true"
  [advancedCalendar]="true"
  [hour12Timer]="true"
  [(data)]="advancedValue"
></bntv-datetime-picker>`,
    },
  };

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    this.currentCode['calendarBasic'] = this.datePickerCodeSnippets['calendarBasic']?.simple || '';
    this.currentCode['calendarRange'] = this.datePickerCodeSnippets['calendarRange']?.range || '';
    this.currentCode['calendarWeek'] = this.datePickerCodeSnippets['calendarWeek']?.week || '';
    this.currentCode['calendarMultiple'] = this.datePickerCodeSnippets['calendarMultiple']?.multiple || '';
    this.currentCode['timerSingle'] = this.datePickerCodeSnippets['timerSingle']?.single || '';
    this.currentCode['timerRange'] = this.datePickerCodeSnippets['timerRange']?.range || '';
    this.currentCode['timerMinMax'] = this.datePickerCodeSnippets['timerMinMax']?.minMax || '';
    this.currentCode['bothSingle'] = this.datePickerCodeSnippets['bothSingle']?.single || '';
    this.currentCode['bothRange'] = this.datePickerCodeSnippets['bothRange']?.range || '';
    this.currentCode['bothWeek'] = this.datePickerCodeSnippets['bothWeek']?.week || '';
    this.currentCode['bothMultiple'] = this.datePickerCodeSnippets['bothMultiple']?.multiple || '';
    this.currentCode['bothMinMax'] = this.datePickerCodeSnippets['bothMinMax']?.minMaxTime || '';
    this.currentCode['monthBasic'] = this.datePickerCodeSnippets['monthBasic']?.month || '';
    this.currentCode['yearBasic'] = this.datePickerCodeSnippets['yearBasic']?.year || '';
    this.currentCode['advanced'] = this.datePickerCodeSnippets['advanced']?.advanced || '';
  }

  onVariantClick(section: string, variant: string): void {
    if (
      this.datePickerCodeSnippets[section] &&
      this.datePickerCodeSnippets[section][variant]
    ) {
      this.currentCode[section] = this.datePickerCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }

  onDateChange(date: Date | Date[] | null): void {
    console.log('Date changed:', date);
  }
}
