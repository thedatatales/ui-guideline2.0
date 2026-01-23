import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { DownloadProgressService } from '@enttribe/core/tools/download-progress';

@Component({
  standalone: false,
  selector: 'pmgt-download-progress',
  templateUrl: './download-progress.component.html',
  styleUrls: ['./download-progress.component.scss'],
})
export class DownloadProgressGuidelineComponent implements OnInit {
  currentCode: { [key: string]: string } = {
    basic: '',
    withFileName: '',
    custom: '',
  };

  constructor(
    private clipboard: Clipboard,
    private downloadProgressService: DownloadProgressService
  ) {}

  downloadProgressCodeSnippets: { [key: string]: { [key: string]: string } } = {
    basic: {
      default: `<!-- Basic Download Progress -->
<!-- Note: Download Progress is typically triggered via service -->
import { DownloadProgressService } from '@enttribe/core/tools/download-progress';

constructor(private downloadProgressService: DownloadProgressService) {}

downloadFile() {
  const config = {
    fileName: 'example.pdf',
    context: 'YOUR_CONTEXT',
    url: '/api/download',
    payload: {}
  };
  
  this.downloadProgressService.downloadFile(config).subscribe((result) => {
    console.log('Download completed', result);
  });
}`,
    },
    withFileName: {
      default: `<!-- Download Progress with Custom File Name -->
const config = {
  fileName: 'custom-report.xlsx',
  context: 'YOUR_CONTEXT',
  url: '/api/export',
  payload: {
    filters: [],
    projection: null
  }
};

this.downloadProgressService.downloadFile(config).subscribe((result) => {
  console.log('Download completed', result);
});`,
    },
    custom: {
      default: `<!-- Download Progress with Custom Configuration -->
const config = {
  fileName: 'large-file.zip',
  context: 'YOUR_CONTEXT',
  url: '/api/download-large',
  payload: {},
  override: {
    downloading: true,
    loadedData: 0
  },
  toFixedValue: 2
};

this.downloadProgressService.downloadFile(config).subscribe({
  next: (result) => {
    console.log('Download progress', result);
  },
  error: (error) => {
    console.error('Download failed', error);
  }
});`,
    },
  };

  ngOnInit(): void {
    Object.keys(this.currentCode).forEach((key) => {
      this.currentCode[key] = this.downloadProgressCodeSnippets[key]?.default || '';
    });
  }

  onVariantClick(section: string, variant: string): void {
    if (
      this.downloadProgressCodeSnippets[section] &&
      this.downloadProgressCodeSnippets[section][variant]
    ) {
      this.currentCode[section] =
        this.downloadProgressCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }

  triggerDownload(): void {
    const config = {
      fileName: 'example-download.pdf',
      context: 'UM_PLATFORM',
      url: '/api/download',
      payload: {},
    };
    this.downloadProgressService.downloadFile(config).subscribe((result) => {
      console.log('Download completed', result);
    });
  }
}
