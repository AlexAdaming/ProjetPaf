// import { TacheService } from './tache.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  // events;


  constructor(private http: HttpClient) { }
  // ,private tacheService: TacheService

  getData() {
    return this.http.get('assets/events.json');
  }

  // getEvents() {
  //   this.tacheService.getTaches().subscribe(data => {
  //     this.events = data.date_creation;
  //     this.events = data.titre;
  //   });
  //   return this.http.get(this.events);
  // }



}
