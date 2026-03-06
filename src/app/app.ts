import { Component, signal } from '@angular/core';


import { MenuDesplegable } from './features/dropdown/components/menu-desplegable/menu-desplegable';

@Component({
  selector: 'app-root',
  imports: [MenuDesplegable],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proyectoOnsengo');
}
