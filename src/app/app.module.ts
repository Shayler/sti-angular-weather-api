import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherForecastComponent } from './weather/weather-forecast/weather-forecast.component';
import { WeatherRecentListComponent } from './weather/weather-recent-list/weather-recent-list.component';
import { WeatherSearchComponent } from './weather/weather-search/weather-search.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherForecastComponent,
    WeatherRecentListComponent,
    WeatherSearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
