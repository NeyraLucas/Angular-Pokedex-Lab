import { AfterViewInit, Component, Input, ViewChild, OnChanges } from '@angular/core';
import { IPokemon } from 'src/app/models/pokemon.interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { PokemonsService } from 'src/app/services/pokemons.service';
import { MatDialog } from '@angular/material/dialog';
import { PokemonDetailsComponent } from 'src/app/pages/pokemon-details/pokemon-details.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements AfterViewInit, OnChanges {
  @Input() params!: string | null;
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
  ngAfterViewInit() {
    this.loadTableData();
  }

  ngOnChanges() {
    console.log('changed');
    this.loadTableData();
  }
  private loadTableData() {
    let url = 'https://pokeapi.co/api/v2/pokemon?limit=500';
    if(this.params !== '') {
      const str: any = this.params;
      const formattedStr = str.replace('-pokemons', '');
      url = `https://pokeapi.co/api/v2/type/${formattedStr}`;
    }
    this._servicePokemons
    .GetAllPokemons(url)
    .subscribe((pokemon: any) => {
      this.dataSource = new MatTableDataSource(pokemon.pokemon);
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

//https://pokeapi.co/api/v2/pokemon?limit=500
