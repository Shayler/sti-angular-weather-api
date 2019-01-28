import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';

import { WeatherForecastComponent } from './weather-forecast.component';
import { TempCelciusPipe } from 'src/app/shared/temp-celsius.pipe';
import * as fromWeather from '../store/weather.reducer';
import * as fromRoot from '../../reducers';

describe('WeatherForecastComponent', () => {
  let component: WeatherForecastComponent;
  let fixture: ComponentFixture<WeatherForecastComponent>;
  let store: Store<fromWeather.WeatherState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          ...fromRoot.reducers,
        })
      ],
      declarations: [
        WeatherForecastComponent,
        TempCelciusPipe
      ]
    });

    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();

    fixture = TestBed.createComponent(WeatherForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
