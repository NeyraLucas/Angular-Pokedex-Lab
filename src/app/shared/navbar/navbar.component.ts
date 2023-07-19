import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public links = [
    { routerLink: ['home/list/fire-pokemons'], text: 'Fire Pokemons' },
    { routerLink: ['home/list/water-pokemons'], text: 'Water Pokemons' },
    { routerLink: ['home/list/grass-pokemons'], text: 'Grass Pokemons' },
    { routerLink: ['home/list/ground-pokemons'], text: 'Ground Pokemons' },
  ];
}
