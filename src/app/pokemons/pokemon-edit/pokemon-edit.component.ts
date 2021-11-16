import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/Pokemon';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'app-pokemon-edit',
  templateUrl: './pokemon-edit.component.html',
  styleUrls: ['./pokemon-edit.component.css']
})
export class PokemonEditComponent implements OnInit {

  singlePokemon?: Pokemon;
  constructor(private route: ActivatedRoute, private pokemonsService: PokemonsService) { }

  ngOnInit(): void {
    const id=+(this.route.snapshot.paramMap.get('id')|| 0);
    //this.singlePokemon= this.pokemonsService.getSinglePokemon(id);
     this.pokemonsService.getSinglePokemon(id).subscribe(pkm => this.singlePokemon=pkm);

    console.log('id: ', id)
  
    console.log('pokemon selectionné: ', this.singlePokemon);
  
  }

}
