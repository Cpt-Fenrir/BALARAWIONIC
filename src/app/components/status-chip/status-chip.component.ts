import { Component, input } from '@angular/core';

export type StatusTone = 'positive' | 'warning' | 'muted' | 'accent';

@Component({
  selector: 'app-status-chip',
  templateUrl: './status-chip.component.html',
  styleUrls: ['./status-chip.component.scss'],
})
export class StatusChipComponent {
  readonly label = input.required<string>();
  readonly tone = input<StatusTone>('muted');
}
