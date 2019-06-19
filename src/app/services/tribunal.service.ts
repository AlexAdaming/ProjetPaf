import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TribunalService {

  tribunalUrl = 'http://localhost:8080/apiTribunal';

  constructor(private http: HttpClient) { }

  getTribunaux() {
    return this.http.get(this.tribunalUrl + '/tribunaux');
  }

}
