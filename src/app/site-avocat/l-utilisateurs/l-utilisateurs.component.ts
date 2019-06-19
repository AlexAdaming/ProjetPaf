import { UtilisateurService } from './../../services/utilisateur.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-l-utilisateurs',
  templateUrl: './l-utilisateurs.component.html',
  styleUrls: ['./l-utilisateurs.component.css']
})
export class LUtilisateursComponent implements OnInit {
  listUtilisateur;

  constructor(private utilisateurService: UtilisateurService) { }

  ngOnInit() {
    this.utilisateurService.getUtilisateurs().subscribe(data => {
      this.listUtilisateur = data;
    });
  }

}
