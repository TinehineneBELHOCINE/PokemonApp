import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/Pokemon';
//import { LIST_POKEMONS } from 'src/app/shared/list.pokemons';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})

export class ListPokemonComponent implements OnInit {
  pokemons?: Pokemon[];
  constructor(private router: Router, private pokemonsService: PokemonsService) { }

  ngOnInit(): void {
    //this.pokemons = LIST_POKEMONS;
    //this.pokemons=this.pokemonsService.getListPokemons();
    this.pokemonsService.getListPokemons().subscribe(listPkm => this.pokemons= listPkm);

  }

  selectPokemon(pok: Pokemon): void {
    //  alert('vous avez sélectionné:' +pok.name);
    const link = ['/pokemon', pok.id];
    this.router.navigate(link);
  }

}
