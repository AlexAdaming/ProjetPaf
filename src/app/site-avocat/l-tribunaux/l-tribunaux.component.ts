import { Component, OnInit } from '@angular/core';
import { TribunalService } from 'src/app/services/tribunal.service';

@Component({
  selector: 'app-l-tribunaux',
  templateUrl: './l-tribunaux.component.html',
  styleUrls: ['./l-tribunaux.component.css']
})
export class LTribunauxComponent implements OnInit {
  tribunaux;

  constructor(private tribunalService: TribunalService) { }

  ngOnInit() {
    this.tribunalService.getTribunaux().subscribe(data => {
      this.tribunaux = data;
    });
  }

}
