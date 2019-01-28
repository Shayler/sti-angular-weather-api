import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [WeatherService, HttpClient, HttpHandler]
  }));

  it('should be created', () => {
    const service: WeatherService = TestBed.get(WeatherService);
    expect(service).toBeTruthy();
  });
});
