export interface PokemonDetails {
    weight: number;
    height: number;
    abilities: Ability[];
    is_default: boolean;
    location_area_encounters: string;
    name: string;
    moves: Move[];
    stats: Stat[];
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
  