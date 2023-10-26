import { Component, Input } from '@angular/core';
//We import Pokemon as it binds to this component
import { PokemonDetails } from '../pokemon-detail';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PokemonService } from '../pokemon.service';


/* This component only receives a pokemon object 
through its pokemon property and displays it. */

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent {
  /*We add an Input property, bc in Angular is used for passing data from the
  parent component (Pokemon) to child component (pokemon-detail)*/
  @Input() pokemon?: PokemonDetails;
/*Inject the ActivatedRoute, HeroService, and Location services into 
the constructor, saving their values in private fields: */
  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private location: Location
  ) {}
  /**The ActivatedRoute holds information about the route 
   * to this instance of the PokemonDetailComponent. This component
   *  is interested in the route's parameters extracted from the URL. 
   * The "id" parameter is the id of the hero to display.

The PokemonService gets hero data from the remote server and this component
 uses it to get the hero-to-display.

The location is an Angular service for interacting with the browser. 
This service lets you navigate back to the previous view. */
ngOnInit(): void {
  this.getPokemonDetails();
}

getPokemonDetails(): void {
  const name= String(this.route.snapshot.paramMap.get('name'));
  this.pokemonService.getPokemonDetails(name)
    .subscribe(pokemon => this.pokemon = pokemon);



/*The route.snapshot is a static image of the route information 
    shortly after the component was created.

The paramMap is a dictionary of route parameter values extracted from the URL.
 The "id" key returns the id of the hero to fetch.

Route parameters are always strings. The JavaScript Number function converts
 the string to a number, which is what a hero id should be. */
}
//para el botón de volver atrás del detalle a la lista
goBack(): void {
  this.location.back();
}

}
