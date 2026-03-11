import { Component, signal } from '@angular/core';


import { CommonModule } from '@angular/common'; // Importante
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Features } from './components/features/features';
import { ProductGrid} from './components/product-grid/product-grid';
import { TopBar } from './components/top-bar/top-bar';



@Component({
  selector: 'app-root',
  imports: [Navbar,Hero,Features,ProductGrid,TopBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('vieRose');
}
