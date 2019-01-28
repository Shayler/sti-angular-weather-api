import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherForecastComponent } from './weather/weather-forecast/weather-forecast.component';
import { WeatherRecentListComponent } from './weather/weather-recent-list/weather-recent-list.component';
import { WeatherSearchComponent } from './weather/weather-search/weather-search.component';
import { WeatherService } from './weather/shared/weather.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherForecastComponent,
    WeatherRecentListComponent,
    WeatherSearchComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
