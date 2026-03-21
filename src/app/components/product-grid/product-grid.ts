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

// Agrega esto justo debajo de tu lista de productos
  generarLinkWhatsApp(nombreProducto: string): string {
    const numeroTelefono = "51977754815"; // Cambia este número por el tuyo
    const mensaje = `Hola, estoy interesado en el vestido: ${nombreProducto}. ¿Cómo puedo realizar el pago?`;
    return `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;
  }

}


