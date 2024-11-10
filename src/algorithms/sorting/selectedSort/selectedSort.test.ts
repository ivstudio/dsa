import { selectedSort } from './selectedSort';

describe('selectedSort', () => {
    test('should sort an array of numbers in ascending order', () => {
        const input = [5, 3, 8, 4, 2];
        const expectedOutput = [2, 3, 4, 5, 8];
        expect(selectedSort(input)).toEqual(expectedOutput);
    });

    test('should handle an empty array', () => {
        const input: number[] = [];
        const expectedOutput: number[] = [];
        expect(selectedSort(input)).toEqual(expectedOutput);
    });

    test('should handle an array with one element', () => {
        const input = [1];
        const expectedOutput = [1];
        expect(selectedSort(input)).toEqual(expectedOutput);
    });

    test('should handle an array with already sorted elements', () => {
        const input = [1, 2, 3, 4, 5];
        const expectedOutput = [1, 2, 3, 4, 5];
        expect(selectedSort(input)).toEqual(expectedOutput);
    });

    test('should handle an array with duplicate elements', () => {
        const input = [5, 3, 8, 3, 2];
        const expectedOutput = [2, 3, 3, 5, 8];
        expect(selectedSort(input)).toEqual(expectedOutput);
    });
});
