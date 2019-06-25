import { Router } from '@angular/router';
import { UtilisateurService } from './../../services/utilisateur.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { resetFakeAsyncZone } from '@angular/core/testing';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  validation;

  constructor(private utilisateurService: UtilisateurService, private router: Router) { }

  ngOnInit() { }

  verifier(email, mdp) {
    this.utilisateurService.validate(email, mdp).subscribe(data => {
      if (data) {
        this.router.navigate(['acceuil/', email]);
      } else {
        if (confirm('mauvais mot de passe')) {
          this.router.navigate(['/login']);
        }
      }
      // this.validation = data;
      // console.log(data);
    });
    // if (this.validation) {
    //   this.router.navigate(['acceuil/', email]);
    // } else { this.router.navigate(['/login']); }
  }
}
