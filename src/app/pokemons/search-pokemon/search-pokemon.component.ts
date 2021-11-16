import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Pokemon } from 'src/app/Pokemon';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.css']
})
export class SearchPokemonComponent implements OnInit {
  private searchTerms = new Subject<string>();
  pokemons$?: Observable<Pokemon[]>;
  constructor(private pokemonsService: PokemonsService, private router: Router) { }

  // ajouter un terme de recherche dans le flux de l'observable 'search terms'
  search(term: string): void {
    // Stocker les recherches successives de l'utilisateur.
    this.searchTerms.next(term);
  }
  goToDetail(pok: Pokemon): void{
    const link= ['pokemon', pok.id];
    this.router.navigate(link);
  }
  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
     // attendre 300ms de pause entre chaque requete
     debounceTime(300),
     // ignorer la recherche en cours si c'est la meme que la précédente
    // 
     distinctUntilChanged(), 
     // on retourne la liste de sresultats correspondant aux termes de la recherche
     // ça annule et rejette les termes de recherches et retourne seulement le plus récent
     switchMap((term: string)=> this.pokemonsService.searchPokemons(term)),
    );
  }

}
