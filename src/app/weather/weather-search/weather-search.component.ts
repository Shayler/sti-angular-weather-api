import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { WeatherService } from '../shared/weather.service';
import { CitySearchResult } from '../shared/weather.model';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.scss']
})
export class WeatherSearchComponent implements OnInit {
  searchForm: FormGroup;
  searchResults$: Observable<CitySearchResult[]>;

  constructor(
    private formBuilder: FormBuilder,
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      searchCity: ['']
    });
  }

  onSubmit() {
    if (this.searchForm.value.searchCity.length !== 0) {
      this.searchResults$ = this.weatherService.searchCity(this.searchForm.value.searchCity).pipe(
        tap(searchResults => searchResults)
      );
    }
  }
}
