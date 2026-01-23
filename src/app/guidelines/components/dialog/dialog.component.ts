import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { GenericModalService } from '@enttribe/core/tools/generic-modal';
import { MatDialogConfig } from '@angular/material/dialog';

@Component({
  standalone: false,
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  @ViewChild('dialogTemplate') dialogTemplate: TemplateRef<any>;
  @ViewChild('confirmationTemplate') confirmationTemplate: TemplateRef<any>;

  currentCode: { [key: string]: string } = {
    component: '',
    template: '',
    confirmation: '',
  };

  dialogCodeSnippets: { [key: string]: { [key: string]: string } } = {
    component: {
      default: `<!-- Open Dialog with Component -->
<button mat-button (click)="openComponentDialog()">Open Dialog</button>

<!-- TypeScript -->
import { GenericModalService } from '@enttribe/core/tools/generic-modal';
import { MyDialogComponent } from './my-dialog.component';

constructor(private genericModalService: GenericModalService) {}

openComponentDialog(): void {
  const dialogRef = this.genericModalService.openDialog(MyDialogComponent, {
    width: '500px',
    height: '400px',
    data: {
      title: 'Dialog Title',
      message: 'Dialog message',
    },
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('Dialog closed with result:', result);
  });
}`,
    },
    template: {
      default: `<!-- Open Dialog with Template -->
<button mat-button (click)="openTemplateDialog()">Open Dialog</button>

<ng-template #dialogTemplate>
  <div>
    <h2>Dialog Title</h2>
    <p>Dialog content goes here</p>
    <button mat-button (click)="closeDialog()">Close</button>
  </div>
</ng-template>

<!-- TypeScript -->
@ViewChild('dialogTemplate') dialogTemplate: TemplateRef<any>;

constructor(private genericModalService: GenericModalService) {}

openTemplateDialog(): void {
  const dialogRef = this.genericModalService.openDialog(this.dialogTemplate, {
    width: '500px',
    height: '400px',
    hasBackdrop: true,
    disableClose: false,
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('Dialog closed');
  });
}

closeDialog(): void {
  // Close dialog from template
  this.genericModalService.closeDialog();
}`,
    },
    confirmation: {
      default: `<!-- Confirmation Dialog -->
<button mat-button (click)="openConfirmationDialog()">Confirm Action</button>

<!-- TypeScript -->
constructor(private genericModalService: GenericModalService) {}

openConfirmationDialog(): void {
  const dialogRef = this.genericModalService.openDialogConfirmation(
    'Are you sure you want to delete this item?',
    'Delete',
    'Cancel',
    'Confirmation'
  );
  dialogRef.afterClosed().subscribe(result => {
    if (result === 'OK') {
      console.log('User confirmed');
      // Perform action
    } else {
      console.log('User cancelled');
    }
  });
}`,
    },
  };

  constructor(
    private clipboard: Clipboard,
    private genericModalService: GenericModalService
  ) {}

  ngOnInit(): void {
    Object.keys(this.currentCode).forEach((key) => {
      this.currentCode[key] = this.dialogCodeSnippets[key]?.default || '';
    });
  }

  onVariantClick(section: string, variant: string = 'default'): void {
    if (this.dialogCodeSnippets[section] && this.dialogCodeSnippets[section][variant]) {
      this.currentCode[section] = this.dialogCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }

  openComponentDialog(): void {
    // Example: Opening a dialog with a component
    // In real usage, you would pass an actual component
    console.log('Opening component dialog');
  }

  openTemplateDialog(): void {
    if (this.dialogTemplate) {
      const dialogRef = this.genericModalService.openDialog(this.dialogTemplate, {
        width: '500px',
        height: '300px',
        hasBackdrop: true,
        disableClose: false,
      });

      dialogRef.afterClosed().subscribe(() => {
        console.log('Dialog closed');
      });
    }
  }

  openConfirmationDialog(): void {
    const dialogRef = this.genericModalService.openDialogConfirmation(
      'Are you sure you want to perform this action?',
      'Confirm',
      'Cancel',
      'Confirmation'
    );
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'OK') {
        console.log('User confirmed');
      } else {
        console.log('User cancelled');
      }
    });
  }

  closeDialog(): void {
    // This would typically be called from within the dialog template
    // For demo purposes, we'll just log
    console.log('Closing dialog');
  }
}
