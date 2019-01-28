import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { WeatherSearchComponent } from './weather-search.component';
import { WeatherService } from '../shared/weather.service';
import { TempCelciusPipe } from 'src/app/shared/temp-celsius.pipe';

describe('WeatherSearchComponent', () => {
  let component: WeatherSearchComponent;
  let fixture: ComponentFixture<WeatherSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherSearchComponent],
      providers: [
        WeatherService, TempCelciusPipe
      ],
      imports: [ReactiveFormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
