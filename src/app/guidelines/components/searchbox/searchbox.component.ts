import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  standalone: false,
  selector: 'pmgt-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss'],
})
export class SearchboxComponent implements OnInit {
  currentCode: { [key: string]: string } = {
    basic: '',
    iconOnly: '',
    rightIcon: '',
    disabled: '',
  };

  searchboxCodeSnippets: { [key: string]: { [key: string]: string } } = {
    basic: {
      default: `<!-- Basic Searchbox -->
<bntv-search-box
  [label]="'Search'"
  [inputShown]="true"
>
</bntv-search-box>`,
    },
    iconOnly: {
      default: `<!-- Icon Only Searchbox -->
<bntv-search-box
  [label]="'Search'"
>
</bntv-search-box>`,
    },
    rightIcon: {
      default: `<!-- Searchbox with Right Icon -->
<bntv-search-box
  [label]="'Search'"
  [isLeftIconEnabled]="false"
  [inputShown]="true"
>
</bntv-search-box>`,
    },
    disabled: {
      default: `<!-- Disabled Searchbox -->
<bntv-search-box
  [label]="'Search'"
  [inputShown]="true"
  [disabled]="true"
>
</bntv-search-box>`,
    },
  };

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    Object.keys(this.currentCode).forEach((key) => {
      this.currentCode[key] = this.searchboxCodeSnippets[key]?.default || '';
    });
  }

  onVariantClick(section: string, variant: string): void {
    if (
      this.searchboxCodeSnippets[section] &&
      this.searchboxCodeSnippets[section][variant]
    ) {
      this.currentCode[section] =
        this.searchboxCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }
}
