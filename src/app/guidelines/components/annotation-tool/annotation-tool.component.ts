import { Component, OnInit, ViewChild } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  standalone: false,
  selector: 'pmgt-annotation-tool',
  templateUrl: './annotation-tool.component.html',
  styleUrls: ['./annotation-tool.component.scss'],
})
export class AnnotationToolComponent implements OnInit {
  @ViewChild('annotation') annotation: any;

  currentCode: { [key: string]: string } = {
    basic: '',
    withCustomImages: '',
    capture: '',
  };

  imageJson = {
    circleList: [],
    rectangleList: [],
    lineList: [],
    arrowList: [],
    textList: [],
    imageList: [],
  };

  customImageList = [
    {
      name: 'Image 01',
      displayName: 'Connector',
      icon: 'Circle-Shape',
      selected: false,
      group: 'dragDrop',
      parent: 'CUSTOM_IMAGES',
      src: 'images/Icon01.png',
    },
    {
      name: 'Image 02',
      displayName: 'Charger',
      icon: 'Rectangle-Shape',
      selected: false,
      group: 'dragDrop',
      parent: 'CUSTOM_IMAGES',
      src: 'images/Icon02.png',
    },
  ];

  annotationOptions: any = {};

  annotationToolCodeSnippets: { [key: string]: { [key: string]: string } } = {
    basic: {
      default: `<!-- Basic Annotation Tool -->
<bntv-image-annotation
  [(imageJson)]="imageJson"
>
</bntv-image-annotation>`,
    },
    withCustomImages: {
      default: `<!-- Annotation Tool with Custom Images -->
<bntv-image-annotation
  [(imageJson)]="imageJson"
  [customImage]="true"
  [customImageList]="customImageList"
  (annotationReady)="onAnnotationReady($event)"
>
</bntv-image-annotation>`,
    },
    capture: {
      default: `<!-- Capture Annotation -->
<bntv-image-annotation
  #annotation
  [(imageJson)]="imageJson"
  [annotatinOptions]="annotationOptions"
  (annotationReady)="onAnnotationReady($event)"
>
</bntv-image-annotation>

<!-- Capture button -->
<bntv-mat-button
  [value]="'Capture'"
  (clickButton)="capture()"
>
</bntv-mat-button>`,
    },
  };

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    Object.keys(this.currentCode).forEach((key) => {
      this.currentCode[key] = this.annotationToolCodeSnippets[key]?.default || '';
    });
  }

  onVariantClick(section: string, variant: string): void {
    if (
      this.annotationToolCodeSnippets[section] &&
      this.annotationToolCodeSnippets[section][variant]
    ) {
      this.currentCode[section] =
        this.annotationToolCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }

  onAnnotationReady(event: any): void {
    this.annotationOptions = event;
  }

  capture(): void {
    if (this.annotationOptions?.componentApi) {
      this.annotationOptions.componentApi.captureImage().subscribe((data: any) => {
        console.log('Captured image', data);
      });
    }
  }
}
