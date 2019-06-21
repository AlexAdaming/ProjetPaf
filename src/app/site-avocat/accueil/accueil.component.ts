import { Component, OnInit } from '@angular/core';
import { CalendarService } from './../../services/calendar.service';
import dayGridPlugin from '@fullcalendar/daygrid';
import { TacheService } from 'src/app/services/tache.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  calendarPlugins = [dayGridPlugin];
  calendarEvents = [
    {
      "start": "2019-06-16",
      "title": "tribunal"
    },
    {
      "start": "2019-06-15",
      "title": "reunion"
    },
    {
      "start": "2019-06-14",
      "title": "client"
    },
    {
      "start": "2019-06-16",
      "title": "police"
    }
  ];

  events;

  constructor(private calendarService: CalendarService, private tacheService: TacheService) { }

  ngOnInit() {

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
