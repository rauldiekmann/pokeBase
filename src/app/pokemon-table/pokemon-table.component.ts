import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
@Component({
  selector: 'app-pokemon-table',
  templateUrl: './pokemon-table.component.html',
  styleUrls: ['./pokemon-table.component.css']
})
export class PokemonTableComponent {
  selectedPokemon?: Pokemon;
  pokemons: Pokemon[] = [];

  
  //Inject PokemonService
  /**The parameter simultaneously defines a private pokemonService property and identifies it as a PokemonService injection site. */
  constructor(private pokemonService: PokemonService) {}
  //Create a method to retrieve pokemons from the service
  /**Synchronous method
   *  getPokemons() : void{
    this.pokemons = this.pokemonService.getPokemons();
  }
   */
  //asynchronous method to call service
  /*waits for the Observable to emit the array of heroes, 
  which could happen now or several minutes from now. 
  The subscribe() method passes the emitted array to the callback,
   which sets the component's heroes property. */
  getPokemons(): void {
    this.pokemonService.getPokemons()
        .subscribe(pokemons => this.pokemons = pokemons);
  }
 
  /*Call get pokemons in ngOnInit
  call getHeroes() inside the ngOnInit lifecycle hook and let Angular call 
  ngOnInit() at an appropriate time after constructing a HeroesComponent instance. 
  The constructor shouldn´t call a function that requests data*/
  ngOnInit(): void {
    this.getPokemons();
  }

}
