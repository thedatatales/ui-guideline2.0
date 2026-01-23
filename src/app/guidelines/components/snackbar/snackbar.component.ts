import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { SnackbarService } from '@enttribe/core/tools/snackbar';

@Component({
  standalone: false,
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent implements OnInit {
  sampleMessage = 'Operation completed successfully!';

  currentCode: { [key: string]: string } = {
    basic: '',
    withTitle: '',
    solid: '',
  };

  snackbarCodeSnippets: { [key: string]: { [key: string]: string } } = {
    basic: {
      default: `<!-- Basic Snackbar Usage -->
<!-- Inject SnackbarService in component -->
constructor(private snackbar: SnackbarService) {}

<!-- Success Snackbar -->
this.snackbar.success('Data saved successfully!');

<!-- Error Snackbar -->
this.snackbar.error('An error occurred while saving data.');

<!-- Warning Snackbar -->
this.snackbar.warning('Please review your changes before proceeding.');

<!-- Info Snackbar -->
this.snackbar.info('Processing your request...');`,
    },
    withTitle: {
      default: `<!-- Snackbar with Title and Icon -->
<!-- Success with Title and Icon -->
this.snackbar.successWithTitleAndIcon(
  'Data saved successfully!',
  'Success',
  'Check'
);

<!-- Error with Title and Icon -->
this.snackbar.errorWithTitleAndIcon(
  'Failed to save data.',
  'Error',
  'info_outline'
);

<!-- Warning with Title and Icon -->
this.snackbar.warningWithTitleAndIcon(
  'Please review your changes.',
  'Warning',
  'Warning-Outlined'
);

<!-- Info with Title and Icon -->
this.snackbar.infoWithTitleAndIcon(
  'Processing request...',
  'Info',
  'info_outline'
);`,
    },
    solid: {
      default: `<!-- Solid Type Snackbars -->
<!-- Success Solid -->
this.snackbar.success(
  'Data saved successfully!',
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  'solid'
);

<!-- Error Solid -->
this.snackbar.error(
  'An error occurred!',
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  'solid'
);

<!-- Custom Snackbar -->
this.snackbar.custom(
  'Custom message',
  undefined,
  undefined,
  undefined,
  undefined,
  true,
  'sparkle-bold',
  'success'
);`,
    },
  };

  constructor(
    private clipboard: Clipboard,
    private snackbar: SnackbarService
  ) {}

  ngOnInit(): void {
    Object.keys(this.currentCode).forEach((key) => {
      this.currentCode[key] = this.snackbarCodeSnippets[key]?.default || '';
    });
  }

  onVariantClick(section: string, variant: string = 'default'): void {
    if (this.snackbarCodeSnippets[section] && this.snackbarCodeSnippets[section][variant]) {
      this.currentCode[section] = this.snackbarCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }

  showSuccess(): void {
    this.snackbar.success(this.sampleMessage);
  }

  showError(): void {
    this.snackbar.error(this.sampleMessage);
  }

  showWarning(): void {
    this.snackbar.warning(this.sampleMessage);
  }

  showInfo(): void {
    this.snackbar.info(this.sampleMessage);
  }

  showSuccessWithTitle(): void {
    this.snackbar.successWithTitleAndIcon(this.sampleMessage, 'Success', 'Check');
  }

  showErrorWithTitle(): void {
    this.snackbar.errorWithTitleAndIcon(this.sampleMessage, 'Error', 'info_outline');
  }

  showSuccessSolid(): void {
    this.snackbar.success(this.sampleMessage, undefined, undefined, undefined, undefined, undefined, 'solid');
  }

  showErrorSolid(): void {
    this.snackbar.error(this.sampleMessage, undefined, undefined, undefined, undefined, undefined, 'solid');
  }
}
