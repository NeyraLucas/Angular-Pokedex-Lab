import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { MaterialSharedModule } from '../modules/material.shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { ListForTypeComponent } from './list-for-type/list-for-type.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    PokemonListComponent,
    PokemonDetailsComponent,
    ListForTypeComponent,
  ],
  imports: [CommonModule, MaterialSharedModule, AppRoutingModule, SharedModule],
  exports: [
    HomeComponent,
    PokemonListComponent,
    PokemonDetailsComponent,
    ListForTypeComponent,
  ],
})
export class PagesModule {}
