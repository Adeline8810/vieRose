import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu'; // <-- Importa esto
import { MatButtonModule } from '@angular/material/button'; // <-- Importa est

@Component({
  selector: 'app-menu-desplegable',
  imports: [MatMenuModule, MatButtonModule],
  templateUrl: './menu-desplegable.html',
  styleUrl: './menu-desplegable.css',
})
export class MenuDesplegable {

}
