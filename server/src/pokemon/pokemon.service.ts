import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable, map } from 'rxjs';

@Injectable()
export class PokemonService {
  constructor(private http: HttpService) {}

  getPokemon(id: number): Observable<JSON> {
    return this.http
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .pipe(map((res) => res.data));
  }

  getAllPokemon(): Observable<JSON> {
    //currently only 1118 pokemon in the api so set to that to 1500 to ensure we catch them all
    return this.http
      .get('https://pokeapi.co/api/v2/pokemon?limit=1200')
      .pipe(map((res) => res.data));
      
  }

  getPokemonByName(name: string): Observable<JSON> {
    return this.http
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .pipe(map((res) => res.data));
  }
}
