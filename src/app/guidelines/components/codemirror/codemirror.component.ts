import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  standalone: false,
  selector: 'pmgt-codemirror',
  templateUrl: './codemirror.component.html',
  styleUrls: ['./codemirror.component.scss'],
})
export class CodemirrorComponent implements OnInit {
  currentCode: { [key: string]: string } = {
    basic: '',
    json: '',
    sql: '',
    readonly: '',
    withLabel: '',
  };

  formGroup = new UntypedFormGroup({});
  sampleJson = '{\n  "name": "Enttribe",\n  "tools": ["codemirror", "editor"],\n  "active": true\n}';
  sampleSql = 'SELECT id, name FROM users WHERE active = 1 ORDER BY name;';
  sampleJs = 'function greet(name) {\n  console.log(`Hello, ${name}!`);\n}';

  jsonConfig = {
    mode: 'application/ld+json',
    lineNumbers: true,
    lint: true,
    gutters: ['CodeMirror-lint-markers'],
    autofocus: true,
  };

  sqlConfig = {
    mode: 'sql',
    lineNumbers: true,
    matchBrackets: true,
    autoCloseBrackets: true,
  };

  jsReadonlyConfig = {
    mode: 'javascript',
    lineNumbers: true,
    readOnly: true,
  };

  codemirrorCodeSnippets: { [key: string]: { [key: string]: string } } = {
    basic: {
      default: `<!-- Basic CodeMirror -->
<bntv-codemirror
  [config]="jsonConfig"
  [(ngModel)]="sampleJson"
>
</bntv-codemirror>`,
    },
    json: {
      default: `<!-- CodeMirror for JSON -->
<bntv-codemirror
  [config]="jsonConfig"
  [(ngModel)]="sampleJson"
>
</bntv-codemirror>`,
    },
    sql: {
      default: `<!-- CodeMirror for SQL -->
<bntv-codemirror
  [config]="sqlConfig"
  [(ngModel)]="sampleSql"
>
</bntv-codemirror>`,
    },
    readonly: {
      default: `<!-- Readonly CodeMirror -->
<bntv-codemirror
  [config]="jsReadonlyConfig"
  [(ngModel)]="sampleJs"
>
</bntv-codemirror>`,
    },
    withLabel: {
      default: `<!-- CodeMirror with Label -->
<bntv-codemirror
  [config]="jsonConfig"
  [label]="'JSON Editor'"
  [(ngModel)]="sampleJson"
  [required]="true"
>
</bntv-codemirror>`,
    },
  };

  constructor(
    private clipboard: Clipboard,
    private fb: UntypedFormBuilder
  ) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      codeEditor: [''],
    });
    Object.keys(this.currentCode).forEach((key) => {
      this.currentCode[key] = this.codemirrorCodeSnippets[key]?.default || '';
    });
  }

  onVariantClick(section: string, variant: string): void {
    if (
      this.codemirrorCodeSnippets[section] &&
      this.codemirrorCodeSnippets[section][variant]
    ) {
      this.currentCode[section] =
        this.codemirrorCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }
}
