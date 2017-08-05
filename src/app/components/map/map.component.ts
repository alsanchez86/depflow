// Basic imports
import { Component, ElementRef } from '@angular/core';

// Extra imports
import L from "leaflet";

// nexter
let next = 0;

@Component({
  selector: 'map-component',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent {  
  public id: string;
  private map: object;
  private apiUrl: string;
  private container: string;
  private accessToken: string;
  private attribution: string;
  private maxZoom: number;
  private leafletId: string;
  private zoom: number;
  private x: number;
  private y: number;

  constructor(
    private elem: ElementRef
  ){
    // id
    this.id = elem.nativeElement.tagName.toLowerCase() + "-" +  next++;
  }

  ngOnInit() {    
    // this.accessToken  = "?access_token=";
    this.accessToken  = "";
    this.maxZoom      = 18;
    this.leafletId    = 'mapbox.streets';
    this.container    = "leaflet-map";
    this.zoom         = 6;
    this.x            = -5.09;
    this.y            = 39.505;    
    this.apiUrl       = 'http://c.tile.osm.org/{z}/{x}/{y}.png' + this.accessToken;
    this.attribution  = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a   href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>';    
  }

  ngAfterViewInit () {    
    this.map = L
                .map(this.container)
                .setView([
                  this.y, 
                  this.x
                ], this.zoom);

    L
      .tileLayer(this.apiUrl, {
        attribution:  this.attribution,
        maxZoom:      this.maxZoom,
        id:           this.leafletId,
        accessToken:  this.accessToken
      })
      .addTo(this.map);
  }  
}
