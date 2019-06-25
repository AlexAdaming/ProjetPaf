import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CalendarService } from './../../services/calendar.service';
import dayGridPlugin from '@fullcalendar/daygrid';
import { TacheService } from 'src/app/services/tache.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  email;
  idUtilisateur;
  taches;

  calendarPlugins = [dayGridPlugin];
  calendarEvents;
  events;

  constructor(private calendarService: CalendarService,
              private tacheService: TacheService,
              private activatedRoute: ActivatedRoute,
              private utilisateurService: UtilisateurService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      // tslint:disable-next-line:no-string-literal
      this.email = params['email'];
      console.log(this.email);
    });

    this.utilisateurService.GetIdByEmail(this.email).subscribe(id => {
      console.log(id[0]);
      this.utilisateurService.GetPhasesByIdutilisateur(id[0]).subscribe(data => {
        this.events = JSON.stringify(data);
        console.log(data);
      });
    });

    // this.calendarEvents = [
    //   {
    //     'start': '2019-06-16',
    //     'title': 'tribunal'
    //   },
    //   {
    //     "start": "2019-06-15",
    //     "title": "reunion"
    //   },
    //   {
    //     "start": "2019-06-14",
    //     "title": "client"
    //   },
    //   {
    //     "start": "2019-06-16",
    //     "title": "police"
    //   },
    // ];

    // ----- METHODE QUI RECUPERE LES DONNEES DANS LE FICHIER JSON -----
    // this.calendarService.getData().subscribe(data1 => {
    //   this.calendarEvents = data1;
    // });

    // ----- METHODE QUI NE FONCTIONNE PAS -----
    // this.list();
    // console.log(this.events);



  }

  // list() {
  //   this.tacheService.getTaches().subscribe(data3 => {
  //     this.events = data3;
  //   });
  // }

}
