import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  standalone: false,
  selector: 'pmgt-quill-editor',
  templateUrl: './quill-editor.component.html',
  styleUrls: ['./quill-editor.component.scss'],
})
export class QuillEditorComponent implements OnInit {
  currentCode: { [key: string]: string } = {
    basic: '',
    withActions: '',
    withMentions: '',
    withContext: '',
    withMic: '',
  };

  editorData: any = '';
  leftIconList = [
    {
      iconName: 'assign_user',
      tooltip: 'Assign User',
      bgColor: 'transparent',
      color: 'var(--grayColor1000)',
      iconSize: '1.5em',
      borderRadius: '0.4em',
      action: 'assignUser',
    },
  ];

  rightIconList = [
    {
      iconName: 'Public',
      tooltip: 'Public',
      bgColor: 'transparent',
      color: 'var(--grayColor1000)',
      iconSize: '1.5em',
      borderRadius: '0.4em',
      action: 'Public',
    },
  ];

  mentionListConfig = [
    {
      denotationChar: '@',
      apiUrl: '',
      responseObj: {
        id: 'obj.entityId',
        displayExpression: '${obj.title} (${obj.type})',
        value: 'obj.title',
      },
    },
  ];

  contextConfig = {
    denotationChar: '$',
    apiUrl: '',
    mentionList: [
      { id: 'app', value: 'Knowledge Graph' },
      { id: 'app', value: 'Orchestrator' },
    ],
  };

  micConfig = {
    searchByVoice: {
      iconName: 'voice_ai',
      position: 'right',
      bgColor: 'transparent',
      color: 'var(--grayColor1000)',
    },
  };

  imageConfig = {
    hide: false,
  };

  attachmentConfig = {
    hide: false,
  };

  quillEditorCodeSnippets: { [key: string]: { [key: string]: string } } = {
    basic: {
      default: `<!-- Basic Quill Editor -->
<bntv-quill-editor
  [(ngModel)]="editorData"
>
</bntv-quill-editor>`,
    },
    withActions: {
      default: `<!-- Quill Editor with Actions -->
<bntv-quill-editor
  [(ngModel)]="editorData"
  [leftActionsList]="leftIconList"
  [rightActionsList]="rightIconList"
>
</bntv-quill-editor>`,
    },
    withMentions: {
      default: `<!-- Quill Editor with Mentions -->
<bntv-quill-editor
  [(ngModel)]="editorData"
  [mentionListConfig]="mentionListConfig"
>
</bntv-quill-editor>`,
    },
    withContext: {
      default: `<!-- Quill Editor with Context -->
<bntv-quill-editor
  [(ngModel)]="editorData"
  [contextConfig]="contextConfig"
>
</bntv-quill-editor>`,
    },
    withMic: {
      default: `<!-- Quill Editor with Microphone -->
<bntv-quill-editor
  [(ngModel)]="editorData"
  [micConfig]="micConfig"
>
</bntv-quill-editor>`,
    },
  };

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    Object.keys(this.currentCode).forEach((key) => {
      this.currentCode[key] = this.quillEditorCodeSnippets[key]?.default || '';
    });
  }

  onVariantClick(section: string, variant: string): void {
    if (
      this.quillEditorCodeSnippets[section] &&
      this.quillEditorCodeSnippets[section][variant]
    ) {
      this.currentCode[section] =
        this.quillEditorCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }
}
