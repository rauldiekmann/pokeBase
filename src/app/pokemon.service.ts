//The @Injectabe decorator marks the calls as one that participates in the dependency injection system

/**Removing data access from components means you can change your mind about the implementation anytime,
 *  without touching any components. They don't know how the service works. */
import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  //return mock pockemons
  /*Function not in use as it is synchronous
  getPokemons(): Pokemon[]{
    return POKEMONS;
  } */
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
  

  constructor() { }
}
