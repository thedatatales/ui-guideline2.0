import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  standalone: false,
  selector: 'app-html-container',
  templateUrl: './html-container.component.html',
  styleUrls: ['./html-container.component.scss'],
})
export class HtmlContainerComponent implements OnInit {
  sampleHtmlContent = `
    <div style="border: 1px solid var(--grayColor300); border-radius: 8px; padding: 1em; background: #fff;">
      <h3 style="margin-top:0; color: var(--accentColor500);">Sample HTML Content</h3>
      <p style="color: var(--grayColor700);">This is HTML content rendered inside the container.</p>
    </div>
  `;

  longHtmlContent = `
    <div style="border: 1px solid var(--grayColor300); border-radius: 8px; padding: 1em; background: #fff;">
      <h3 style="margin-top:0; color: var(--accentColor500);">Long HTML Content</h3>
      <p style="color: var(--grayColor700);">This is a longer piece of HTML content that will demonstrate the show more/less functionality. 
      The content continues with more paragraphs and information that extends beyond the initial visible area.</p>
      <p style="color: var(--grayColor700);">Additional content here to make it longer and test the truncation feature.</p>
    </div>
  `;

  currentCode: { [key: string]: string } = {
    basic: '',
    showMore: '',
    custom: '',
  };

  htmlContainerCodeSnippets: { [key: string]: { [key: string]: string } } = {
    basic: {
      default: `<!-- Basic HTML Container -->
<bntv-html-container [content]="htmlContent"></bntv-html-container>

<!-- TypeScript -->
htmlContent = '<div><h3>Title</h3><p>Content here</p></div>';`,
    },
    showMore: {
      default: `<!-- HTML Container with Show More/Less -->
<bntv-html-container
  [content]="longHtmlContent"
  [showMoreOption]="true"
  [linesToShow]="3"
  [showHeight]="'120px'"
  [togglePosition]="'block-end'"
></bntv-html-container>`,
    },
    custom: {
      default: `<!-- HTML Container with Custom Styling -->
<bntv-html-container
  [content]="htmlContent"
  [contentClass]="true"
  [color]="'var(--grayColor800)'"
  [showMoreOption]="true"
  [linesToShow]="2"
  [showMoreText]="'Read More'"
  [showLessText]="'Read Less'"
></bntv-html-container>`,
    },
  };

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    Object.keys(this.currentCode).forEach((key) => {
      this.currentCode[key] = this.htmlContainerCodeSnippets[key]?.default || '';
    });
  }

  onVariantClick(section: string, variant: string = 'default'): void {
    if (this.htmlContainerCodeSnippets[section] && this.htmlContainerCodeSnippets[section][variant]) {
      this.currentCode[section] = this.htmlContainerCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }
}
