import { Affaire } from './../models/affaire';
import { FormBuilder } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AffaireService {

  affaireUrl = 'http://localhost:8080/apiAffaire';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }

  getAffaires() {
    return this.http.get(this.affaireUrl + '/affaires');
  }

  getAffaire(id: number) {
    return this.http.get(this.affaireUrl + '/affaire/' + id);
  }

  addAffaire(affaire: Affaire) {
    return this.http.post(this.affaireUrl + '/ajouterAffaire', JSON.stringify(affaire),
      this.httpOptions);
  }

  updateAffaire(affaire: Affaire) {
    return this.http.put(this.affaireUrl + '/updateAffaire', JSON.stringify(affaire),
      this.httpOptions);
  }
}
