import { Component, OnInit } from '@angular/core';

import { Place } from './place';
import { PlaceService } from './place.service';


@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
})

export class DashboardComponent implements OnInit { 

  places: Place[] = [];

  constructor(private heroService: PlaceService) { }

  ngOnInit(): void {
    this.heroService.getPlaces()
      .then(places => this.places = places.slice(1, 5));
  }
}