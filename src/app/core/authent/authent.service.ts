import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';

import { Toy } from '../../components/toy/toy.component';
import { TOYS } from '../../mocks/mock-toys';

import { User } from '../models/user';
import { USERS } from '../../mocks/mock-authent';

@Injectable({
  providedIn: 'root'
})
export class AuthentService {

  /*constructor() { }

  public getToys(): Observable<Toy[]>{
    return of (TOYS);

   public getUsers(): Observable<>{
    return of (USERS);
  }*/

	constructor(private http: HttpClient) {}

	getUsers = (): Observable<User[]> => {
		return this.http.get<User[]>('http://localhost:9000/users/')
	}
}
