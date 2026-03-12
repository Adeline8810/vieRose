import { Component, signal } from '@angular/core';


import { CommonModule } from '@angular/common'; // Importante
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Features } from './components/features/features';
import { ProductGrid} from './components/product-grid/product-grid';
import { TopBar } from './components/top-bar/top-bar';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar,TopBar,RouterOutlet,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('vieRose');
}
