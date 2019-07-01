import { NumberOfConsonants } from './numberOfConsonants';

describe('NumberOfConsonants', () => {
    const pipe = new NumberOfConsonants();

    it('create an instance of NumberOfConsonants', () => {
        expect(pipe).toBeTruthy();
    });

    describe('Bad Inputs', () => {
        it('should return null', () => {
            expect(pipe.count(null)).toEqual(0);
        });
    });

    describe('Transformation', () => {
        it('should return 3', () => {
            expect(pipe.count('ervr')).toEqual(3);
        });

        it('should return 3', () => {
            expect(pipe.count('!sd2z')).toEqual(3);
        });

        it('should return 6', () => {
            expect(pipe.count('fsdf df345 $$@')).toEqual(6);
        });
    });
});
