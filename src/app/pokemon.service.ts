//The @Injectabe decorator marks the calls as one that participates in the dependency injection system

/**Removing data access from components means you can change your mind about the implementation anytime,
 *  without touching any components. They don't know how the service works. */
import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'; // Import the map operator from RxJS


@Injectable({
  providedIn: 'root'
})

export class PokemonService {
  private pokemonsUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  // Retrieve a list of Pokémon
  //map results because pokemons are inside the "response" parameter
  //of retrieved JSON information
  getPokemons(limit: number, offset: number): Observable<any[]> {
    const url = `${this.pokemonsUrl}?limit=${limit}&offset=${offset}`;
    return this.http.get<any>(url).pipe(
      map((response:any) => response.results)
    );
  }

  // Retrieve a specific Pokémon by its name
  getPokemonDetails(name: string): Observable<any> {
    const url = `${this.pokemonsUrl}/${name}`;
    return this.http.get<any>(url);
  }
}
















/*
OLD METHOD WITH MOCK POKEMONS
*export class PokemonService {
  //return mock pockemons
  /*Function not in use as it is synchronous
  getPokemons(): Pokemon[]{
    return POKEMONS;
  } 
  //function using Obervable and of from RxJS
  getPokemons(): Observable<Pokemon[]> {
    const pokemons = of(POKEMONS);
    return pokemons;
  }

  //VITAL este es el componente que se modifica para usar una http request
  // y llamar a la api de pokemon

  getPokemon(id: number): Observable<Pokemon> {
    // For now, assume that a pokemon with the specified `id` always exists
    //No error handling implemented yet
    const pokemon = POKEMONS.find(h => h.id === id)!;
    return of(pokemon);
  }
  
  //inject http client into the constructor
  constructor(
    private http: HttpClient) { }

    private pokemonsUrl = 'https://pokeapi.co/api/v2/';


}
 */
