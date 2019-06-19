import { DocumentService } from './../../services/document.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-d-document',
  templateUrl: './d-document.component.html',
  styleUrls: ['./d-document.component.css']
})
export class DDocumentComponent implements OnInit {
  dDocumentForm: FormGroup;
  documentActif;

  constructor(private formBuilder: FormBuilder,
              private documentService: DocumentService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.dDocumentForm = this.formBuilder.group({
      // idDocument: ['', Validators.required],
      nom: ['', Validators.required],
      dateCreation: ['', Validators.required],
      description: ['', Validators.required],
    });
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // console.log(id);
    this.documentService.getDocument(id).subscribe((data => {
      this.documentActif = data;
      // console.log(data);
    }));
  }

}

