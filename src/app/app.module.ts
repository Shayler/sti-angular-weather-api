import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { WeatherForecastComponent } from './weather/weather-forecast/weather-forecast.component';
import { WeatherRecentListComponent } from './weather/weather-recent-list/weather-recent-list.component';
import { WeatherSearchComponent } from './weather/weather-search/weather-search.component';
import { WeatherService } from './weather/shared/weather.service';
import { WeatherEffects } from './weather/store/weather.effects';
import { reducers, metaReducers } from './reducers';

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
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([WeatherEffects])
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
