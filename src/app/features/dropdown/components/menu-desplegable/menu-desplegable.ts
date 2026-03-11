import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu'; // <-- Importa esto
import { MatButtonModule } from '@angular/material/button'; // <-- Importa est
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-menu-desplegable',
  imports: [MatMenuModule, MatButtonModule,MatExpansionModule],
  templateUrl: './menu-desplegable.html',
  styleUrl: './menu-desplegable.css',
})
export class MenuDesplegable {

}
