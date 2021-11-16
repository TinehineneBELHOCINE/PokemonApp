import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './details-pokemon/detail-pokemon/detail-pokemon.component';
import { PokemonTypeColorPipe } from '../shared/pipes/pokemon-type-color.pipe';
import { PokemonsService } from './pokemons.service';
import { BorderCardDirective } from '../shared/directives/border-card.directive';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { FormsModule } from '@angular/forms';
import { PokemonEditComponent } from './pokemon-edit/pokemon-edit.component';
import { PokemonDeleteComponent } from './pokemon-delete/pokemon-delete.component';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { LoaderComponentComponent } from './loader-component/loader-component.component';

@NgModule({
  declarations: [ListPokemonComponent, DetailPokemonComponent, PokemonTypeColorPipe,
    
    BorderCardDirective,
    
    PageNotFoundComponent,
         PokemonFormComponent,
         PokemonEditComponent,
         PokemonDeleteComponent,
         SearchPokemonComponent,
         LoaderComponentComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers:[PokemonsService]
  
})
export class PokemonsModule { }
