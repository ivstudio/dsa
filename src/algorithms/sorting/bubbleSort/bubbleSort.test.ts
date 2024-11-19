import { bubbleSort } from './bubbleSort';

describe('bubbleSort', () => {
    it('should sort an array of numbers in ascending order', () => {
        const array = [1, 11, 5, 22, 33, 3, 8, 4, 2];
        const sortedArray = bubbleSort(array);
        expect(sortedArray).toEqual([1, 2, 3, 4, 5, 8, 11, 22, 33]);
    });

    it('should handle an empty array', () => {
        const sortedArray = bubbleSort([]);
        expect(sortedArray).toEqual([]);
    });

    it('should handle an array with one element', () => {
        const array = [1];
        const sortedArray = bubbleSort(array);
        expect(sortedArray).toEqual([1]);
    });

    it('should not change an already sorted array', () => {
        const array = [1, 2, 3, 4, 5];
        const sortedArray = bubbleSort(array);
        expect(sortedArray).toEqual([1, 2, 3, 4, 5]);
    });

    it('should correctly sort an array with negative numbers', () => {
        const array = [-3, -1, -2, -4, -5];
        const sortedArray = bubbleSort(array);
        expect(sortedArray).toEqual([-5, -4, -3, -2, -1]);
    });
});
