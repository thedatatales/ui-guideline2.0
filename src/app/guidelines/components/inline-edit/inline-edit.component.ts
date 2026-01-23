import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { IConfigInlineEditor, ModeType, EditOptions, SaveOnType } from '@enttribe/core/tools';

@Component({
  standalone: false,
  selector: 'pmgt-inline-edit',
  templateUrl: './inline-edit.component.html',
  styleUrls: ['./inline-edit.component.scss'],
})
export class InlineEditComponent implements OnInit {
  currentCode: { [key: string]: string } = {
    basic: '',
    config: '',
  };

  inlineEditValue = 'Click to edit';
  inlineEditValue2 = 'Double click to edit';
  inlineConfig: IConfigInlineEditor = {
    editable: true,
    editableOn: EditOptions.CLICK,
    saveOn: SaveOnType.OUTSIDE_CLICK,
    displayMode: ModeType.LABEL_WRAP,
  };

  inlineConfigDoubleClick: IConfigInlineEditor = {
    editable: true,
    editableOn: EditOptions.DB_CLICK,
    saveOn: SaveOnType.OUTSIDE_CLICK,
    displayMode: ModeType.LABEL_WRAP,
  };

  inlineEditCodeSnippets: { [key: string]: { [key: string]: string } } = {
    basic: {
      default: `<!-- inline-edit-basic -->
<div>
  <bntv-input-box
    [label]="'Inline Edit'"
    [(data)]="inlineEditValue"
    [inlineEditorConfig]="{
      editable: true,
      editableOn: EditOptions.CLICK,
      saveOn: SaveOnType.OUTSIDE_CLICK,
      displayMode: ModeType.LABEL_WRAP
    }"
    (onSave)="onSave($event)"
    (onCancelInline)="onCancel($event)"
    (onEditing)="onEditing($event)"
  >
  </bntv-input-box>
</div>`,
    },
    config: {
      doubleClick: `<!-- inline-edit-double-click -->
<div>
  <bntv-input-box
    [label]="'Inline Edit'"
    [(data)]="inlineEditValue"
    [inlineEditorConfig]="{
      editable: true,
      editableOn: EditOptions.DB_CLICK,
      saveOn: SaveOnType.OUTSIDE_CLICK,
      displayMode: ModeType.LABEL_WRAP
    }"
    (onSave)="onSave($event)"
    (onCancelInline)="onCancel($event)"
    (onEditing)="onEditing($event)"
  >
  </bntv-input-box>
</div>`,
    },
  };

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    this.currentCode['basic'] = this.inlineEditCodeSnippets['basic']?.default || '';
    this.currentCode['config'] = this.inlineEditCodeSnippets['config']?.doubleClick || '';
  }

  onVariantClick(section: string, variant: string): void {
    if (
      this.inlineEditCodeSnippets[section] &&
      this.inlineEditCodeSnippets[section][variant]
    ) {
      this.currentCode[section] = this.inlineEditCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }

  onSave(event: any): void {
    console.log('Saved:', event);
  }

  onCancel(event: any): void {
    console.log('Cancelled:', event);
  }

  onEditing(event: any): void {
    console.log('Editing:', event);
  }
}
