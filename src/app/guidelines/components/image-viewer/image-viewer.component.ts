import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  standalone: false,
  selector: 'pmgt-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss'],
})
export class ImageViewerGuidelineComponent implements OnInit {
  currentCode: { [key: string]: string } = {
    basic: '',
    withOptions: '',
    withZoom: '',
  };

  imageData = {
    base64: '',
    blob: '',
    url: 'https://via.placeholder.com/600x400',
    context: 'UM_PLATFORM',
  };

  imageOptions = {
    showDownload: true,
    showZoom: true,
  };

  imageViewerCodeSnippets: { [key: string]: { [key: string]: string } } = {
    basic: {
      default: `<!-- Basic Image Viewer -->
<bntv-image-viewer
  [data]="imageData"
>
</bntv-image-viewer>

<!-- In Component TypeScript -->
imageData = {
  url: 'https://via.placeholder.com/600x400',
  context: 'UM_PLATFORM',
};`,
    },
    withOptions: {
      default: `<!-- Image Viewer with Options -->
<bntv-image-viewer
  [data]="imageData"
  [options]="imageOptions"
>
</bntv-image-viewer>

<!-- In Component TypeScript -->
imageOptions = {
  showDownload: true,
  showZoom: true,
};`,
    },
    withZoom: {
      default: `<!-- Image Viewer with Zoom Level -->
<bntv-image-viewer
  [data]="imageData"
  [options]="imageOptions"
  [zoomLevel]="2"
  [width]="'100%'"
>
</bntv-image-viewer>`,
    },
  };

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    Object.keys(this.currentCode).forEach((key) => {
      this.currentCode[key] = this.imageViewerCodeSnippets[key]?.default || '';
    });
  }

  onVariantClick(section: string, variant: string): void {
    if (
      this.imageViewerCodeSnippets[section] &&
      this.imageViewerCodeSnippets[section][variant]
    ) {
      this.currentCode[section] =
        this.imageViewerCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }
}
