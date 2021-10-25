import { Controller, Get, Param } from '@nestjs/common';
import { Observable } from 'rxjs';
import { PokemonService } from './pokemon.service';

@Controller('pokemon')
export class PokemonController {
  constructor(
    private pokemonService: PokemonService,
  ) {}

  @Get('id/:id')
  getPokemon(@Param('id') id): Observable<JSON> {
    return this.pokemonService.getPokemon(id);
  }

  @Get()
  getAllPokemon(): Observable<JSON> {
    return this.pokemonService.getAllPokemon();
  }

  @Get('/name/:name')
  getPokemonByName(@Param('name') name): Observable<JSON> {
    return this.pokemonService.getPokemonByName(name);
  }
}
