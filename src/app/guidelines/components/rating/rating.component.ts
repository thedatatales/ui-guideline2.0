import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  standalone: false,
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
  ratingValue = 3;
  ratingValue2 = 5;
  ratingValue3 = 0;
  ratingValue4 = 2;
  noOfStars = 5;
  noOfStars2 = 10;

  currentCode: { [key: string]: string } = {
    basic: '',
    customStars: '',
    disabled: '',
    customColors: '',
  };

  ratingCodeSnippets: { [key: string]: { [key: string]: string } } = {
    basic: {
      default: `<!-- Basic Rating Star -->
<bntv-rating-star
  [noOfStars]="5"
  [value]="ratingValue"
  (starClick)="onRatingClick($event)"
></bntv-rating-star>`,
    },
    customStars: {
      default: `<!-- Custom Number of Stars -->
<bntv-rating-star
  [noOfStars]="10"
  [value]="ratingValue"
  (starClick)="onRatingClick($event)"
></bntv-rating-star>`,
    },
    disabled: {
      default: `<!-- Disabled Rating Star -->
<bntv-rating-star
  [noOfStars]="5"
  [value]="ratingValue"
  [disable]="true"
></bntv-rating-star>`,
    },
    customColors: {
      default: `<!-- Custom Colors Rating Star -->
<bntv-rating-star
  [noOfStars]="5"
  [value]="ratingValue"
  [color]="'#FF6B6B'"
  [fillColor]="'#E0E0E0'"
  [fontSize]="'2em'"
  (starClick)="onRatingClick($event)"
></bntv-rating-star>`,
    },
  };

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    Object.keys(this.currentCode).forEach((key) => {
      this.currentCode[key] = this.ratingCodeSnippets[key]?.default || '';
    });
  }

  onVariantClick(section: string, variant: string = 'default'): void {
    if (this.ratingCodeSnippets[section] && this.ratingCodeSnippets[section][variant]) {
      this.currentCode[section] = this.ratingCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }

  onRatingClick(value: any): void {
    console.log('Rating clicked:', value);
  }
}
