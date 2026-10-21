import { Component } from '@angular/core';
import { Logo } from '../../shared/logo/logo';

@Component({
  selector: 'app-hero',
  imports: [Logo],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {}
