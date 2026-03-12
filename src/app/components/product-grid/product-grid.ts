import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-grid.html',
  styleUrl: './product-grid.css'
})
export class ProductGrid {

productos = [
  { nombre: 'Robe Romantique', precio: '89.99€', imagen: 'assets/images/imagen1.jfif' },
  { nombre: 'Robe Dentelle', precio: '75.00€', imagen: 'assets/images/imagen2.png' },
  { nombre: 'Robe Dentelle', precio: '85.00€', imagen: 'assets/images/imagen3.png' },
  { nombre: 'Robe Dentelle', precio: '95.00€', imagen: 'assets/images/imagen4.jfif' },
  // ... agrega todos los que quieras
];


}


