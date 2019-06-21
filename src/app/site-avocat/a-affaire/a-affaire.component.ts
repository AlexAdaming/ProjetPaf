import { AffaireService } from 'src/app/services/affaire.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-a-affaire',
  templateUrl: './a-affaire.component.html',
  styleUrls: ['./a-affaire.component.css']
})
export class AAffaireComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private affaireService: AffaireService, private router: Router) { }

  form: FormGroup;

  ngOnInit() {
    this.form = this.formBuilder.group({
      reference: ['', Validators.required],
      titre: ['', Validators.required],
      description: ['', Validators.required],
      status: ['', [Validators.required, Validators.max(3)]]
    });
  }

  createAffaire() {
    console.log(this.form.value);
    if (this.form.valid) {
      this.affaireService.addAffaire(this.form.value).subscribe(() => {
        this.router.navigate(['/a-affaire']);
        this.form.reset();
      });
    }
  }
}
