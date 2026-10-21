import { Component } from '@angular/core';
import { Logo } from '../../shared/logo/logo';
import { SITE } from '../../site-config';

@Component({
  selector: 'app-footer',
  imports: [Logo],
  template: `
    <footer class="footer">
      <app-logo />
      <span class="footer__note muted">Hecho en Chile · © {{ year }} Sport Memories</span>
    </footer>
  `,
  styles: `
    .footer {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
      padding: 48px var(--sm-gutter);
      border-top: var(--sm-border);
    }

    .footer__note {
      font-size: 13px;
    }
  `,
})
export class Footer {
  protected readonly year = SITE.year;
}
