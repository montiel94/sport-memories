import { Component } from '@angular/core';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.html',
  styleUrl: './showcase.scss',
})
export class Showcase {
  protected readonly features = [
    { name: 'Medalla', detail: 'Al centro, como protagonista' },
    { name: 'Relieve 3D', detail: 'Tu ruta sobre el terreno real' },
    { name: 'Tiempos', detail: 'Cada tramo, grabado' },
  ];

  protected readonly splits = [
    { x: 120, label: 'NATACIÓN', time: '00:00:00' },
    { x: 300, label: 'CICLISMO', time: '00:00:00' },
    { x: 480, label: 'CARRERA', time: '00:00:00' },
  ];

  /** Curvas de nivel del mapa: dos cerros dibujados con elipses concéntricas. */
  protected readonly hills = [
    {
      cx: 380,
      cy: 200,
      rotate: -18,
      rings: [[30, 14], [62, 30], [96, 48], [132, 68], [170, 90], [210, 114]],
    },
    {
      cx: 150,
      cy: 270,
      rotate: 14,
      rings: [[22, 12], [50, 26], [82, 42], [118, 60]],
    },
  ];
}
