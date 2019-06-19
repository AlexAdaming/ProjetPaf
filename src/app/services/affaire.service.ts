import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AffaireService {

  affaireUrl = 'http://localhost:8080/apiAffaire';

  constructor(private http: HttpClient) { }

  getAffaires() {
    return this.http.get(this.affaireUrl + '/affaires');
  }

}
