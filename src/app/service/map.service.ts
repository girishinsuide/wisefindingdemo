import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapService {
map: mapboxgl.Map;
style = 'mapbox://styles/merrillgonsalves/ck42go29w08qv1cqpxv9ukbox';
lat = 31.722444437784787;
lng = 35.987033147636225;
zoom = 18
size = 200;
framesPerSecond = 15; 
initialOpacity = 1
opacity = this.initialOpacity;
initialRadius = 8;
radius = this.initialRadius;
maxRadius = 18;

	    constructor() { 
	  		mapboxgl.accessToken = 'pk.eyJ1IjoibWVycmlsbGdvbnNhbHZlcyIsImEiOiJjajN6ampkbzcwM3VxMzJyemR5Y2dqdTZuIn0.EGosEkXFJM5K_82Vy0XuCA';
	  	}
	    buildMap() {
		  this.map = new mapboxgl.Map({
		    container: 'map',
		    style: this.style,
		    zoom: this.zoom,
		    center: [this.lng, this.lat]
		  })
		 this.map.addControl(new mapboxgl.NavigationControl());
		}
	 	placeMarker(lat,lng){
	 	//because in pois they provide mapbox style lat lng that's why no need to revers lng and lat
	 		var marker = new mapboxgl.Marker()
	 					.setLngLat([lat,lng])
	 					.addTo(this.map)
	 	}
	 	placeUser(lat,lng){
	 		
			this.map.on('load',  ()=> {
			var framesPerSecond = 15; 
			var initialOpacity = 1
			var opacity = initialOpacity;
			var initialRadius = 8;
			var radius = initialRadius;
			var maxRadius = 18;
			var map = this.map;
		    // Add a source and layer displaying a point which will be animated in a circle.
		    this.map.addSource('point', {
		        "type": "geojson",
		        "data": {
		            "type": "Point",
		            "coordinates": [
		                35.98730704665377, 31.722489017752636
		            ]
		        }
		    });

		    this.map.addLayer({
		        "id": "point",
		        "source": "point",
		        "type": "circle",
		        "paint": {
		            "circle-radius": initialRadius,
		            "circle-radius-transition": {duration: 0},
		            "circle-opacity-transition": {duration: 0},
		            "circle-color": "#007cbf"
		        }
		    });



		    function animateMarker(timestamp) {
		        setTimeout(()=>{
		            requestAnimationFrame(animateMarker);

		            radius += (maxRadius - radius) / framesPerSecond;
		            opacity -= ( .9 / framesPerSecond );

		            map.setPaintProperty('point', 'circle-radius', radius);
		            map.setPaintProperty('point', 'circle-opacity', 1);

		            if (opacity <= 0) {
		                radius = initialRadius;
		                opacity = initialOpacity;
		            } 

		        }, 1000 / 16);
		        
		    }

		    // Start the animation.
		    animateMarker(0);
		});//map load
 	}//end placeUser
	 		
	
      

    


}
