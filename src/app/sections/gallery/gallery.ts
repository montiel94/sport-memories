import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {
  /** Fotos de trabajos terminados. Mientras `src` esté vacío se muestra el marcador. */
  protected readonly photos: { src: string; alt: string }[] = [
    { src: '', alt: 'Cuadro de triatlón' },
    { src: '', alt: 'Cuadro de maratón' },
    { src: '', alt: 'Cuadro de ciclismo' },
  ];
}
