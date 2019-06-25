import { Router, ActivatedRoute } from '@angular/router';
import { AffaireService } from 'src/app/services/affaire.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-m-affaire',
  templateUrl: './m-affaire.component.html',
  styleUrls: ['./m-affaire.component.css']
})
export class MAffaireComponent implements OnInit {

  editForm: FormGroup;
  constructor(
    private affaireService: AffaireService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      idAffaire: 0,
      reference: [''],
      titre: [''],
      description: [''],
      status: ['', [Validators.required, Validators.max(3)]],
      taches: [''],
      documents: [''],
    });
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.affaireService.getAffaire(id).subscribe(data => {
      this.editForm.setValue(data);
    });
  }

  update() {
    this.affaireService.updateAffaire(this.editForm.value).subscribe(() => {
      this.router.navigate(['/l-affaire']);
    });


  }



}
