import { Component, OnInit } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { MapService } from "../service/map.service";

@Component({
  selector: 'app-mapdemo',
  templateUrl: './mapdemo.component.html',
  styleUrls: ['./mapdemo.component.css']
})
export class MapdemoComponent implements OnInit {

poiList:any= [
     {
       "lat":35.98635276581075,
       "lng":31.721805644748002,
        poiTitle:"Poi1"
     },
     {
       "lat":35.98643411373018,
       "lng":31.721900037334535,
       poiTitle:"Poi2"
     },
     {
       "lat":35.986200225182586,
       "lng":31.722606741453177,
       poiTitle:"Poi3"
     },
     {
       "lat":35.98630509730896,
       "lng":31.722539688379584,
       poiTitle:"Poi4"
     },
     {
       "lat":35.98657773883164,
       "lng":31.722205069990352,
       poiTitle:"Poi5"
     },
     {
       "lat":35.98679993554833,
       "lng":31.722142795646874,
       poiTitle:"Poi6"
     },
     {
       "lat":35.98673961656414,
       "lng":31.722415582473417,
        poiTitle:"Poi7"
     },
     {
       "lat":35.98708660863409,
       "lng":31.72218991900104,
        poiTitle:"Poi8"
     },
     {
       "lat":35.987033147636225,
       "lng":31.722444437784787,
        poiTitle:"Poi9"
     },
     {
       "lat":35.98736135321917,
       "lng":31.72222121541155,
        poiTitle:"Poi10"

     },
     {
       "lat":35.98730704665377,
       "lng":31.722489017752636,
        poiTitle:"Poi11"
     }
]
  constructor(private map: MapService) {
   }

  ngOnInit(): void {
  	this.map.buildMap()
  	this.poiList.forEach(item=>{
  	this.map.placeMarker(item.lat,item.lng)

  	})
  	this.map.placeUser(35.98730704665377,31.722489017752636)
  	// this.map.animateMarker(0);
  }
  

}
 