import { Component, Input, OnInit } from '@angular/core';

import { Place } from './place';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { PlaceService } from './place.service';

import 'rxjs/add/operator/switchMap';


@Component({
  moduleId: module.id,
  selector: 'my-place-detail',
  templateUrl: 'place-detail.component.html'
})
export class PlaceDetailComponent implements OnInit{

  constructor(
     private placeService: PlaceService,
     private route: ActivatedRoute,
     private location: Location) {}

    @Input()
    place : Place;

    ngOnInit(): void {
        this.route.params
        .switchMap((params: Params) => this.placeService.getPlace(+params['id']))
        .subscribe(place => this.place = place);
    }

    goBack(): void {
       this.location.back(); //Goes back to last Page in browser history
    }
}