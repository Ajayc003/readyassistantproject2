import { Component, OnInit } from '@angular/core';
import {} from 'googlemaps'

@Component({
  selector: 'app-mapcomponent',
  templateUrl: './mapcomponent.component.html',
  styleUrls: ['./mapcomponent.component.css']
})
export class MapcomponentComponent implements OnInit {
  map!:google.maps.Map;
  center!:google.maps.LatLngLiteral;

  source!:google.maps.LatLngLiteral;
  destination!:google.maps.LatLngLiteral;
  options:google.maps.MapOptions={
    mapTypeId:google.maps.MapTypeId.ROADMAP,
    scrollwheel:false,
    disableDoubleClickZoom:true,
    disableDefaultUI:true,
    zoom:15  
  }
  ds!:google.maps.DirectionsService;
  dr!:google.maps.DirectionsRenderer;

  constructor() { }

  ngOnInit(): void {
this.ds=new google.maps.DirectionsService();
this.dr=new google.maps.DirectionsRenderer({
  map:undefined,
  suppressMarkers:true
})

    navigator.geolocation.getCurrentPosition(positon=>{
      this.center={
        lat:positon.coords.latitude,
        lng:positon.coords.longitude
      }
      this.map=new google.maps.Map(document.getElementById('map-canvas')!,{
        ...this.options,
        center:this.center
      })

      var marker= new google.maps.Marker({
        position:this.center,
        map:this.map
      })
    });
    
  }

}
