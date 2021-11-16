import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from 'src/app/Pokemon';
//import { LIST_POKEMONS } from 'src/app/shared/list.pokemons';
import { PokemonsService } from '../../pokemons.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css']
})
export class DetailPokemonComponent implements OnInit {
//listOfPokemons?: Pokemon[];
pokemonToDisplay?: Pokemon;

  constructor(private route: ActivatedRoute, private router: Router,  private pokemonsService: PokemonsService) {

   }

  ngOnInit(): void {
    //     this.listOfPokemons = LIST_POKEMONS;
    //this.listOfPokemons = this.pokemonsService.getListPokemons();
    const id=+(this.route.snapshot.paramMap.get('id')|| 0);
this.pokemonsService.getSinglePokemon(id).subscribe(pkm => this.pokemonToDisplay=pkm);
    console.log('id: ', id)
    /*(let i=0; i< this.listOfPokemons.length; i++){
      if(this.listOfPokemons[i].id ===id){
        console.log('equals')
        this.pokemonToDisplay= this.pokemonsService.getSinglePokemon(id);
      }
    }*/

    console.log('pokemon selectionné: ', this.pokemonToDisplay);
  }
  /* revenir en arrière*/ 
goBack():void{
  this.router.navigate(['/pokemon']);
}
editerPokemon(pokemonToEdit: Pokemon): void{
const link= ['/pokemon/edit', pokemonToEdit.id];
this.router.navigate(link);
}
supprimerPokemon(pokemonToDelete: Pokemon): void{
 /* const link= ['pokemon/delete', pokemonToDelete.id];
  this.router.navigate(link);
*/
this.pokemonsService.deletePokemon(pokemonToDelete).subscribe(()=> this.goBack());  


}
}
