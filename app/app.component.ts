import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
         <h1>{{title}}</h1>
          <nav>
              <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
              <a routerLink="/places" routerLinkActive="active">Places</a>
         </nav>
         <router-outlet></router-outlet>
    `
})

export class AppComponent{
    title = "My Places";
}