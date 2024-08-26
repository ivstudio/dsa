import { fizzBuzz } from './fizzBuzz';

describe('fizzBuzz', () => {
    it('should return correct FizzBuzz sequence for n = 15', () => {
        const expected = [
            '1',
            '2',
            'Fizz',
            '4',
            'Buzz',
            'Fizz',
            '7',
            '8',
            'Fizz',
            'Buzz',
            '11',
            'Fizz',
            '13',
            '14',
            'FizzBuzz',
        ];
        expect(fizzBuzz(15)).toEqual(expected);
    });

    it('should return correct FizzBuzz sequence for n = 5', () => {
        const expected = ['1', '2', 'Fizz', '4', 'Buzz'];
        expect(fizzBuzz(5)).toEqual(expected);
    });

    it('should return correct FizzBuzz sequence for n = 3', () => {
        const expected = ['1', '2', 'Fizz'];
        expect(fizzBuzz(3)).toEqual(expected);
    });

    it('should return correct FizzBuzz sequence for n = 1', () => {
        const expected = ['1'];
        expect(fizzBuzz(1)).toEqual(expected);
    });

    it('should return an empty array for n = 0', () => {
        const expected: string[] = [];
        expect(fizzBuzz(0)).toEqual(expected);
    });
});
