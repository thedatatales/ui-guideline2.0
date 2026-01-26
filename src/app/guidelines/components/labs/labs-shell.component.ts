import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'pmgt-labs-shell',
  template: '<div class="labs-shell"><router-outlet></router-outlet></div>',
  styles: ['.labs-shell { min-height: 100%; }'],
})
export class LabsShellComponent {}
