import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  standalone: false,
  selector: 'app-document-preview',
  templateUrl: './document-preview.component.html',
  styleUrls: ['./document-preview.component.scss'],
})
export class DocumentPreviewComponent implements OnInit {
  previewOptions = {
    action: {
      zoom: true,
      info: true,
      share: true,
      rotate: true,
      edit: true,
      delete: true,
      download: true,
      isRotationSave: true,
      back: true,
    },
    zoomOption: {
      zoomOnMouseWheel: true,
    },
    arrowBtn: true,
  };

  sampleImageData = {
    sliderData: [
      {
        name: 'sample-image.jpg',
        type: 'image',
        state: 'next',
        blob: new Blob(),
      },
    ],
  };

  samplePdfData = {
    sliderData: [
      {
        name: 'sample-document.pdf',
        type: 'pdf',
        state: 'next',
        blob: new Blob(),
      },
    ],
  };

  currentCode: { [key: string]: string } = {
    basic: '',
    withOptions: '',
    multiple: '',
  };

  documentPreviewCodeSnippets: { [key: string]: { [key: string]: string } } = {
    basic: {
      default: `<!-- Basic Document Preview -->
<bntv-document-preview
  [data]="documentData"
></bntv-document-preview>

<!-- TypeScript -->
documentData = {
  sliderData: [
    {
      name: 'document.pdf',
      type: 'pdf',
      state: 'next',
      blob: blobObject
    }
  ]
};`,
    },
    withOptions: {
      default: `<!-- Document Preview with Custom Options -->
<bntv-document-preview
  [data]="documentData"
  [options]="previewOptions"
  [displayNameOnHeader]="true"
></bntv-document-preview>

<!-- TypeScript -->
previewOptions = {
  action: {
    zoom: true,
    info: true,
    share: true,
    rotate: true,
    edit: true,
    delete: true,
    download: true,
    isRotationSave: true
  },
  zoomOption: {
    zoomOnMouseWheel: true
  },
  arrowBtn: true
};`,
    },
    multiple: {
      default: `<!-- Multiple Document Preview (Carousel) -->
<bntv-document-preview
  [data]="multipleDocumentsData"
  [options]="previewOptions"
></bntv-document-preview>

<!-- TypeScript -->
multipleDocumentsData = {
  sliderData: [
    { name: 'image1.jpg', type: 'image', state: 'next', blob: blob1 },
    { name: 'document.pdf', type: 'pdf', state: 'next', blob: blob2 },
    { name: 'video.mp4', type: 'video', state: 'next', base64: base64String }
  ]
};`,
    },
  };

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    Object.keys(this.currentCode).forEach((key) => {
      this.currentCode[key] = this.documentPreviewCodeSnippets[key]?.default || '';
    });
  }

  onVariantClick(section: string, variant: string = 'default'): void {
    if (this.documentPreviewCodeSnippets[section] && this.documentPreviewCodeSnippets[section][variant]) {
      this.currentCode[section] = this.documentPreviewCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }
}
