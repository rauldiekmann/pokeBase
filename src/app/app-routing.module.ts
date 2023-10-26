import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonTableComponent } from './pokemon-table/pokemon-table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
const routes: Routes = [
  { path: 'pokemons', component: PokemonTableComponent },
  { path: 'dashboard', component: DashboardComponent },
  //default path
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  //parameterized route for pokemon details
  { path: 'detail/:name', component: PokemonDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }