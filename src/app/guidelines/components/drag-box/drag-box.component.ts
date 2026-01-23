import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  standalone: false,
  selector: 'app-drag-box',
  templateUrl: './drag-box.component.html',
  styleUrls: ['./drag-box.component.scss'],
})
export class DragBoxComponent implements OnInit {
  @ViewChild('customTemplate') customTemplate: TemplateRef<any>;

  currentCode: { [key: string]: string } = {
    basic: '',
    withTemplate: '',
    hideIcon: '',
  };

  dragBoxCodeSnippets: { [key: string]: { [key: string]: string } } = {
    basic: {
      default: `<!-- Basic Drag Box -->
<bntv-drag-drop-box [label]="'Drag Me'"></bntv-drag-drop-box>

<!-- Drag Box with Custom Label -->
<bntv-drag-drop-box [label]="'Custom Label Text'"></bntv-drag-drop-box>`,
    },
    withTemplate: {
      default: `<!-- Drag Box with Custom Template -->
<bntv-drag-drop-box [templateRef]="customTemplate"></bntv-drag-drop-box>

<ng-template #customTemplate>
  <div fxLayout="column" fxLayoutGap="8px">
    <h4>Custom Content</h4>
    <p>This is custom content in the drag box</p>
  </div>
</ng-template>`,
    },
    hideIcon: {
      default: `<!-- Drag Box without Drag Icon -->
<bntv-drag-drop-box 
  [label]="'No Drag Icon'"
  [hideIcon]="true"
></bntv-drag-drop-box>`,
    },
  };

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    Object.keys(this.currentCode).forEach((key) => {
      this.currentCode[key] = this.dragBoxCodeSnippets[key]?.default || '';
    });
  }

  onVariantClick(section: string, variant: string = 'default'): void {
    if (this.dragBoxCodeSnippets[section] && this.dragBoxCodeSnippets[section][variant]) {
      this.currentCode[section] = this.dragBoxCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }
}
