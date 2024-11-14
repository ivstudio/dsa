import { rotate } from './rotateArray';

describe('rotate', () => {
    it('should rotate the array by 3 steps', () => {
        const nums = [1, 2, 3, 4, 5, 6, 7];
        const k = 3;
        const expectedOutput = [5, 6, 7, 1, 2, 3, 4];
        expect(rotate(nums, k)).toEqual(expectedOutput);
    });

    it('should rotate the array by 2 steps', () => {
        const nums = [-1, -100, 3, 99];
        const k = 2;
        const expectedOutput = [3, 99, -1, -100];
        expect(rotate(nums, k)).toEqual(expectedOutput);
    });

    it('should handle an empty array', () => {
        const nums: number[] = [];
        const k = 3;
        const expectedOutput: number[] = [];
        expect(rotate(nums, k)).toEqual(expectedOutput);
    });

    it('should handle an array with one element', () => {
        const nums = [1];
        const k = 3;
        const expectedOutput = [1];
        expect(rotate(nums, k)).toEqual(expectedOutput);
    });

    it('should handle k greater than array length', () => {
        const nums = [1, 2, 3, 4, 5];
        const k = 7;
        const expectedOutput = [4, 5, 1, 2, 3];
        expect(rotate(nums, k)).toEqual(expectedOutput);
    });

    it('should handle k equal to 0', () => {
        const nums = [1, 2, 3, 4, 5];
        const k = 0;
        const expectedOutput = [1, 2, 3, 4, 5];
        expect(rotate(nums, k)).toEqual(expectedOutput);
    });
});
