import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import {} from 'googlemaps'
import { AgmCoreModule } from '@agm/core';
import { MapcomponentComponent } from './mapcomponent/mapcomponent.component';
// import { GoogleMapsModule } from '@angular/google-maps';

// import { google } from '@google/maps';


@NgModule({
  declarations: [
    AppComponent,
    MapcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAcR-lxe-yyP6XjhH7OY2IyoivJV7KJ7RU'
    }),
    // GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
