import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/Pokemon';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {
 //  liste qui stocke les types des pokemons
  types?: Array<string>;
  // ppte d'entrée du composant
  @Input() pokemon?: Pokemon;
  constructor(private router: Router, private pokemonsService: PokemonsService) { }
// router = naviguer d'une page à une autre
// activate router pour recuperer l'id
  ngOnInit(): void {
    this.types= this.pokemonsService.getPokemonTypes();
  }
  // determiner si le type passé en params appartient ou non au pokemon
  hasType(type: string): boolean{
    const index= this.pokemon?.types?.indexOf(type);
    return (index!== -1)? true: false;
  }

/**
 *  *  Méthode appelée lorsque l'utilisateur ajoute
 *  ou retire un type au pokémon au cours de l'édition
 * @param $event 
 * @param type 
 */
  selectType($event: any, type: string): void{
    const checked= $event.target.checked;
    if(checked){
      this.pokemon?.types?.push(type);

    }else{
      const index= this.pokemon?.types?.indexOf(type) ?? -1;
      if(index > -1){ // si il a été sélectionné
        this.pokemon?.types?.splice(index,1);
      }
    }
  }

  /*onSubmit(): void{
    console.log('Submit form !');
    const link= ['/pokemon', this.pokemon?.id];
    this.router.navigate(link);
  }*/
  goBack(): void{
    this.router.navigateByUrl('/pokemon');
  } 

  onSubmit(): void{
    console.log('Submit form !');
    // ! veut dire si il existe
   this.pokemonsService.updatePokemon(this.pokemon!).subscribe(()=> this.goBack());
   //this.pokemonsService.deletePokemon(this.pokemon!).subscribe(()=> this.goBack());

  }

  isTypeValid(type:string): boolean{
    const longueur= this.pokemon?.types?.length ?? -1;
    if(longueur===1 && this.hasType(type)){
      return false;

    }
    if (longueur >=3 && !this.hasType(type)) {
    return false;
    }
    return true;
  }
 
}
