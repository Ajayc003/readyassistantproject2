import { Component } from '@angular/core';
// import { copyFileSync } from 'fs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'readyassisstantassignment2';
  staticlocation='Static location'
  lat = 51.678418;
  lng = 78.809007;
  earth=6378;
  pi=3.142
  m=(1/((2*3.142/360)*6378.137))/1000
  newlat=this.lat+(5000*this.m);
  m1=(1/((2*3.142/360)*6378.137))/1000
  newlong=this.lng+(5000*this.m)/Math.cos(this.lat*(3.142/180))
  // lat2=this.lng+1.0;

  onloc(event: any){
    console.log(event)
   
    this.lat=event.coords.lat;
    this.lng=event.coords.lng;
    console.log(this.lat)
    this.newlat=this.lat+(5000*this.m);
  this.newlong=this.lng+(5000*this.m)/Math.cos(this.lat*(3.142/180))
  
    // this.lng1=event.coords.lng+.0;
    // this.lat2=this.lng+1.0;
    // console.log(this.lng1)
  }
  
}
