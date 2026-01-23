import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  standalone: false,
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  sliderValue = 50;
  sliderValue2 = 30;
  sliderValue3 = 75;
  sliderValue4 = 25;
  sliderValue5 = 50;
  sliderValue6 = 50;
  sliderValue7 = 50;
  sliderValue8 = 50;
  sliderValue9 = 50;
  rangeMinValue = 20;
  rangeMaxValue = 50;
  rangeMinValueDisabled = 20;
  rangeMaxValueDisabled = 50;

  currentCode: { [key: string]: string } = {
    basic: '',
    disabled: '',
    withInput: '',
    withInputDisabled: '',
    matType: '',
    matTypeDisabled: '',
    opacityType: '',
    opacityTypeDisabled: '',
    rangeSlider: '',
    rangeSliderDisabled: '',
    customRange: '',
  };

  sliderCodeSnippets: { [key: string]: { [key: string]: string } } = {
    basic: {
      default: `<!-- Basic Slider -->
<bntv-slider
  [min]="1"
  [max]="100"
  [label]="'Slider (default)'"
  [(value)]="sliderValue"
  (valueChange)="onValueChange($event)"
  [showCountBox]="false"
  [type]="'default'"
  [showMinMaxValues]="true"
></bntv-slider>`,
    },
    disabled: {
      default: `<!-- Disabled Slider -->
<bntv-slider
  [label]="'Slider Disabled (default)'"
  [min]="1"
  [max]="100"
  [showThumbLabelAlways]="true"
  [(value)]="sliderValue2"
  [disabled]="true"
  (valueChange)="onValueChange($event)"
  [showCountBox]="false"
  [boxPosition]="'topRight'"
  [type]="'default'"
  [showMinMaxValues]="true"
></bntv-slider>`,
    },
    withInput: {
      default: `<!-- Slider with Input Box -->
<bntv-slider
  [label]="'Slider with input (default)'"
  [max]="100"
  [showCountBox]="true"
  [boxPosition]="'topLeft'"
  [min]="0"
  [thumbLabel]="true"
  [(value)]="sliderValue3"
  [step]="1"
  [type]="'default'"
  [tickInterval]="1"
></bntv-slider>`,
    },
    withInputDisabled: {
      default: `<!-- Slider with Input Disabled -->
<bntv-slider
  [label]="'Slider with input disabled (default)'"
  [max]="100"
  [disabled]="true"
  [showCountBox]="true"
  [boxPosition]="'topLeft'"
  [min]="0"
  [thumbLabel]="true"
  [(value)]="sliderValue5"
  [step]="1"
  [type]="'default'"
  [tickInterval]="1"
></bntv-slider>`,
    },
    matType: {
      default: `<!-- Material Type Slider -->
<bntv-slider
  [min]="1"
  [max]="100"
  [(value)]="sliderValue6"
  (valueChange)="onValueChange($event)"
  [showCountBox]="false"
  [type]="'mat'"
  [showMinMaxValues]="true"
></bntv-slider>`,
    },
    matTypeDisabled: {
      default: `<!-- Material Type Slider Disabled -->
<bntv-slider
  [min]="1"
  [max]="100"
  [showThumbLabelAlways]="true"
  [(value)]="sliderValue7"
  [disabled]="true"
  (valueChange)="onValueChange($event)"
  [showCountBox]="false"
  [boxPosition]="'topRight'"
  [type]="'mat'"
  [showMinMaxValues]="true"
></bntv-slider>`,
    },
    opacityType: {
      default: `<!-- Opacity Slider Type -->
<bntv-slider
  [min]="1"
  [max]="100"
  [(value)]="sliderValue8"
  (valueChange)="onValueChange($event)"
  [showCountBox]="false"
  [type]="'opacitySlider'"
  [showMinMaxValues]="true"
></bntv-slider>`,
    },
    opacityTypeDisabled: {
      default: `<!-- Opacity Slider Type Disabled -->
<bntv-slider
  [min]="1"
  [max]="100"
  [showThumbLabelAlways]="true"
  [(value)]="sliderValue9"
  [disabled]="true"
  (valueChange)="onValueChange($event)"
  [showCountBox]="false"
  [boxPosition]="'topRight'"
  [type]="'opacitySlider'"
  [showMinMaxValues]="true"
></bntv-slider>`,
    },
    rangeSlider: {
      default: `<!-- Range Slider -->
<bntv-range-slider-core
  [minValue]="20"
  [maxValue]="50"
  [step]="1"
  [topLabelBgColor]="'var(--accentColor500)'"
  [thumbTextColor]="'white'"
  [showFloatingThumb]="true"
  [showThumbLabelAlways]="false"
  (changeSlider)="onRangeChange($event)"
></bntv-range-slider-core>`,
    },
    rangeSliderDisabled: {
      default: `<!-- Range Slider Disabled -->
<bntv-range-slider-core
  [minValue]="20"
  [disabled]="true"
  [maxValue]="50"
  [step]="1"
  [showFloatingThumb]="true"
  [showThumbLabelAlways]="true"
  (changeSlider)="onRangeChange($event)"
></bntv-range-slider-core>`,
    },
    customRange: {
      default: `<!-- Custom Range Slider -->
<bntv-slider
  [label]="'Custom Range'"
  [min]="10"
  [max]="200"
  [step]="5"
  [(value)]="sliderValue"
  [thumbLabel]="true"
  [tickInterval]="10"
></bntv-slider>`,
    },
  };

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    this.currentCode['basic'] = this.sliderCodeSnippets['basic']?.default || '';
    this.currentCode['disabled'] = this.sliderCodeSnippets['disabled']?.default || '';
    this.currentCode['withInput'] = this.sliderCodeSnippets['withInput']?.default || '';
    this.currentCode['withInputDisabled'] = this.sliderCodeSnippets['withInputDisabled']?.default || '';
    this.currentCode['matType'] = this.sliderCodeSnippets['matType']?.default || '';
    this.currentCode['matTypeDisabled'] = this.sliderCodeSnippets['matTypeDisabled']?.default || '';
    this.currentCode['opacityType'] = this.sliderCodeSnippets['opacityType']?.default || '';
    this.currentCode['opacityTypeDisabled'] = this.sliderCodeSnippets['opacityTypeDisabled']?.default || '';
    this.currentCode['rangeSlider'] = this.sliderCodeSnippets['rangeSlider']?.default || '';
    this.currentCode['rangeSliderDisabled'] = this.sliderCodeSnippets['rangeSliderDisabled']?.default || '';
    this.currentCode['customRange'] = this.sliderCodeSnippets['customRange']?.default || '';
  }

  onVariantClick(section: string, variant: string = 'default'): void {
    if (this.sliderCodeSnippets[section] && this.sliderCodeSnippets[section][variant]) {
      this.currentCode[section] = this.sliderCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }

  onValueChange(value: any): void {
    console.log('Slider value changed:', value);
  }

  onRangeChange(event: any): void {
    console.log('Range slider changed:', event);
    if (event) {
      this.rangeMinValue = event.minValue;
      this.rangeMaxValue = event.maxValue;
    }
  }
}
