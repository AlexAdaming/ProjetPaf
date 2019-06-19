import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  documentUrl = 'http://localhost:8080/apiDocument';

  constructor(private http: HttpClient) { }

  getDocuments() {
    return this.http.get(this.documentUrl + '/documents');
  }

  getDocument(id: number) {
    return this.http.get(this.documentUrl + '/document/' + id);
  }


}
