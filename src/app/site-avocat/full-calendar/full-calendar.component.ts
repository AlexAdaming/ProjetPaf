import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
import * as moment from 'moment';
import 'fullcalendar';

@Component({
  selector: 'app-full-calendar',
  templateUrl: './full-calendar.component.html',
  styleUrls: ['./full-calendar.component.css']
})
export class FullCalendarComponent implements OnInit {

  @Input()
  set configurations(config: any) {
    if (config) {
      this.defaultConfigurations = config;
    }
  }

  @Input() eventData: any;
  defaultConfigurations: any;

  dayClick(date, jsEvent, activeView) {
    console.log('day click');
  }
  eventDragStart(timeSheetEntry, jsEvent, ui, activeView) {
    console.log('event drag start');
  }
  eventDragStop(timeSheetEntry, jsEvent, ui, activeView) {
    console.log('event drag end');
  }


  constructor() {
    this.defaultConfigurations = {

      editable: true,
      eventLimit: true,
      titleFormat: 'MMM D YYYY',
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      buttonText: {
        today: 'Ce jour',
        month: 'Mois',
        week: 'Semaine',
        day: 'Jour'
      },
      views: {
        agenda: {
          eventLimit: 2
        }
      },

      allDaySlot: false,
      slotDuration: moment.duration('00:15:00'),
      slotLabelInterval: moment.duration('01:00:00'),
      firstDay: 1,
      selectable: true,
      selectHelper: true,
      events: this.eventData,

      dayClick: (date, jsEvent, activeView) => {
        this.dayClick(date, jsEvent, activeView);
      },

      eventDragStart: (timeSheetEntry, jsEvent, ui, activeView) => {
        this.eventDragStart(
          timeSheetEntry, jsEvent, ui, activeView
        );
      },
      eventDragStop: (timeSheetEntry, jsEvent, ui, activeView) => {
        this.eventDragStop(
          timeSheetEntry, jsEvent, ui, activeView
        );
      },
    };

    this.eventData = [
      {
        title: 'event1',
        start: moment('2019-06-22'),
        end: moment('2019-06-23').add(2, 'days')
      },
      {
        title: 'event2',
        start: moment(),
        end: moment().add(2, 'days')
      },
    ];
  }

  ngOnInit() {
    $('#full-calendar').fullCalendar(
      this.defaultConfigurations
    );
  }

}
