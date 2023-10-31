export interface PokemonDetails {
    weight: number;
    height: number;
    abilities: Ability[];
    is_default: boolean;
    location_area_encounters: string;
    name: string;
    moves: Move[];
    stats: Stat[];
    sprites: Sprite;
  }
  
  interface Ability {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
  }
  
  interface Move {
    move: {
      name: string;
      url: string;
    };
  }
  
  interface Stat {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }
  
  interface Sprite{
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
  }