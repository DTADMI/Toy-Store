import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';

import { Toy } from '../../components/toy/toy.component';
import { TOYS } from '../../mocks/mock-toys';

@Injectable({
  providedIn: 'root'
})
export class ToyService {

  /*constructor() { }

  public getToys(): Observable<Article[]>{
    return of (TOYS);
  }*/

	constructor(private http: HttpClient) {}

	getToys = (): Observable<Toy[]> => {
		return this.http.get<Toy[]>('http://localhost:9000/toys/')
	}
}
