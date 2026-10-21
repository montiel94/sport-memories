import { Component } from '@angular/core';
import { SITE } from '../../site-config';

@Component({
  selector: 'app-process',
  templateUrl: './process.html',
  styleUrl: './process.scss',
})
export class Process {
  protected readonly steps = [
    {
      title: 'Cuéntanos tu carrera',
      text: 'Nos envías el archivo de tu ruta, tus tiempos por tramo y una foto de tu medalla.',
    },
    {
      title: 'Diseñamos el relieve',
      text: 'Modelamos el terreno real de tu recorrido y trazamos tu ruta sobre él.',
    },
    {
      title: 'Lo imprimimos en 3D',
      text: 'Capa a capa, con base negra mate para que tu ruta destaque.',
    },
    {
      title: 'Lo enmarcamos',
      text: `Medalla, mapa y tiempos juntos, listos para colgar. Plazo de entrega: ${SITE.deliveryTime}.`,
    },
  ];
}
