import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'tempCelcius' })
export class TempCelciusPipe implements PipeTransform {
    transform(value: number): string {
        const deg = Math.round(value);
        return (deg + '\xB0C');
    }
}
