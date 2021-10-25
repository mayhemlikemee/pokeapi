import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-poke-details',
  templateUrl: './poke-details.component.html',
  styleUrls: ['./poke-details.component.css']
})
export class PokeDetailsComponent implements OnInit {
  pokeId: string;
  sub: Subscription;
  selectedDetails = {
    name: null,
    id: null,
    img: null,
    generation: null,
    moves: null,
    weight: null
  };

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.sub = this.backendService.idNum.subscribe(pokeId => {
      this.pokeId = pokeId;

      this.backendService.getPokemansById(+this.pokeId).subscribe((data: any) => {
        this.selectedDetails = {
        name: data.name,
        id: data.id,
        img: data.sprites.front_default,
        generation: data.game_indices,
        moves: data.moves,
        weight: data.weight}
        });
    });


  }


}
