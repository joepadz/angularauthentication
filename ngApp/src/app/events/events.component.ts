import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD

=======
import { EventService } from '../event.service';
>>>>>>> refs/remotes/origin/master
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
<<<<<<< HEAD

  constructor() { }

  ngOnInit() {
=======
  events = []
  constructor(private _eventService: EventService) { }

  ngOnInit() {
    this._eventService.getEvents()
      .subscribe(
        res => this.events = res,
        err => console.log(err)
      )
>>>>>>> refs/remotes/origin/master
  }

}
