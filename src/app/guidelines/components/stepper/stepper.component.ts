import { Component, OnInit, ViewChild } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { StepperComponent as BntvStepperComponent, CardStepperComponent } from '@enttribe/core/tools/stepper';
import { UntypedFormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  standalone: false,
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit {
  @ViewChild('stepper') stepper: BntvStepperComponent;
  @ViewChild('basicStepper') basicStepper: BntvStepperComponent;
  @ViewChild('verticalStepper') verticalStepper: BntvStepperComponent;
  @ViewChild('linearStepper') linearStepper: BntvStepperComponent;
  @ViewChild('compactStepper') compactStepper: BntvStepperComponent;
  @ViewChild('timelineStepper') timelineStepper: BntvStepperComponent;
  @ViewChild('cardStepper') cardStepper: CardStepperComponent;

  step1FormGroup = new UntypedFormGroup({
    name: new FormControl('', Validators.required),
  });

  step2FormGroup = new UntypedFormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  step3FormGroup = new UntypedFormGroup({
    address: new FormControl('', Validators.required),
  });

  get nameControl(): FormControl {
    return this.step1FormGroup.get('name') as FormControl;
  }

  get emailControl(): FormControl {
    return this.step2FormGroup.get('email') as FormControl;
  }

  currentCode: { [key: string]: string } = {
    basic: '',
    vertical: '',
    linear: '',
    compactProgress: '',
    progressTimeline: '',
    cardStepper: '',
  };

  stepperCodeSnippets: { [key: string]: { [key: string]: string } } = {
    basic: {
      default: `<!-- Basic Horizontal Stepper -->
<bntv-stepper [labelPosition]="'bottom'">
  <bntv-step [stepLabel]="'Step 1'">
    <div>Content for step 1</div>
  </bntv-step>
  <bntv-step [stepLabel]="'Step 2'">
    <div>Content for step 2</div>
  </bntv-step>
  <bntv-step [stepLabel]="'Step 3'">
    <div>Content for step 3</div>
  </bntv-step>
</bntv-stepper>`,
    },
    vertical: {
      default: `<!-- Vertical Stepper -->
<bntv-stepper 
  [type]="'vertical'"
  [labelPosition]="'end'"
>
  <bntv-step [stepLabel]="'Step 1'" [stepDescription]="'Description for step 1'">
    <div>Content for step 1</div>
  </bntv-step>
  <bntv-step [stepLabel]="'Step 2'" [stepDescription]="'Description for step 2'">
    <div>Content for step 2</div>
  </bntv-step>
</bntv-stepper>`,
    },
    linear: {
      default: `<!-- Linear Stepper with Form Validation -->
<bntv-stepper [isLinear]="true" [labelPosition]="'bottom'">
  <bntv-step 
    [stepLabel]="'Account Information'"
    [stepFormGroup]="step1FormGroup"
  >
    <div>
      <bntv-input-box
        [label]="'Name'"
        [formControl]="step1FormGroup.get('name')"
      ></bntv-input-box>
    </div>
  </bntv-step>
  <bntv-step 
    [stepLabel]="'Contact Details'"
    [stepFormGroup]="step2FormGroup"
  >
    <div>
      <bntv-input-box
        [label]="'Email'"
        [formControl]="step2FormGroup.get('email')"
      ></bntv-input-box>
    </div>
  </bntv-step>
</bntv-stepper>

<!-- TypeScript -->
step1FormGroup = new UntypedFormGroup({
  name: new FormControl('', Validators.required),
});

step2FormGroup = new UntypedFormGroup({
  email: new FormControl('', [Validators.required, Validators.email]),
});`,
    },
    compactProgress: {
      default: `<!-- Compact Progress Stepper -->
<bntv-stepper 
  [type]="'compactProgress'"
  [labelPosition]="'bottom'"
  [isStreched]="true"
>
  <bntv-step 
    [stepLabel]="'Step 1'"
    [iconName]="'Delete-Outline'"
  >
    <div>Content for step 1</div>
  </bntv-step>
  <bntv-step 
    [stepLabel]="'Step 2'"
    [iconName]="'Edit-Outline'"
  >
    <div>Content for step 2</div>
  </bntv-step>
  <bntv-step 
    [stepLabel]="'Step 3'"
    [iconName]="'Plus'"
  >
    <div>Content for step 3</div>
  </bntv-step>
</bntv-stepper>`,
    },
    progressTimeline: {
      default: `<!-- Progress Timeline Stepper -->
<bntv-stepper 
  [type]="'progressTimeline'"
  [selectedIndex]="2"
>
  <bntv-step 
    [stepLabel]="'New'"
    [stepDescription]="'10:00 AM • 20min'"
  >
    <div>Content for step 1</div>
  </bntv-step>
  <bntv-step 
    [stepLabel]="'Open'"
    [stepDescription]="'10:20 AM • 1h 50min'"
  >
    <div>Content for step 2</div>
  </bntv-step>
  <bntv-step 
    [stepLabel]="'Provisioning'"
    [stepDescription]="'Started: 12:10 PM • Elapsed: 1h 55min'"
  >
    <div>Content for step 3</div>
  </bntv-step>
  <bntv-step 
    [stepLabel]="'Delivered'"
    [stepDescription]="'Not Started • 1h'"
  >
    <div>Content for step 4</div>
  </bntv-step>
</bntv-stepper>`,
    },
    cardStepper: {
      default: `<!-- Card Stepper -->
<bntv-card-stepper [cardType]="'normal'">
  <bntv-step-card [heading]="'Card 1'">
    <div>Content for card 1</div>
  </bntv-step-card>
  <bntv-step-card [heading]="'Card 2'">
    <div>Content for card 2</div>
  </bntv-step-card>
  <bntv-step-card [heading]="'Card 3'">
    <div>Content for card 3</div>
  </bntv-step-card>
</bntv-card-stepper>`,
    },
  };

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
    Object.keys(this.currentCode).forEach((key) => {
      this.currentCode[key] = this.stepperCodeSnippets[key]?.default || '';
    });
  }

  onVariantClick(section: string, variant: string = 'default'): void {
    if (this.stepperCodeSnippets[section] && this.stepperCodeSnippets[section][variant]) {
      this.currentCode[section] = this.stepperCodeSnippets[section][variant];
    }
  }

  copyCode(section: string): void {
    this.clipboard.copy(this.currentCode[section]);
  }

  nextStep(): void {
    if (this.stepper) {
      this.stepper.selectedIndex = (this.stepper.selectedIndex || 0) + 1;
    }
  }

  previousStep(): void {
    if (this.stepper) {
      this.stepper.selectedIndex = Math.max(0, (this.stepper.selectedIndex || 0) - 1);
    }
  }

  nextBasicStep(): void {
    if (this.basicStepper) {
      const maxIndex = 2; // 3 steps (0, 1, 2)
      if ((this.basicStepper.selectedIndex || 0) < maxIndex) {
        this.basicStepper.selectedIndex = (this.basicStepper.selectedIndex || 0) + 1;
      }
    }
  }

  previousBasicStep(): void {
    if (this.basicStepper) {
      this.basicStepper.selectedIndex = Math.max(0, (this.basicStepper.selectedIndex || 0) - 1);
    }
  }

  nextVerticalStep(): void {
    if (this.verticalStepper) {
      const maxIndex = 2; // 3 steps (0, 1, 2)
      if ((this.verticalStepper.selectedIndex || 0) < maxIndex) {
        this.verticalStepper.selectedIndex = (this.verticalStepper.selectedIndex || 0) + 1;
      }
    }
  }

  previousVerticalStep(): void {
    if (this.verticalStepper) {
      this.verticalStepper.selectedIndex = Math.max(0, (this.verticalStepper.selectedIndex || 0) - 1);
    }
  }

  nextLinearStep(): void {
    if (this.linearStepper) {
      const maxIndex = 2; // 3 steps (0, 1, 2)
      if ((this.linearStepper.selectedIndex || 0) < maxIndex) {
        this.linearStepper.selectedIndex = (this.linearStepper.selectedIndex || 0) + 1;
      }
    }
  }

  previousLinearStep(): void {
    if (this.linearStepper) {
      this.linearStepper.selectedIndex = Math.max(0, (this.linearStepper.selectedIndex || 0) - 1);
    }
  }

  nextCompactStep(): void {
    if (this.compactStepper) {
      const maxIndex = 2; // 3 steps (0, 1, 2)
      if ((this.compactStepper.selectedIndex || 0) < maxIndex) {
        this.compactStepper.selectedIndex = (this.compactStepper.selectedIndex || 0) + 1;
      }
    }
  }

  previousCompactStep(): void {
    if (this.compactStepper) {
      this.compactStepper.selectedIndex = Math.max(0, (this.compactStepper.selectedIndex || 0) - 1);
    }
  }

  nextTimelineStep(): void {
    if (this.timelineStepper) {
      const maxIndex = 3; // 4 steps (0, 1, 2, 3)
      if ((this.timelineStepper.selectedIndex || 0) < maxIndex) {
        this.timelineStepper.selectedIndex = (this.timelineStepper.selectedIndex || 0) + 1;
      }
    }
  }

  previousTimelineStep(): void {
    if (this.timelineStepper) {
      this.timelineStepper.selectedIndex = Math.max(0, (this.timelineStepper.selectedIndex || 0) - 1);
    }
  }

  nextCardStep(): void {
    if (this.cardStepper) {
      this.cardStepper.nextStep();
    }
  }

  previousCardStep(): void {
    if (this.cardStepper) {
      this.cardStepper.prevStep();
    }
  }
}
