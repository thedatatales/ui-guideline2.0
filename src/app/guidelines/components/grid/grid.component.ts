import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { GridOptions, IGridConfig } from '@enttribe/core/grid';

@Component({
  standalone: false,
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  basicGridConfig: IGridConfig = {
    gridOptions: {
      columnDefs: [
        { headerName: 'ID', field: 'id', width: 100 },
        { headerName: 'Name', field: 'name', width: 200 },
        { headerName: 'Email', field: 'email', width: 250 },
        { headerName: 'Status', field: 'status', width: 150 },
      ],
      rowData: [
        { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Active' },
        { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'Inactive' },
      ],
    },
  };

  serverSideGridConfig: IGridConfig = {
    gridOptions: {
      columnDefs: [
        { headerName: 'ID', field: 'id', width: 100 },
        { headerName: 'Name', field: 'name', width: 200 },
        { headerName: 'Email', field: 'email', width: 250 },
      ],
      rowModelType: 'serverSide',
    },
  };

  currentCode: { [key: string]: string } = {
    basic: '',
    serverSide: '',
  };

  gridCodeSnippets: { [key: string]: { [key: string]: string } } = {
    basic: {
      default: `<!-- Basic Grid -->
<bntv-gx-ag-grid
  [agGridName]="'basic-grid'"
  [agGridMode]="'clientSide'"
  [agGridConfig]="gridConfig"
  (agGridOnReady)="onGridReady($event)"
></bntv-gx-ag-grid>

<!-- gridConfig structure -->
gridConfig: IGridConfig = {
  gridOptions: {
    columnDefs: [
      { headerName: 'ID', field: 'id', width: 100 },
      { headerName: 'Name', field: 'name', width: 200 },
      { headerName: 'Email', field: 'email', width: 250 }
    ],
    rowData: [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
    ]
  }
};`,
    },
    serverSide: {
      default: `<!-- Server-Side Grid -->
<bntv-gx-ag-grid
  [agGridName]="'server-grid'"
  [agGridMode]="'serverSide'"
  [agGridConfig]="gridConfig"
  [agGridInitialApiCall]="true"
  (agGridOnReady)="onGridReady($event)"
></bntv-gx-ag-grid>

<!-- Server-side gridConfig -->
gridConfig: IGridConfig = {
  gridOptions: {
    columnDefs: [
      { headerName: 'ID', field: 'id', width: 100 },
      { headerName: 'Name', field: 'name', width: 200 }
    ],
    rowModelType: 'serverSide'
  }
};`,
    },
  };

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    Object.keys(this.currentCode).forEach((key) => {
      this.currentCode[key] = this.gridCodeSnippets[key]?.default || '';
    });
  }

  onVariantClick(section: string, variant: string = 'default'): void {
    if (this.gridCodeSnippets[section] && this.gridCodeSnippets[section][variant]) {
      this.currentCode[section] = this.gridCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }

  onGridReady(event: any): void {
    console.log('Grid ready:', event);
  }
}
