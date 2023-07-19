import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  constructor(private http: HttpClient) {}

  /**
   * GetAllPokemons
   */
  public GetAllPokemons(urlApi: string) {
    const url:string = urlApi;
    return this.http.get<any[]>(url);
  }
}
