import { FormBuilder } from '@angular/forms';
import { Phase } from './../models/phase';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhaseService {

  phaseUrl = 'http://localhost:8080/apiPhase';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getPhases() {
    return this.http.get(this.phaseUrl + '/phases');
  }

  getPhase(id: number) {
    return this.http.get(this.phaseUrl + '/phase/' + id);
  }

  addPhase(ph: Phase) {
    return this.http.post(this.phaseUrl + '/ajouterPhase', JSON.stringify(ph),
    this.httpOptions);
  }
}
