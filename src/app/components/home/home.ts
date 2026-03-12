import { Component } from '@angular/core';
import { Hero } from '../hero/hero';           // Ajusta la ruta según donde estén
import { Features } from '../features/features';
import { ProductGrid } from '../product-grid/product-grid';
import { Nouveautes } from '../nouveautes/nouveautes';

@Component({
  selector: 'app-home',
  standalone: true,
  // ¡Aquí está el truco! Tienes que listarlos aquí para poder usarlos en el HTML
  imports: [Hero, Features, ProductGrid,Nouveautes],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home { }
