import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";

const url = 'http://localhost:3000/pokemon';

@Injectable({providedIn: 'root'})
export class BackendService {
    constructor(private http: HttpClient) {}

    private pokeId = new BehaviorSubject('');
    idNum = this.pokeId.asObservable();

    changePokeId(id: string) {
      this.pokeId.next(id);
    }


    getAllPokemon() {
        return this.http.get(url);
    }


    getPokemansById(id: number) {
        return this.http.get(url + '/id/' + id);
    }
}
