import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { Store, StoreModule } from '@ngrx/store';

import { WeatherEffects } from './weather.effects';
import { WeatherService } from '../shared/weather.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('WeatherEffects', () => {
    let actions$: Observable<any>;
    let effects: WeatherEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [StoreModule.forRoot({})],
            providers: [
                WeatherEffects,
                WeatherService,
                HttpClient,
                HttpHandler,
                Store,
                provideMockActions(() => actions$)
            ]
        });

        effects = TestBed.get(WeatherEffects);
    });

    it('should be created', () => {
        expect(effects).toBeTruthy();
    });
});