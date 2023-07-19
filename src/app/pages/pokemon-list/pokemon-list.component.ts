import { Component, OnInit, ViewChild } from '@angular/core';
import { IPokemon } from 'src/app/models/pokemon.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { PokemonsService } from 'src/app/services/pokemons.service';
import { PokemonDetailsComponent } from '../pokemon-details/pokemon-details.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  public pokemonList: IPokemon[] = [];
  public previousUrl: string | null = null;
  public nextUrl: string | null = null;
  public isLoading = true;

  //init table
  public displayedColumns: string[] = ['name', 'url', 'actions'];
  public data: any[] = [];
  public dataSource = new MatTableDataSource(this.data);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _servicePokemons: PokemonsService, private _dialog: MatDialog) {}

  ngOnInit() {
    this._servicePokemons.GetAllPokemons('https://pokeapi.co/api/v2/pokemon?limit=500').subscribe((pokemon: any) => {
      this.dataSource = new MatTableDataSource(pokemon.results);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  public openModal(url: string) {
    const dialogRef = this._dialog.open(PokemonDetailsComponent, {
      width: '500px',
      data: { url: url }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
