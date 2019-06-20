import { Router } from '@angular/router';
import { PhaseService } from './../../services/phase.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-a-phase',
  templateUrl: './a-phase.component.html',
  styleUrls: ['./a-phase.component.css']
})
export class APhaseComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private phaseService: PhaseService, private router: Router) { }

  form: FormGroup;

  ngOnInit() {
    this.form = this.formBuilder.group({
      nom: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required]
    });
  }

  createPhase() {
    // console.log(this.form.value);
    if (this.form.valid) {
      this.phaseService.addPhase(this.form.value).subscribe(() => {
        this.router.navigate(['/a-phase']);
        this.form.reset();
      });
    }
  }

}
