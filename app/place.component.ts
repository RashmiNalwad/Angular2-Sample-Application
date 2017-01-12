import { Component, OnInit } from '@angular/core';
import { Place } from './place';
import { PlaceService } from './place.service';

@Component({
  selector: 'my-places',
  template: `
            <h1> Places visited in USA </h1>
            <h2> My Places </h2>
            <ul class="my_places">
              <li *ngFor="let plac of places"
               [class.selected]="plac === selectedPlace"
              (click)="onSelect(plac)"
              >
              <span class="badge"> {{plac.id}} </span> {{plac.name}}
              </li>  
            </ul>
            <my-place-detail [place]="selectedPlace"></my-place-detail>`,
  styles: [`
            .selected {
              background-color: #CFD8DC !important;
              color: white;
            }
            .my_places {
              margin: 0 0 2em 0;
              list-style-type: none;
              padding: 0;
              width: 15em;
            }
            .my_places li {
              cursor: pointer;
              position: relative;
              left: 0;
              background-color: #EEE;
              margin: .5em;
              padding: .3em 0;
              height: 1.6em;
              border-radius: 4px;
            }
            .my_places li.selected:hover {
              background-color: #BBD8DC !important;
              color: white;
            }
            .my_places li:hover {
              color: #607D8B;
              background-color: #DDD;
              left: .1em;
            }
            .my_places .text {
              position: relative;
              top: -3px;
            }
            .my_places .badge {
              display: inline-block;
              font-size: small;
              color: white;
              padding: 0.8em 0.7em 0 0.7em;
              background-color: #607D8B;
              line-height: 1em;
              position: relative;
              left: -1px;
              top: -4px;
              height: 1.8em;
              margin-right: .8em;
              border-radius: 4px 0 0 4px;
            }
          `]
})

export class PlacesComponent implements OnInit{ 
  title = 'Places in USA';
  selectedPlace : Place;
  places : Place[];

  constructor(private placeService: PlaceService) { } //For service to be injected

   ngOnInit(): void { //Hook the service when app Component activates.
     this.getPlaces();
    }

  onSelect(place: Place): void {
    this.selectedPlace = place;
  }

  getPlaces(): void {
      this.placeService.getPlaces().then(places => this.places = places);
  }
 }
