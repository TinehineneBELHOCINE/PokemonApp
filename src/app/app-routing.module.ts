import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DetailPokemonComponent } from './pokemons/details-pokemon/detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './pokemons/list-pokemon/list-pokemon.component';
import { PokemonDeleteComponent } from './pokemons/pokemon-delete/pokemon-delete.component';
import { PokemonEditComponent } from './pokemons/pokemon-edit/pokemon-edit.component';
import { AuthGuardService } from './shared/auth-guard.service';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
/*
const routes: Routes = [
  {path:'pokemon', component: ListPokemonComponent},
  {path:'pokemon/edit/:id', component: PokemonEditComponent, canActivate:[AuthGuardService]},
  {path:'pokemon/delete/:id', component: PokemonDeleteComponent},
  {path: 'pokemon/:id', component: DetailPokemonComponent},
  {path:'', redirectTo: 'pokemon', pathMatch: 'full'},
  {path:'**', component:PageNotFoundComponent}
];
*/
const routes: Routes = [
  {
    path: 'pokemon',
    canActivate: [AuthGuardService],
    children: [
     
      { path: '', component: ListPokemonComponent },
      { path: 'edit/:id', component: PokemonEditComponent },
      { path: ':id', component: DetailPokemonComponent }

    ]
    
  }
  ,
  { path: 'login', component: LoginComponent },
      { path: '', redirectTo: 'pokemon', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
