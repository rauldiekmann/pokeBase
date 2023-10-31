import { Component, Input } from '@angular/core';
import { PokemonDetails } from '../pokemon-detail';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PokemonService } from '../pokemon.service';
import { PokemonEncounter, LocationArea } from '../pokemon-encounters';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent {
  @Input() pokemon?: PokemonDetails;
  locations: PokemonEncounter[] = [];

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    public location: Location // Changed to private
  ) {}

  ngOnInit(): void {
    this.getPokemonDetails();
  }

  getPokemonDetails(): void {
    const name = String(this.route.snapshot.paramMap.get('name'));
    this.pokemonService.getPokemonDetails(name).subscribe((pokemon) => {
      this.pokemon = pokemon;
      console.log(pokemon.location_area_encounters);

      if (pokemon.location_area_encounters) {
        console.log("hola");
        this.getPokemonEncounters(pokemon.location_area_encounters);
      }

    });
  }

  getPokemonEncounters(encountersURL: string): void {
    this.pokemonService.getPokemonEncounters(encountersURL).subscribe((location) => {
      this.locations = location;
      console.log(location);// Changed to this.locations
    });
  }

  goBack(): void {
    this.location.back();
    console.log("gola");

  }
}
