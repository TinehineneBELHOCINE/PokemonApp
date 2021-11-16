import { Injectable } from '@angular/core';
import {InMemoryDbService, RequestInfo} from "angular-in-memory-web-api";
import { LIST_POKEMONS } from './list.pokemons';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb() {
    const pokemons = LIST_POKEMONS;
    return {pokemons};
  }
}
