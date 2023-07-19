import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PokemonsService } from 'src/app/services/pokemons.service';
import { Observable, of } from 'rxjs';
import { IPokemon } from 'src/app/models/pokemon.interface';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
})
export class PokemonDetailsComponent implements OnInit {
  public pokemonResponse$!: Observable<any>;
  constructor(
    public dialogRef: MatDialogRef<PokemonDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _servicePokemons: PokemonsService
  ) {}

  ngOnInit() {
    console.log(this.data.url);
    this.loadData(this.data.url);
  }

  public loadData(url: string) {
    this._servicePokemons.GetAllPokemons(url).subscribe((data) =>{
      console.log(data);
      this.pokemonResponse$ = of(data);
    })
  }
}
