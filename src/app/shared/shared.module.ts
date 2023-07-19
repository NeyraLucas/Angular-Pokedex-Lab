import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './components/table/table.component';
import { CardComponent } from './components/card/card.component';
import { MaterialSharedModule } from '../modules/material.shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
    TableComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MaterialSharedModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    TableComponent,
    CardComponent
  ]
})
export class SharedModule { }
