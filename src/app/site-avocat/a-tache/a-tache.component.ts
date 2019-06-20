import { TacheService } from './../../services/tache.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-a-tache',
  templateUrl: './a-tache.component.html',
  styleUrls: ['./a-tache.component.css']
})
export class ATacheComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private tacheService: TacheService, private router: Router) { }

  form: FormGroup;

  ngOnInit() {
    this.form = this.formBuilder.group({
      dateCreation: ['', Validators.required],
      titre: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  createTache() {
    console.log(this.form.value);
    if (this.form.valid) {
      this.tacheService.addTache(this.form.value).subscribe(() => {
        this.router.navigate(['/a-tache']);
        this.form.reset();
      });
    }
  }
}
