import { Injectable } from '@angular/core';

import { Place } from './Place';
import { PlACES } from './mock-places';

@Injectable()
export class PlaceService {
   getPlaces(): Promise<Place[]> {
     return Promise.resolve(PlACES);
   }

  getPlace(id: number): Promise<Place> {
  return this.getPlaces()
             .then(places => places.find(place => place.id === id));
  }
}