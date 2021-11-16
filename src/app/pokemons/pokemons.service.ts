import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pokemon } from '../Pokemon';
//import { LIST_POKEMONS } from '../shared/list.pokemons';
import { catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class PokemonsService {
  private pokemonUrl = 'api/pokemons';
  
  /*  
  getListPokemons(): Pokemon[]{
      return LIST_POKEMONS;
    }
  */
  getListPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokemonUrl).pipe(
      tap(next => console.log('fetched Pokemon')),
      catchError(this.handleError('getListPokemons', []))
    );
  }
  /*getSinglePokemon(id: number): Pokemon {
    const listPkm= this.getListPokemons();
    for (let i =0; i< listPkm.length; i++) {
      if(id === listPkm[i].id){
        
        return listPkm[i];
      }
    }
    return  listPkm[1] ;

  }*/
  getSinglePokemon(id: number): Observable<Pokemon> {
    const url = `${this.pokemonUrl}/${id}`;
    return this.http.get<Pokemon>(url).pipe(
      tap(next => console.log(`fetched Pokemon id=${id}`))
    )
  }


  getPokemonTypes(): string[] {
    return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol'];
  }
  private handleError<T>(operation = 'operation', result?: T) {
    // T: désigne le fait de typer un type en lui même
    // Renvoyer le bon type de la méthode qui a levé l'erreur.
    // operation: le nom de la méthode qui a causé l'erreur
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation} failed: ${error.message}`);  // Of: Permet de transformer les données passées en paramètres en un observable tt simplement.
      return of(result as T);
    };

  }

  updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
    // on déclare une entete pour signaler que le format du corp de la requete est du JSON 
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-type': 'application/json' })
    };

    //on ajoute ensuite cette entete à la requete
    return this.http.put(this.pokemonUrl, pokemon, httpOptions).pipe(
     
      tap(next => console.log(`Update Pokemon id=${pokemon.id}`)), 
      catchError(this.handleError<any>('update Pokemon'))
    );
  }

  searchPokemons(term: string): Observable<Pokemon[]> {
    // on teste si l'user n'a pas saisi un term vide
    //dans ce cas, on n'a pas besoin d'envoyer la requete
    // nous renvoyons un tableau vide sous forme d'un observabke grace à l'opérateur of
    
    if (!term.trim()) {
      return of([]);
    }
    // envoyer une requete get via l'observable
    // url spécifique mis en plac eavec notre API simulée qui renvoie tous les pokémons
    // dont la ppté nom convtient ou égale au terme de la recherche
    
    return this.http.get<Pokemon[]>(`${this.pokemonUrl}/?name=${term}`).pipe(
      tap(next => console.log(`found pokemons matching "${term}"`)),
      catchError(this.handleError<Pokemon[]>('searchPokemons', []))
    );
  }

  deletePokemon(pokemon: Pokemon): Observable<Pokemon> {
    // on déclare une entete pour signaler que le format du corp de la requete est du JSON 
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-type': 'application/json' })
    };
    const url = `${this.pokemonUrl}/${pokemon.id}`

    //on ajoute ensuite cette entete à la requete
    // @ts-ignore
    return this.http.delete<Pokemon>(url, pokemon, httpOptions).pipe(
      catchError(this.handleError<any>('delete Pokemon')),
      tap(next => console.log(`delete Pokemon id=${pokemon.id}`))
    );
    return this.http.delete(this.pokemonUrl, httpOptions).pipe(
      catchError(this.handleError<any>('delete Pokemon')),
      tap(next => console.log(`delete Pokemon id=${pokemon.id}`))
    );
  }
  constructor(private http: HttpClient) { }
}
