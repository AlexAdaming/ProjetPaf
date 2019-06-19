import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  documentUrl = 'http://localhost:8080/apiUtilisateur';

  constructor(private http: HttpClient) { }

  getUtilisateurs() {
    return this.http.get(this.documentUrl + '/utilisateurs');
  }

  getUtilisateur(id: number) {
    return this.http.get(this.documentUrl + '/utilisateur/' + id);
  }
}
