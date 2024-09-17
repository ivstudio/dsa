import { squaresOfSortedArray } from './squaresOfSortedArray';

describe('squaresOfSortedArray', () => {
    it('should return the squares of a sorted array of mixed negative and positive numbers', () => {
        const nums = [-4, -1, 0, 3, 10];
        const expected = [0, 1, 9, 16, 100];
        expect(squaresOfSortedArray(nums)).toEqual(expected);
    });

    it('should return the squares of a sorted array of all negative numbers', () => {
        const nums = [-7, -3, -1];
        const expected = [1, 9, 49];
        expect(squaresOfSortedArray(nums)).toEqual(expected);
    });

    it('should return the squares of a sorted array of all positive numbers', () => {
        const nums = [1, 2, 3, 4];
        const expected = [1, 4, 9, 16];
        expect(squaresOfSortedArray(nums)).toEqual(expected);
    });

    it('should return the squares of a sorted array containing zero', () => {
        const nums = [0, 1, 2];
        const expected = [0, 1, 4];
        expect(squaresOfSortedArray(nums)).toEqual(expected);
    });

    it('should return an empty array when input is an empty array', () => {
        const nums: number[] = [];
        const expected: number[] = [];
        expect(squaresOfSortedArray(nums)).toEqual(expected);
    });

    it('should return the square of a single element array', () => {
        const nums = [5];
        const expected = [25];
        expect(squaresOfSortedArray(nums)).toEqual(expected);
    });
});
