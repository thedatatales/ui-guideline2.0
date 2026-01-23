import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

interface ColorSwatch {
  name: string;
  value: string;
  variableName?: string;
  contrast?: string;
}

interface ColorPalette {
  name: string;
  colors: {
    primary: ColorSwatch[];
    accent: ColorSwatch[];
    warn: ColorSwatch[];
    gray: ColorSwatch[];
  };
}

@Component({
  standalone: false,
  selector: 'app-color-palette',
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.scss'],
})
export class ColorPaletteComponent implements OnInit {
  indigoTheme: ColorPalette = {
    name: 'Indigo',
    colors: {
      primary: [
        { name: '50', value: '#e6e6ef', variableName: '--primaryColor50', contrast: '#000000' },
        { name: '100', value: '#c2c0d7', variableName: '--primaryColor100', contrast: '#000000' },
        { name: '200', value: '#9997bc', variableName: '--primaryColor200', contrast: '#000000' },
        { name: '300', value: '#706da1', variableName: '--primaryColor300', contrast: '#000000' },
        { name: '400', value: '#514d8c', variableName: '--primaryColor400', contrast: '#ffffff' },
        { name: '500', value: '#322e78', variableName: '--primaryColor500', contrast: '#ffffff' },
        { name: '600', value: '#2d2970', variableName: '--primaryColor600', contrast: '#ffffff' },
        { name: '700', value: '#262365', variableName: '--primaryColor700', contrast: '#ffffff' },
        { name: '800', value: '#1f1d5b', variableName: '--primaryColor800', contrast: '#ffffff' },
        { name: '900', value: '#131248', variableName: '--primaryColor900', contrast: '#ffffff' },
        { name: 'A100', value: '#8583ff', variableName: '--primaryColorA100', contrast: '#000000' },
        { name: 'A200', value: '#5450ff', variableName: '--primaryColorA200', contrast: '#000000' },
        { name: 'A400', value: '#221dff', variableName: '--primaryColorA400', contrast: '#ffffff' },
        { name: 'A700', value: '#0903ff', variableName: '--primaryColorA700', contrast: '#ffffff' },
      ],
      accent: [
        { name: '50', value: '#e0ebf1', variableName: '--accentColor50', contrast: '#000000' },
        { name: '100', value: '#b3cddc', variableName: '--accentColor100', contrast: '#000000' },
        { name: '200', value: '#80abc5', variableName: '--accentColor200', contrast: '#000000' },
        { name: '300', value: '#4d89ae', variableName: '--accentColor300', contrast: '#000000' },
        { name: '400', value: '#26709c', variableName: '--accentColor400', contrast: '#ffffff' },
        { name: '500', value: '#00578b', variableName: '--accentColor500', contrast: '#ffffff' },
        { name: '600', value: '#004f83', variableName: '--accentColor600', contrast: '#ffffff' },
        { name: '700', value: '#004678', variableName: '--accentColor700', contrast: '#ffffff' },
        { name: '800', value: '#003c6e', variableName: '--accentColor800', contrast: '#ffffff' },
        { name: '900', value: '#002c5b', variableName: '--accentColor900', contrast: '#ffffff' },
        { name: 'A100', value: '#8cb9ff', variableName: '--accentColorA100', contrast: '#000000' },
        { name: 'A200', value: '#5999ff', variableName: '--accentColorA200', contrast: '#000000' },
        { name: 'A400', value: '#267aff', variableName: '--accentColorA400', contrast: '#ffffff' },
        { name: 'A700', value: '#0d6aff', variableName: '--accentColorA700', contrast: '#ffffff' },
      ],
      warn: [
        { name: '10', value: '#FFFBFA', variableName: '--warnColor10', contrast: '#000000' },
        { name: '50', value: '#FEF3F2', variableName: '--warnColor50', contrast: '#000000' },
        { name: '100', value: '#FEE4E2', variableName: '--warnColor100', contrast: '#000000' },
        { name: '200', value: '#FECDCA', variableName: '--warnColor200', contrast: '#000000' },
        { name: '300', value: '#FDA29B', variableName: '--warnColor300', contrast: '#000000' },
        { name: '400', value: '#F97066', variableName: '--warnColor400', contrast: '#ffffff' },
        { name: '500', value: '#F04438', variableName: '--warnColor500', contrast: '#ffffff' },
        { name: '600', value: '#D92D20', variableName: '--warnColor600', contrast: '#ffffff' },
        { name: '700', value: '#B42318', variableName: '--warnColor700', contrast: '#ffffff' },
        { name: '800', value: '#912018', variableName: '--warnColor800', contrast: '#ffffff' },
        { name: '900', value: '#7A271A', variableName: '--warnColor900', contrast: '#ffffff' },
        { name: '1000', value: '#55160C', variableName: '--warnColor1000', contrast: '#ffffff' },
      ],
      gray: [
        { name: '50', value: '#fafafa', variableName: '--grayColor50', contrast: '#000000' },
        { name: '100', value: '#f5f5f5', variableName: '--grayColor100', contrast: '#000000' },
        { name: '200', value: '#eeeeee', variableName: '--grayColor200', contrast: '#000000' },
        { name: '300', value: '#e0e0e0', variableName: '--grayColor300', contrast: '#000000' },
        { name: '400', value: '#bdbdbd', variableName: '--grayColor400', contrast: '#000000' },
        { name: '500', value: '#9e9e9e', variableName: '--grayColor500', contrast: '#ffffff' },
        { name: '600', value: '#757575', variableName: '--grayColor600', contrast: '#ffffff' },
        { name: '700', value: '#616161', variableName: '--grayColor700', contrast: '#ffffff' },
        { name: '800', value: '#424242', variableName: '--grayColor800', contrast: '#ffffff' },
        { name: '900', value: '#212121', variableName: '--grayColor900', contrast: '#ffffff' },
        { name: '1000', value: '#000000', variableName: '--grayColor1000', contrast: '#ffffff' },
      ],
    },
  };

