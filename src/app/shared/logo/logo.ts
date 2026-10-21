import { Component, input } from '@angular/core';

/** Logotipo tipográfico: "SPORT" y "MEMORIES" justificados al mismo ancho. */
@Component({
  selector: 'app-logo',
  template: `
    <span class="logo" [class.logo--hero]="size() === 'hero'" role="img" aria-label="Sport Memories">
      <span class="logo__top" aria-hidden="true">
        @for (letter of top; track $index) {
          <span>{{ letter }}</span>
        }
      </span>
      <span class="logo__bottom" aria-hidden="true">
        @for (letter of bottom; track $index) {
          <span>{{ letter }}</span>
        }
      </span>
    </span>
  `,
  styleUrl: './logo.scss',
})
export class Logo {
  readonly size = input<'small' | 'hero'>('small');

  protected readonly top = [...'SPORT'];
  protected readonly bottom = [...'MEMORIES'];
}
