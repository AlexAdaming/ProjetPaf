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
  documents;
  events;
  calendarEvents;
  calendarPlugins = [dayGridPlugin];

  constructor(private calendarService: CalendarService, private tacheService: TacheService) { }

  ngOnInit() {

    this.calendarService.getData().subscribe(data1 => {
      this.calendarEvents = data1;
    });

    // this.list();
    // console.log(this.events);

  }

  // list() {
  //   this.tacheService.getTaches().subscribe(data3 => {
  //     this.events = data3;
  //   });
  // }



}
