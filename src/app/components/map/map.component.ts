/*
  A este componentes, this.restaurans llega como 0, y por lo tanto no se muestra ninguna marca.

  Como la presentación de los datos no se realiza mediante un ng-repeat en la vista, cuando hay un cambio
  en la variable de los restaurantes no se produce la actualización / renderizado por parte de Angular de la vista y por 
  lo tanto no hay remuestreo de los datos.

  En este componente, this.restaurants es recorrido en el controlador (.ts) del componente y no en la vista, por
  lo que habría que realizar dicho muestreo mediante un observable o algún otro mecanismo.
*/

// Basic imports
import { Component, ElementRef, OnInit, Input } from '@angular/core';

// Classes
import { Restaurant } from '../../classes';

// Extra imports
import L from "leaflet";
import * as _ from 'underscore';

// nexter
let next = 0;

@Component({
  selector: 'map-component',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent {     
  @Input() set restaurants(value: Restaurant[]){    
    this._restaurants = value;   
    
    if (this.mapReady){
      this.drawData();
    }    
  }

  public id: string;
  private _restaurants: Restaurant[];
  private map: any;
  private markers: any;
  private mapReady: boolean;  
  private apiUrl: string;
  private container: string;
  private icon: object;
  private imagesFolder: string;
  private accessToken: string;
  private attribution: string;
  private maxZoom: number;
  private leafletId: string;
  private zoom: number;
  private mapX: number;
  private mapY: number;  

  constructor(
    private elem: ElementRef
  ){
    // id
    this.id       = elem.nativeElement.tagName.toLowerCase() + "-" +  next++;
    this.mapReady = false;
  }

  ngOnInit() {    
    // this.accessToken  = "?access_token=";    
    this._restaurants = [];
    this.map          = {};
    this.markers      = [];
    this.accessToken  = "";
    this.maxZoom      = 18;
    this.leafletId    = 'mapbox.streets';
    this.container    = "leaflet-map";
    this.icon         = {};
    this.zoom         = 6;
    this.mapX         = -5.09;
    this.mapY         = 39.505;    
    this.imagesFolder = 'assets/images/';
    this.apiUrl       = 'http://c.tile.osm.org/{z}/{x}/{y}.png' + this.accessToken;
    this.attribution  = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a   href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>';    
  }

  ngAfterViewInit () {        
    this.initMap();
    this.drawMap();  
    this.iconMarker(); 

    this.mapReady = true;     
  }  

  private initMap(): void {
    this.map = L
      .map(this.container)
      .setView([
        this.mapY, 
        this.mapX
      ], this.zoom);
  }

  private drawMap(): void {
    L
      .tileLayer(this.apiUrl, {
        attribution:  this.attribution,
        maxZoom:      this.maxZoom,
        id:           this.leafletId,
        accessToken:  this.accessToken
      })
      .addTo(this.map);
  }

  private iconMarker(): void {
    this.icon = L
      .icon({
        iconUrl:      this.imagesFolder + 'leaf-green.png',
        iconSize:     [38, 95], // size of the icon
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowUrl:    this.imagesFolder + 'leaf-shadow.png',        
        shadowSize:   [50, 64], // size of the shadow        
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
  }

  private drawData(): void {   
    // clear existing markers     
    _.each(
      this.markers, 
      (item) => this.map.removeLayer(item)
    );    

    // draw markers
    _.each(
      this._restaurants, 
      (item) => this.markers.push(this.addMarker(item))       
    );                 
  }

  private addMarker(item): void { 
    let locale  = item._source.locale.split(",");
    let x       = locale[0];
    let y       = locale[1];
    
    return L
      .marker(
        [x, y],
        {icon: this.icon}
      )
      .addTo(this.map);    
  }
}
