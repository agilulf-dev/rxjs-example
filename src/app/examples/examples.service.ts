import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {EMPTY} from "rxjs";
import {Character} from "../models/character";

@Injectable({
  providedIn: 'root'
})
export class ExamplesService {

  private readonly BASE_URL = 'https://www.breakingbadapi.com/api';
  private readonly URL_RANDOM_CHARACTER = this.BASE_URL + '/character/random';
  private readonly URL_CHARACTERS = this.BASE_URL + '/characters';

  randomCharacter$ = this.http.get<Character>(this.URL_RANDOM_CHARACTER)
    .pipe(
      map(character => character as Character),
      catchError(err => {
        console.error('Random Character Error: %s', err);
        return EMPTY;
      }));

  characters$ = this.http.get<Character[]>(this.URL_CHARACTERS)
    .pipe(
      map(characters =>
          characters.map(character => ({...character}) as Character),
        catchError(err => {
          console.error('Characters Error: %s', err);
          return EMPTY;
        })));

  constructor(private http: HttpClient) {
  }

}
