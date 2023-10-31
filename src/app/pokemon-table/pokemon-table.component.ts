import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { MatPaginator, MatPaginatorIntl,PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-pokemon-table',
  templateUrl: './pokemon-table.component.html',
  styleUrls: ['./pokemon-table.component.css']
})
export class PokemonTableComponent {
  selectedPokemon?: Pokemon;
  allPokemons: Pokemon[] = []; // Store all fetched Pokémon here
  pokemons: Pokemon[] = [];
  paginator!: MatPaginator;
  itemsPerPage=10;
  currentPage=1;

  length = 1292;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  showFirstLastButtons = true;

handlePageEvent(event: PageEvent) {
    this.itemsPerPage = event.pageSize;
    this.currentPage = event.pageIndex + 1;
    this.updateDisplayedPokemons();
}

updateDisplayedPokemons(): void {
  const start = (this.currentPage - 1) * this.itemsPerPage;
  const end = start + this.itemsPerPage;
}

  
  changeItemsPerPage(event: Event) {
    this.itemsPerPage = Number((event.target as HTMLSelectElement).value);
  }
  
  //Inject PokemonService
  /**The parameter simultaneously defines a private pokemonService property and identifies it as a PokemonService injection site. */
  constructor(
    private matPaginatorIntl: MatPaginatorIntl,
    private pokemonService: PokemonService // Add your PokemonService
  ) {
    // Customize paginator labels here if needed
  }

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
   getPokemons(offset: number, limit: number): void {
    this.pokemonService.getPokemons(limit, offset)
      .subscribe(pokemons => {
        console.log('Received Pokémon data:', pokemons);
        this.pokemons = pokemons;
        this.allPokemons = pokemons;
        this.updateDisplayedPokemons();
      });

      
  }
  
 
  /*Call get pokemons in ngOnInit
  call getHeroes() inside the ngOnInit lifecycle hook and let Angular call 
  ngOnInit() at an appropriate time after constructing a HeroesComponent instance. 
  The constructor shouldn´t call a function that requests data*/
  ngOnInit(): void {
    //retrieve all the pokemons, which will then be sorted with the paginator
    this.getPokemons(0,1292);
  }

}
