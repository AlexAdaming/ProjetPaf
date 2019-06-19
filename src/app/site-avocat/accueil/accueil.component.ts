import { DocumentService } from './../../services/document.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  documents;

  constructor(private documentService: DocumentService) { }

  ngOnInit() {
    this.documentService.getDocuments().subscribe(data => {
      this.documents = data;
    });
  }

}
