
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  getCharacters(page = 1){
    return this.http.get('https://rickandmortyapi.com/api/character/?page='+ page)
  }

  getCharacter(idCharacter){
    return this.http.get('https://rickandmortyapi.com/api/character/'+ idCharacter)
  }
}
