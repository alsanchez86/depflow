// Basic imports
import { Component, ElementRef, OnInit, Input } from '@angular/core';

// Classes
import { Restaurant } from '../../classes';

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
  @Input() restaurants: Restaurant[];

  public id: string;
  private map: object;
  private apiUrl: string;
  private container: string;
  private icon: object;
  private imagesFolder: string;
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
    this.icon         = {};
    this.zoom         = 6;
    this.x            = -5.09;
    this.y            = 39.505;    
    this.imagesFolder = 'assets/images/';
    this.apiUrl       = 'http://c.tile.osm.org/{z}/{x}/{y}.png' + this.accessToken;
    this.attribution  = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a   href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>';    
  }

  ngAfterViewInit () {    
    this.initMap();
    this.drawMap();  
    this.iconMarker();
    this.drawData();  
  }  

  private initMap(): void {
    this.map = L
      .map(this.container)
      .setView([
        this.y, 
        this.x
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
    L
      .marker(
        [51.5, -0.09],
        {icon: this.icon}
      )
      .addTo(this.map);
  }
}
