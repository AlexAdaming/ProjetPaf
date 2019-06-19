import { Component, OnInit } from '@angular/core';
import { AffaireService } from 'src/app/services/affaire.service';

@Component({
  selector: 'app-l-affaire',
  templateUrl: './l-affaire.component.html',
  styleUrls: ['./l-affaire.component.css']
})
export class LAffaireComponent implements OnInit {
  affaires;

  constructor(private affaireService: AffaireService) { }

  ngOnInit() {
    this.affaireService.getAffaires().subscribe(data => {
      this.affaires = data;
    });
  }

}
