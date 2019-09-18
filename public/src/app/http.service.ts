import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class PokemonService {

  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) {
    console.log('hello');
    this.getPokemon();
    this.getPokemonAbilities();
    this.solarFlare();
    this.blaze();
  }

  abilities = [];

  getPokemon() {
    const charizard = this._http.get('https://pokeapi.co/api/v2/pokemon/6/');
    charizard.subscribe(data => console.log('Got Charizard!', data));
  }

  getPokemonAbilities() {
    const charizard = this._http.get('https://pokeapi.co/api/v2/pokemon/6/');
    // tslint:disable-next-line: max-line-length
    charizard.subscribe(data => {
      console.log('Got pokemon', data);
      for (const a of data.abilities) {
        this.abilities.push(a.ability);
      }
      console.log(`Abilties: `, this.abilities);
      return data;
    });
  }
  solarFlare() {
    const solar = this._http.get('https://pokeapi.co/api/v2/ability/94/');
    solar.subscribe(data => {
      console.log(`${data.pokemon.length} Pokemon have the ${data.name} ability!`);
    });
  }
  blaze() {
    const blaze = this._http.get('https://pokeapi.co/api/v2/ability/66/');
    blaze.subscribe(data => {
      console.log(`${data.pokemon.length} Pokemon have the ${data.name} ability!`);
    });
  }
}
