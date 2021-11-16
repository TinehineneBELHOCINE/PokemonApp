import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ListPokemonComponent } from './pokemons/list-pokemon/list-pokemon.component';
//import { BorderCardDirective } from './shared/directives/border-card.directive';
//import { PokemonTypeColorPipe } from './shared/pipes/pokemon-type-color.pipe';
//import { DetailPokemonComponent } from './details-pokemon/detail-pokemon/detail-pokemon.component';
//import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { PokemonsModule } from './pokemons/pokemons.module';
import { HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/in-memory-data.service';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PokemonsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{dataEncapsulation: false}),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
