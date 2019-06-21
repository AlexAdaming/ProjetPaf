import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-a-utilisateur',
  templateUrl: './a-utilisateur.component.html',
  styleUrls: ['./a-utilisateur.component.css']
})
export class AUtilisateurComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private utilisateurService: UtilisateurService, private router: Router) { }

  form: FormGroup;

  ngOnInit() {
    this.form = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  createUtilisateur() {
    if (this.form.valid) {
      this.utilisateurService.addAffaire(this.form.value).subscribe(() => {
        this.router.navigate(['l-utilisateurs']);
      });
    }
  }


}
