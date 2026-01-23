import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  standalone: false,
  selector: 'pmgt-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss'],
})
export class TypographyComponent implements OnInit {
  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {}

  copyToClipboard(text: string): void {
    this.clipboard.copy(text);
  }
}
