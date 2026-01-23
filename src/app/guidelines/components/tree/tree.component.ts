import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { TreeComponent as BntvTreeComponent } from '@enttribe/core/tools/tree';

@Component({
  standalone: false,
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
})
export class TreeComponent implements OnInit {
  @ViewChild('demotree') demotree: BntvTreeComponent;
  @ViewChild('basicNodeTemplate') basicNodeTemplate: TemplateRef<any>;
  @ViewChild('customNodeTemplate') customNodeTemplate: TemplateRef<any>;

  basicTreeData = [
    {
      name: 'Documents',
      data: {},
      type: 'folder',
      children: [
        { name: 'report.pdf', data: {}, type: 'file' },
        { name: 'presentation.pptx', data: {}, type: 'file' },
      ],
    },
    {
      name: 'Images',
      data: {},
      type: 'folder',
      children: [
        { name: 'photo1.jpg', data: {}, type: 'file' },
        { name: 'photo2.png', data: {}, type: 'file' },
      ],
    },
    {
      name: 'Videos',
      data: {},
      type: 'folder',
      children: [
        { name: 'video1.mp4', data: {}, type: 'file' },
      ],
    },
  ];

  nestedTreeData = [
    {
      name: 'material2',
      data: {},
      type: 'folder',
      expandable: true,
      children: [
        {
          name: 'src',
          data: {},
          type: 'folder',
          expandable: true,
          children: [
            {
              name: 'cdk',
              data: {},
              type: 'folder',
              children: [
                { name: 'package.json', data: {}, type: 'file' },
                { name: 'BUILD.bazel', data: {}, type: 'file' },
              ],
            },
            { name: 'lib', data: {}, type: 'folder' },
          ],
        },
      ],
    },
    {
      name: 'angular',
      data: {},
      type: 'folder',
      expandable: true,
      children: [
        {
          name: 'packages',
          data: {},
          type: 'folder',
          children: [
            { name: '.travis.yml', data: {}, type: 'file' },
            { name: 'firebase.json', data: {}, type: 'file' },
          ],
        },
        { name: 'package.json', data: {}, type: 'file' },
      ],
    },
  ];

  currentCode: { [key: string]: string } = {
    basic: '',
    customTemplate: '',
    nested: '',
  };

  treeCodeSnippets: { [key: string]: { [key: string]: string } } = {
    basic: {
      default: `<!-- Basic Tree -->
<bntv-tree
  [treeData]="treeData"
  [nodeTemplate]="basicNodeTemplate"
></bntv-tree>

<ng-template #basicNodeTemplate let-local="treeData">
  <div fxLayout="row" fxLayoutAlign="space-around center" style="width: 100%;">
    <div>{{ local.node.name }}</div>
  </div>
</ng-template>

<!-- TypeScript -->
treeData = [
  {
    name: 'Documents',
    type: 'folder',
    children: [
      { name: 'report.pdf', type: 'file' },
      { name: 'presentation.pptx', type: 'file' },
    ],
  },
];`,
    },
    customTemplate: {
      default: `<!-- Tree with Custom Template -->
<bntv-tree
  [treeData]="treeData"
  [nodeTemplate]="customNodeTemplate"
></bntv-tree>

<ng-template #customNodeTemplate let-local="treeData">
  <div fxLayout="row" fxLayoutAlign="space-around center" style="width: 100%;">
    <bntv-icon
      [iconName]="local.node.type === 'folder' ? 'Folder-Outline' : 'File-Outline'"
      [fontSet]="'icomoon'"
      [type]="'fontset'"
    ></bntv-icon>
    <span>{{ local.node.name }}</span>
  </div>
</ng-template>`,
    },
    nested: {
      default: `<!-- Nested Tree with Custom Transformer -->
<bntv-tree
  [treeData]="treeData"
  [nodeTemplate]="nodeTemplate"
  [hasChildFun]="hasChildFun"
  [transformerFun]="transformerFun"
></bntv-tree>

<!-- TypeScript -->
hasChildFun(index: number, node: any): boolean {
  return node.expandable;
}

transformerFun(node: any, level: number): any {
  return {
    name: node.name,
    data: node.data,
    type: node.type,
    level: level,
    expandable: !!node.children && node.children.length > 0,
  };
}`,
    },
  };

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    Object.keys(this.currentCode).forEach((key) => {
      this.currentCode[key] = this.treeCodeSnippets[key]?.default || '';
    });
  }

  onVariantClick(section: string, variant: string = 'default'): void {
    if (this.treeCodeSnippets[section] && this.treeCodeSnippets[section][variant]) {
      this.currentCode[section] = this.treeCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }

  hasChildFun(index: number, node: any): boolean {
    return node.expandable;
  }

  transformerFun(node: any, level: number): any {
    return {
      name: node.name,
      data: node.data,
      type: node.type,
      level: level,
      expandable: !!node.children && node.children.length > 0,
    };
  }

  onNodeToggle(event: any): void {
    console.log('Node toggled:', event);
  }
}
