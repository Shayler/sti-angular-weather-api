import { TempCelciusPipe } from './temp-celsius.pipe';

describe('TempCelciusPipe', () => {
    let pipe: TempCelciusPipe;
    
    beforeEach(() => {
        pipe = new TempCelciusPipe();
    });

    it('should create an instance', () => {
        expect(pipe).toBeTruthy();
    })

    it('should return 1 degree celsius', () => {
        expect(pipe.transform(1.2)).toEqual('1\xB0C')
    });
})