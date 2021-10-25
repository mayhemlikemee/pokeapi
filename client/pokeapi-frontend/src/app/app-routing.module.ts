import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PokeDetailsComponent } from './poke-details/poke-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'poke-details', component: PokeDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
