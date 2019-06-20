import { Tache } from './../models/tache';
import { FormBuilder } from '@angular/forms';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  tacheUrl = 'http://localhost:8080/apiTache';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getTaches() {
    return this.http.get(this.tacheUrl + '/taches');
  }

  getTache(id: number) {
    return this.http.get(this.tacheUrl + '/tache/' + id);
  }

  addTache(tache: Tache) {
    return this.http.post(this.tacheUrl + '/ajouterTache', JSON.stringify(tache),
    this.httpOptions);
  }
}
