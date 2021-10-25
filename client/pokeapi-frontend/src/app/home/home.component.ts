import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';

import { BackendService } from '../services/backend.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  pokemanData: any[] = [];
  resultsLength: number = 0;
  pageSlice: any[] = [];
  pokeId: string;
  subscription: Subscription;

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    //Gets all pokemans from the backend and adds them to the pokemanData array when the component is initialized
    this.subscription = this.backendService.getAllPokemon().subscribe((data: any) => {
      this.resultsLength = data.results.length;
      this.pokemanData = data.results;
      this.pokemanData.forEach(pokemon => {
        pokemon.id = this.getPokemonId(pokemon.url);
      });

      this.pageSlice = this.pokemanData.slice(0, 5);
    });


  }


  onPageChange(event: PageEvent) {
    console.log(event);
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.pokemanData.length) {
      endIndex = this.pokemanData.length;
    }
    this.pageSlice = this.pokemanData.slice(startIndex, endIndex);}


  goPokeDetails(id: string) {
    this.pokeId = id;
    this.backendService.changePokeId(this.pokeId);
  }

  getPokemonId(url: string) {
    let id = url.split('/');
    let idFinal = id[id.length - 2];
    return idFinal;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
