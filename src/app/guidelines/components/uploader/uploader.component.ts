import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { UploadBoxService } from '@enttribe/core/tools/upload-box';

@Component({
  standalone: false,
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss'],
})
export class UploaderComponent implements OnInit {
  selectedFiles: File[] = [];
  progress = 0;
  uploadUrl = 'https://example.com/api/upload';

  currentCode: { [key: string]: string } = {
    basic: '',
    dragDrop: '',
    multiple: '',
  };

  uploaderCodeSnippets: { [key: string]: { [key: string]: string } } = {
    basic: {
      default: `<!-- Basic Uploader -->
<bntv-upload-box
  [progress]="progress"
  (fileChange)="onFileChange($event)"
></bntv-upload-box>
<button mat-button (click)="uploadFiles()">Upload</button>

<!-- TypeScript -->
import { UploadBoxService } from '@enttribe/core/tools/upload-box';

selectedFiles: File[] = [];
progress = 0;
uploadUrl = 'https://example.com/api/upload';

constructor(private uploadBoxService: UploadBoxService) {}

onFileChange(files: File[]): void {
  this.selectedFiles = files;
}

uploadFiles(): void {
  if (this.selectedFiles.length === 0) {
    return;
  }
  this.uploadBoxService.uploadFilesToServer(this.uploadUrl, this.selectedFiles)
    .subscribe((data: any) => {
      if (data.status === 'progress') {
        this.progress = data.message;
      } else {
        console.log('Upload complete:', data);
      }
    });
}`,
    },
    dragDrop: {
      default: `<!-- Uploader with Drag and Drop -->
<bntv-upload-box
  [titleText]="'Drag and drop files here'"
  [actionText]="'or click to browse'"
  [progress]="progress"
  (fileChange)="onFileChange($event)"
></bntv-upload-box>

<!-- Custom styling -->
<bntv-upload-box
  [boxBackgroundColor]="'var(--bgColor10)'"
  [iconColor]="'var(--accentColor500)'"
  [titleFontSize]="'1.2em'"
  [progress]="progress"
  (fileChange)="onFileChange($event)"
></bntv-upload-box>`,
    },
    multiple: {
      default: `<!-- Multiple File Upload with Restrictions -->
<bntv-upload-box
  [acceptFile]="'.pdf,.doc,.docx'"
  [maxFileSize]="[5242880]"
  [fileNameLimit]="50"
  [isMultiSelect]="true"
  [progress]="progress"
  (fileChange)="onFileChange($event)"
></bntv-upload-box>

<!-- TypeScript -->
onFileChange(files: File[]): void {
  this.selectedFiles = files;
  console.log('Selected files:', files);
}`,
    },
  };

  constructor(
    private clipboard: Clipboard,
    private uploadBoxService: UploadBoxService
  ) {}

  ngOnInit(): void {
    Object.keys(this.currentCode).forEach((key) => {
      this.currentCode[key] = this.uploaderCodeSnippets[key]?.default || '';
    });
  }

  onVariantClick(section: string, variant: string = 'default'): void {
    if (this.uploaderCodeSnippets[section] && this.uploaderCodeSnippets[section][variant]) {
      this.currentCode[section] = this.uploaderCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }

  onFileChange(files: File[]): void {
    this.selectedFiles = files;
    console.log('Files selected:', files);
  }

  uploadFiles(): void {
    if (this.selectedFiles.length === 0) {
      return;
    }
    // Example upload - in real usage, use UploadBoxService
    console.log('Uploading files:', this.selectedFiles);
  }
}
