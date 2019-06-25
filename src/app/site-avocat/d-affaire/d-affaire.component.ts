import { ActivatedRoute, Router } from '@angular/router';
import { AffaireService } from './../../services/affaire.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d-affaire',
  templateUrl: './d-affaire.component.html',
  styleUrls: ['./d-affaire.component.css']
})
export class DAffaireComponent implements OnInit {
  dAffaireForm: FormGroup;
  affaireActif;

  constructor(private formBuilder: FormBuilder,
              private affaireService: AffaireService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.dAffaireForm = this.formBuilder.group({
      idAffaire: 0,
      reference: ['', Validators.required],
      titre: ['', Validators.required],
      description: ['', Validators.required],
      status: ['', Validators.required],
    });
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.affaireService.getAffaire(id).subscribe((data => {
      this.affaireActif = data;
    }));
  }

}
