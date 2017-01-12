"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var place_service_1 = require('./place.service');
var PlacesComponent = (function () {
    function PlacesComponent(placeService) {
        this.placeService = placeService;
        this.title = 'Places in USA';
    } //For service to be injected
    PlacesComponent.prototype.ngOnInit = function () {
        this.getPlaces();
    };
    PlacesComponent.prototype.onSelect = function (place) {
        this.selectedPlace = place;
    };
    PlacesComponent.prototype.getPlaces = function () {
        var _this = this;
        this.placeService.getPlaces().then(function (places) { return _this.places = places; });
    };
    PlacesComponent = __decorate([
        core_1.Component({
            selector: 'my-places',
            template: "\n            <h1> Places visited in USA </h1>\n            <h2> My Places </h2>\n            <ul class=\"my_places\">\n              <li *ngFor=\"let plac of places\"\n               [class.selected]=\"plac === selectedPlace\"\n              (click)=\"onSelect(plac)\"\n              >\n              <span class=\"badge\"> {{plac.id}} </span> {{plac.name}}\n              </li>  \n            </ul>\n            <my-place-detail [place]=\"selectedPlace\"></my-place-detail>",
            styles: ["\n            .selected {\n              background-color: #CFD8DC !important;\n              color: white;\n            }\n            .my_places {\n              margin: 0 0 2em 0;\n              list-style-type: none;\n              padding: 0;\n              width: 15em;\n            }\n            .my_places li {\n              cursor: pointer;\n              position: relative;\n              left: 0;\n              background-color: #EEE;\n              margin: .5em;\n              padding: .3em 0;\n              height: 1.6em;\n              border-radius: 4px;\n            }\n            .my_places li.selected:hover {\n              background-color: #BBD8DC !important;\n              color: white;\n            }\n            .my_places li:hover {\n              color: #607D8B;\n              background-color: #DDD;\n              left: .1em;\n            }\n            .my_places .text {\n              position: relative;\n              top: -3px;\n            }\n            .my_places .badge {\n              display: inline-block;\n              font-size: small;\n              color: white;\n              padding: 0.8em 0.7em 0 0.7em;\n              background-color: #607D8B;\n              line-height: 1em;\n              position: relative;\n              left: -1px;\n              top: -4px;\n              height: 1.8em;\n              margin-right: .8em;\n              border-radius: 4px 0 0 4px;\n            }\n          "],
            providers: [place_service_1.PlaceService] //For service to be injected
        }), 
        __metadata('design:paramtypes', [place_service_1.PlaceService])
    ], PlacesComponent);
    return PlacesComponent;
}());
exports.PlacesComponent = PlacesComponent;
//# sourceMappingURL=app.place.js.map