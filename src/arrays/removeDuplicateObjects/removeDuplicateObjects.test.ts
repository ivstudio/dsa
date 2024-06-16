import { removeDuplicateObjects, movies } from './removeDuplicateObjects';

describe('removeDuplicateObjects', () => {
    it('should remove duplicate movies', () => {
        const result = removeDuplicateObjects(movies);
        const expected = [
            { title: 'Casablanca' },
            { title: 'The Wizard of Oz' },
            { title: 'Lawrence of Arabia' },
            { title: 'Citizen Kane' },
        ];
        expect(result).toEqual(expected);
    });

    it('should throw an error when the input is not an array', () => {
        expect(() => removeDuplicateObjects('not an array' as any)).toThrow(
            'Input should be an array'
        );
    });
});
