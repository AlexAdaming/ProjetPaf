import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(private formbuilder: FormBuilder) { }
  form: FormGroup;
  ngOnInit() {
    this.form = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

}