  blackTheme: ColorPalette = {
    name: 'Black',
    colors: {
      primary: [
        { name: '50', value: '#f2f2f2', variableName: '--primaryColor50', contrast: '#000000' },
        { name: '100', value: '#d9d9d9', variableName: '--primaryColor100', contrast: '#000000' },
        { name: '200', value: '#bfbfbf', variableName: '--primaryColor200', contrast: '#000000' },
        { name: '300', value: '#8c8c8c', variableName: '--primaryColor300', contrast: '#000000' },
        { name: '400', value: '#595959', variableName: '--primaryColor400', contrast: '#ffffff' },
        { name: '500', value: '#000000', variableName: '--primaryColor500', contrast: '#ffffff' },
        { name: '600', value: '#0a0a0a', variableName: '--primaryColor600', contrast: '#ffffff' },
        { name: '700', value: '#000000', variableName: '--primaryColor700', contrast: '#ffffff' },
        { name: '800', value: '#000000', variableName: '--primaryColor800', contrast: '#ffffff' },
        { name: '900', value: '#000000', variableName: '--primaryColor900', contrast: '#ffffff' },
        { name: 'A100', value: '#8583ff', variableName: '--primaryColorA100', contrast: '#000000' },
        { name: 'A200', value: '#5450ff', variableName: '--primaryColorA200', contrast: '#000000' },
        { name: 'A400', value: '#221dff', variableName: '--primaryColorA400', contrast: '#ffffff' },
        { name: 'A700', value: '#0903ff', variableName: '--primaryColorA700', contrast: '#ffffff' },
      ],
      accent: [
        { name: '50', value: '#e3f2fd', variableName: '--accentColor50', contrast: '#000000' },
        { name: '100', value: '#bbdefb', variableName: '--accentColor100', contrast: '#000000' },
        { name: '200', value: '#90caf9', variableName: '--accentColor200', contrast: '#000000' },
        { name: '300', value: '#64b5f6', variableName: '--accentColor300', contrast: '#000000' },
        { name: '400', value: '#42a5f5', variableName: '--accentColor400', contrast: '#000000' },
        { name: '500', value: '#2196f3', variableName: '--accentColor500', contrast: '#ffffff' },
        { name: '600', value: '#1e88e5', variableName: '--accentColor600', contrast: '#ffffff' },
        { name: '700', value: '#1976d2', variableName: '--accentColor700', contrast: '#ffffff' },
        { name: '800', value: '#1565c0', variableName: '--accentColor800', contrast: '#ffffff' },
        { name: '900', value: '#0d47a1', variableName: '--accentColor900', contrast: '#ffffff' },
        { name: 'A100', value: '#82b1ff', variableName: '--accentColorA100', contrast: '#000000' },
        { name: 'A200', value: '#448aff', variableName: '--accentColorA200', contrast: '#ffffff' },
        { name: 'A400', value: '#2979ff', variableName: '--accentColorA400', contrast: '#ffffff' },
        { name: 'A700', value: '#2962ff', variableName: '--accentColorA700', contrast: '#ffffff' },
      ],
      warn: [
        { name: '10', value: '#FFFBFA', variableName: '--warnColor10', contrast: '#000000' },
        { name: '50', value: '#FEF3F2', variableName: '--warnColor50', contrast: '#000000' },
        { name: '100', value: '#FEE4E2', variableName: '--warnColor100', contrast: '#000000' },
        { name: '200', value: '#FECDCA', variableName: '--warnColor200', contrast: '#000000' },
        { name: '300', value: '#FDA29B', variableName: '--warnColor300', contrast: '#000000' },
        { name: '400', value: '#F97066', variableName: '--warnColor400', contrast: '#ffffff' },
        { name: '500', value: '#F04438', variableName: '--warnColor500', contrast: '#ffffff' },
        { name: '600', value: '#D92D20', variableName: '--warnColor600', contrast: '#ffffff' },
        { name: '700', value: '#B42318', variableName: '--warnColor700', contrast: '#ffffff' },
        { name: '800', value: '#912018', variableName: '--warnColor800', contrast: '#ffffff' },
        { name: '900', value: '#7A271A', variableName: '--warnColor900', contrast: '#ffffff' },
        { name: '1000', value: '#55160C', variableName: '--warnColor1000', contrast: '#ffffff' },
      ],
      gray: [
        { name: '50', value: '#fafafa', variableName: '--grayColor50', contrast: '#000000' },
        { name: '100', value: '#f5f5f5', variableName: '--grayColor100', contrast: '#000000' },
        { name: '200', value: '#eeeeee', variableName: '--grayColor200', contrast: '#000000' },
        { name: '300', value: '#e0e0e0', variableName: '--grayColor300', contrast: '#000000' },
        { name: '400', value: '#bdbdbd', variableName: '--grayColor400', contrast: '#000000' },
        { name: '500', value: '#9e9e9e', variableName: '--grayColor500', contrast: '#ffffff' },
        { name: '600', value: '#757575', variableName: '--grayColor600', contrast: '#ffffff' },
        { name: '700', value: '#616161', variableName: '--grayColor700', contrast: '#ffffff' },
        { name: '800', value: '#424242', variableName: '--grayColor800', contrast: '#ffffff' },
        { name: '900', value: '#212121', variableName: '--grayColor900', contrast: '#ffffff' },
        { name: '1000', value: '#000000', variableName: '--grayColor1000', contrast: '#ffffff' },
      ],
    },
  };

