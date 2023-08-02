import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fruits } from './fruits';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {

  apiURL: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getAll(resource: string){
    return this.http.get<Fruits[]>(this.apiURL + resource);
  }

  create(resource: string, payload: Fruits){
    return this.http.post<Fruits>(this.apiURL + resource , payload);
  }
}
