import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  standalone: false,
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  currentCode: { [key: string]: string } = {
    basic: '',
    withHeader: '',
    withShadow: '',
    customPadding: '',
  };

  cardCodeSnippets: { [key: string]: { [key: string]: string } } = {
    basic: {
      default: `<!-- Basic Card -->
<bntv-simple-card>
  <div card-content>
    <p>This is the card content. You can add any content here.</p>
  </div>
</bntv-simple-card>`,
    },
    withHeader: {
      default: `<!-- Card with Header -->
<bntv-simple-card [isHeader]="true">
  <div card-title>Card Title</div>
  <div card-subtitle>Card Subtitle</div>
  <div card-content>
    <p>This card has a header with title and subtitle.</p>
  </div>
</bntv-simple-card>`,
    },
    withShadow: {
      default: `<!-- Card with Box Shadow -->
<bntv-simple-card [boxShadow]="true">
  <div card-content>
    <p>This card has a box shadow effect.</p>
  </div>
</bntv-simple-card>`,
    },
    customPadding: {
      default: `<!-- Card with Custom Padding -->
<bntv-simple-card [padding]="'2em'">
  <div card-content>
    <p>This card has custom padding of 2em.</p>
  </div>
</bntv-simple-card>`,
    },
  };

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    Object.keys(this.currentCode).forEach((key) => {
      this.currentCode[key] = this.cardCodeSnippets[key]?.default || '';
    });
  }

  onVariantClick(section: string, variant: string = 'default'): void {
    if (this.cardCodeSnippets[section] && this.cardCodeSnippets[section][variant]) {
      this.currentCode[section] = this.cardCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }
}
