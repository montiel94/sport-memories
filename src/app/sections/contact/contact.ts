import { Component } from '@angular/core';
import { SITE } from '../../site-config';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly site = SITE;
}
