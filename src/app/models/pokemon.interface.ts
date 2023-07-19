export interface IPokemon {
  name: string;
  url: string;
}
export interface IPokemonListResponse {
  results: IPokemon[];
  previous: string;
  next: string;
}
