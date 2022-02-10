import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokeDetailComponent } from './components/poke-detail/poke-detail.component';
import { PokeTableComponent } from './components/poke-table/poke-table.component';


const routes: Routes = [
  {path: 'Mes pokemens', component: PokeTableComponent},
  {path: 'pokeDetail/:id', component: PokeDetailComponent},
  {path: '', pathMatch: 'full', redirectTo: 'Mes pokemens' },
  {path: '**', pathMatch: 'full', redirectTo: 'Mes pokemens'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
