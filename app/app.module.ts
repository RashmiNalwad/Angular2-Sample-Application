import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { PlaceDetailComponent } from './place-detail.component';
import { AppComponent }  from './app.component';
import { PlacesComponent } from './place.component';
import { DashboardComponent } from './dashboard.component'; 

import { PlaceService } from './place.service';  

@NgModule({
  imports:      [
   BrowserModule,
   FormsModule,
   RouterModule.forRoot([
   {
      path: 'places',
      component: PlacesComponent
   },
   {
      path: 'dashboard',
      component: DashboardComponent
   },
   {
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
   },
   {
      path: 'detail/:id',
      component: PlaceDetailComponent
   }
])
   ],
  declarations: [ 
    AppComponent,
    DashboardComponent,
    PlacesComponent,
    PlaceDetailComponent 
  ],
  providers: [ PlaceService ], //For service to be injected
  bootstrap: [ AppComponent ]
})

export class AppModule { }
