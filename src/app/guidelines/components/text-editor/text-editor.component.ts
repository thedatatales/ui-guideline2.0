import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  standalone: false,
  selector: 'pmgt-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss'],
})
export class TextEditorComponent implements OnInit {
  currentCode: { [key: string]: string } = {
    basic: '',
    customToolbar: '',
    withImage: '',
    withEmoji: '',
    withSignature: '',
  };

  editorData: any = '';
  editorData2: any = '';

  EditorConfig = {
    toolbar: {
      items: [
        'heading',
        'fontFamily',
        'fontSize',
        'fontColor',
        'fontBackgroundColor',
        'bold',
        'italic',
        'underline',
        'link',
        'paragraph',
        'insert',
        'styles',
        'bulletedList',
        'numberedList',
        '|',
        'indent',
        'outdent',
        '|',
        'undo',
        'redo',
        'insertTable',
        'basicstyles',
      ],
      shouldNotGroupWhenFull: false,
    },
  };

  EditorConfigWithImage = {
    toolbar: {
      items: [
        'heading',
        'fontFamily',
        'fontSize',
        'fontColor',
        'fontBackgroundColor',
        'bold',
        'italic',
        'underline',
        'link',
        'paragraph',
        'insert',
        'styles',
        'bulletedList',
        'numberedList',
        '|',
        'indent',
        'outdent',
        '|',
        'undo',
        'redo',
        'insertTable',
        'basicstyles',
        'image',
      ],
      shouldNotGroupWhenFull: false,
    },
  };

  EditorConfigWithEmoji = {
    toolbar: {
      items: [
        'heading',
        'fontFamily',
        'fontSize',
        'fontColor',
        'fontBackgroundColor',
        'bold',
        'italic',
        'underline',
        'link',
        'paragraph',
        'insert',
        'styles',
        'bulletedList',
        'numberedList',
        '|',
        'indent',
        'outdent',
        '|',
        'undo',
        'redo',
        'insertTable',
        'basicstyles',
        'Emoji',
      ],
      shouldNotGroupWhenFull: false,
    },
  };

  EditorConfigWithSignature = {
    toolbar: {
      items: [
        'heading',
        'fontFamily',
        'fontSize',
        'fontColor',
        'fontBackgroundColor',
        'bold',
        'italic',
        'underline',
        'link',
        'paragraph',
        'insert',
        'styles',
        'bulletedList',
        'numberedList',
        '|',
        'indent',
        'outdent',
        '|',
        'undo',
        'redo',
        'insertTable',
        'basicstyles',
        'Signature',
      ],
      shouldNotGroupWhenFull: false,
    },
  };

  textEditorCodeSnippets: { [key: string]: { [key: string]: string } } = {
    basic: {
      default: `<!-- Basic Text Editor -->
<bntv-text-editor
  [(ngModel)]="editorData"
  [config]="EditorConfig"
>
</bntv-text-editor>`,
    },
    customToolbar: {
      default: `<!-- Text Editor with Custom Toolbar -->
<bntv-text-editor
  [(ngModel)]="editorData"
  [config]="EditorConfig"
>
</bntv-text-editor>`,
    },
    withImage: {
      default: `<!-- Text Editor with Image Support -->
<bntv-text-editor
  [(ngModel)]="editorData"
  [config]="EditorConfigWithImage"
>
</bntv-text-editor>`,
    },
    withEmoji: {
      default: `<!-- Text Editor with Emoji Support -->
<bntv-text-editor
  [(ngModel)]="editorData"
  [config]="EditorConfigWithEmoji"
>
</bntv-text-editor>`,
    },
    withSignature: {
      default: `<!-- Text Editor with Signature Support -->
<bntv-text-editor
  [(ngModel)]="editorData"
  [config]="EditorConfigWithSignature"
>
</bntv-text-editor>`,
    },
  };

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    Object.keys(this.currentCode).forEach((key) => {
      this.currentCode[key] = this.textEditorCodeSnippets[key]?.default || '';
    });
  }

  onVariantClick(section: string, variant: string): void {
    if (
      this.textEditorCodeSnippets[section] &&
      this.textEditorCodeSnippets[section][variant]
    ) {
      this.currentCode[section] =
        this.textEditorCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }
}
