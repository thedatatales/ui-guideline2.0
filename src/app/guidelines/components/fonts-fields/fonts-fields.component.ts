import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-fonts-fields',
  templateUrl: './fonts-fields.component.html',
  styleUrls: ['./fonts-fields.component.scss'],
})
export class FontsFieldsComponent {
  inputValue = '';
  emailValue = '';
  numberValue: number | null = null;
  textareaValue = '';
  selectedOption: string | null = null;
  selectOptions = [
    { name: 'Option A', value: 'a' },
    { name: 'Option B', value: 'b' },
    { name: 'Option C', value: 'c' },
  ];
}