  themes: ColorPalette[] = [this.indigoTheme, this.blackTheme];

  cssVariables: {
    category: string;
    description: string;
    colors: ColorSwatch[];
  }[] = [
    {
      category: 'VisionWave Blue',
      description: 'Blue color palette for VisionWave components',
      colors: [
        { name: '50', value: '#e3f2fd', variableName: '--vw-color-blue-50', contrast: '#000000' },
        { name: '100', value: '#bbdefb', variableName: '--vw-color-blue-100', contrast: '#000000' },
        { name: '200', value: '#90caf9', variableName: '--vw-color-blue-200', contrast: '#000000' },
        { name: '300', value: '#64b5f6', variableName: '--vw-color-blue-300', contrast: '#000000' },
        { name: '400', value: '#42a5f5', variableName: '--vw-color-blue-400', contrast: '#000000' },
        { name: '500', value: '#2196f3', variableName: '--vw-color-blue-500', contrast: '#ffffff' },
        { name: '600', value: '#1e88e5', variableName: '--vw-color-blue-600', contrast: '#ffffff' },
        { name: '700', value: '#1976d2', variableName: '--vw-color-blue-700', contrast: '#ffffff' },
        { name: '800', value: '#1565c0', variableName: '--vw-color-blue-800', contrast: '#ffffff' },
        { name: '900', value: '#0d47a1', variableName: '--vw-color-blue-900', contrast: '#ffffff' },
      ],
    },
    {
      category: 'VisionWave Teal',
      description: 'Teal color palette for VisionWave components',
      colors: [
        { name: '50', value: '#e0f2f1', variableName: '--vw-color-teal-50', contrast: '#000000' },
        { name: '100', value: '#b2dfdb', variableName: '--vw-color-teal-100', contrast: '#000000' },
        { name: '200', value: '#80cbc4', variableName: '--vw-color-teal-200', contrast: '#000000' },
        { name: '300', value: '#4db6ac', variableName: '--vw-color-teal-300', contrast: '#000000' },
        { name: '400', value: '#26a69a', variableName: '--vw-color-teal-400', contrast: '#ffffff' },
        { name: '500', value: '#009688', variableName: '--vw-color-teal-500', contrast: '#ffffff' },
        { name: '600', value: '#00897b', variableName: '--vw-color-teal-600', contrast: '#ffffff' },
        { name: '700', value: '#00796b', variableName: '--vw-color-teal-700', contrast: '#ffffff' },
        { name: '800', value: '#00695c', variableName: '--vw-color-teal-800', contrast: '#ffffff' },
        { name: '900', value: '#004d40', variableName: '--vw-color-teal-900', contrast: '#ffffff' },
      ],
    },
    {
      category: 'VisionWave Green',
      description: 'Green color palette for success states',
      colors: [
        { name: '50', value: '#e8f5e9', variableName: '--vw-color-green-50', contrast: '#000000' },
        { name: '100', value: '#c8e6c9', variableName: '--vw-color-green-100', contrast: '#000000' },
        { name: '200', value: '#a5d6a7', variableName: '--vw-color-green-200', contrast: '#000000' },
        { name: '300', value: '#81c784', variableName: '--vw-color-green-300', contrast: '#000000' },
        { name: '400', value: '#66bb6a', variableName: '--vw-color-green-400', contrast: '#000000' },
        { name: '500', value: '#4caf50', variableName: '--vw-color-green-500', contrast: '#ffffff' },
        { name: '600', value: '#43a047', variableName: '--vw-color-green-600', contrast: '#ffffff' },
        { name: '700', value: '#388e3c', variableName: '--vw-color-green-700', contrast: '#ffffff' },
        { name: '800', value: '#2e7d32', variableName: '--vw-color-green-800', contrast: '#ffffff' },
        { name: '900', value: '#1b5e20', variableName: '--vw-color-green-900', contrast: '#ffffff' },
      ],
    },
    {
      category: 'VisionWave Amber',
      description: 'Amber color palette for warning states',
      colors: [
        { name: '50', value: '#fff8e1', variableName: '--vw-color-amber-50', contrast: '#000000' },
        { name: '100', value: '#ffecb3', variableName: '--vw-color-amber-100', contrast: '#000000' },
        { name: '200', value: '#ffe082', variableName: '--vw-color-amber-200', contrast: '#000000' },
        { name: '300', value: '#ffd54f', variableName: '--vw-color-amber-300', contrast: '#000000' },
        { name: '400', value: '#ffca28', variableName: '--vw-color-amber-400', contrast: '#000000' },
        { name: '500', value: '#ffc107', variableName: '--vw-color-amber-500', contrast: '#000000' },
        { name: '600', value: '#ffb300', variableName: '--vw-color-amber-600', contrast: '#000000' },
        { name: '700', value: '#ffa000', variableName: '--vw-color-amber-700', contrast: '#000000' },
        { name: '800', value: '#ff8f00', variableName: '--vw-color-amber-800', contrast: '#000000' },
        { name: '900', value: '#ff6f00', variableName: '--vw-color-amber-900', contrast: '#ffffff' },
      ],
    },
    {
      category: 'VisionWave Red',
      description: 'Red color palette for error/danger states',
      colors: [
        { name: '50', value: '#ffebee', variableName: '--vw-color-red-50', contrast: '#000000' },
        { name: '100', value: '#ffcdd2', variableName: '--vw-color-red-100', contrast: '#000000' },
        { name: '200', value: '#ef9a9a', variableName: '--vw-color-red-200', contrast: '#000000' },
        { name: '300', value: '#e57373', variableName: '--vw-color-red-300', contrast: '#000000' },
        { name: '400', value: '#ef5350', variableName: '--vw-color-red-400', contrast: '#ffffff' },
        { name: '500', value: '#f44336', variableName: '--vw-color-red-500', contrast: '#ffffff' },
        { name: '600', value: '#e53935', variableName: '--vw-color-red-600', contrast: '#ffffff' },
        { name: '700', value: '#d32f2f', variableName: '--vw-color-red-700', contrast: '#ffffff' },
        { name: '800', value: '#c62828', variableName: '--vw-color-red-800', contrast: '#ffffff' },
        { name: '900', value: '#b71c1c', variableName: '--vw-color-red-900', contrast: '#ffffff' },
      ],
    },
    {
      category: 'Semantic Colors',
      description: 'Semantic color variables for common UI states',
      colors: [
        { name: 'info', value: '#1e88e5', variableName: '--vw-color-info', contrast: '#ffffff' },
        { name: 'info-hover', value: '#1976d2', variableName: '--vw-color-info-hover', contrast: '#ffffff' },
        { name: 'info-active', value: '#1565c0', variableName: '--vw-color-info-active', contrast: '#ffffff' },
        { name: 'success', value: '#4caf50', variableName: '--vw-color-success', contrast: '#ffffff' },
        { name: 'success-hover', value: '#43a047', variableName: '--vw-color-success-hover', contrast: '#ffffff' },
        { name: 'success-active', value: '#388e3c', variableName: '--vw-color-success-active', contrast: '#ffffff' },
        { name: 'warning', value: '#ffc107', variableName: '--vw-color-warning', contrast: '#000000' },
        { name: 'warning-hover', value: '#ffb300', variableName: '--vw-color-warning-hover', contrast: '#000000' },
        { name: 'warning-active', value: '#ffa000', variableName: '--vw-color-warning-active', contrast: '#000000' },
        { name: 'danger', value: '#f44336', variableName: '--vw-color-danger', contrast: '#ffffff' },
        { name: 'danger-hover', value: '#e53935', variableName: '--vw-color-danger-hover', contrast: '#ffffff' },
        { name: 'danger-active', value: '#d32f2f', variableName: '--vw-color-danger-active', contrast: '#ffffff' },
      ],
    },
    {
      category: 'Pure Colors',
      description: 'Basic white and black colors',
      colors: [
        { name: 'white', value: '#ffffff', variableName: '--vw-color-white', contrast: '#000000' },
        { name: 'black', value: '#000000', variableName: '--vw-color-black', contrast: '#ffffff' },
      ],
    },
  ];

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {}

  copyColor(color: string): void {
    this.clipboard.copy(color);
  }

  copyVariable(variableName: string, event: Event): void {
    event.stopPropagation();
    this.clipboard.copy(variableName);
  }
}
