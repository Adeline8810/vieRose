import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Nouveautes } from './components/nouveautes/nouveautes';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Esto hace que al entrar a la web, cargue 'home'
  { path: 'home', component: Home },
  { path: 'nouveautes', component: Nouveautes },
];
