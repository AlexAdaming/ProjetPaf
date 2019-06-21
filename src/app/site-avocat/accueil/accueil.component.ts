import { DocumentService } from './../../services/document.service';
import { Component, OnInit } from '@angular/core';
import { CalendarService } from './../../services/calendar.service';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  documents;
  calendarEvents;
  calendarPlugins = [dayGridPlugin];

  constructor(private calendarService: CalendarService, private documentService: DocumentService) { }

  ngOnInit() {

    this.calendarService.getData().subscribe(data1 => {
      this.calendarEvents = data1;
    });

    this.documentService.getDocuments().subscribe(data2 => {
      this.documents = data2;
    });
  }

}
