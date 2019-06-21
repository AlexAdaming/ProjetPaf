import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utilisateur } from '../models/utilisateur';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  utilisateurUrl = 'http://localhost:8080/apiUtilisateur';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }

  getUtilisateurs() {
    return this.http.get(this.utilisateurUrl + '/utilisateurs');
  }

  getUtilisateur(id: number) {
    return this.http.get(this.utilisateurUrl + '/utilisateur/' + id);
  }

  addAffaire(utilisateur: Utilisateur) {
    return this.http.post(this.utilisateurUrl + '/ajouterUt', JSON.stringify(utilisateur),
    this.httpOptions);
  }

}
