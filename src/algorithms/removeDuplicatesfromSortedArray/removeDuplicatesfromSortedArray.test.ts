import { removeDuplicates } from './removeDuplicatesfromSortedArray';

describe('removeDuplicates', () => {
    it('should remove duplicates from a sorted array', () => {
        const nums = [1, 1, 2];
        const expectedLength = 2;
        const expectedNums = [1, 2];
        const length = removeDuplicates(nums);
        expect(length).toBe(expectedLength);
        expect(nums.slice(0, length)).toEqual(expectedNums);
    });

    it('should handle an array with no duplicates', () => {
        const nums = [1, 2, 3];
        const expectedLength = 3;
        const expectedNums = [1, 2, 3];
        const length = removeDuplicates(nums);
        expect(length).toBe(expectedLength);
        expect(nums.slice(0, length)).toEqual(expectedNums);
    });

    it('should handle an empty array', () => {
        const nums: number[] = [];
        const expectedLength = 0;
        const length = removeDuplicates(nums);
        expect(length).toBe(expectedLength);
        expect(nums.slice(0, length)).toEqual([]);
    });

    it('should handle an array with all duplicates', () => {
        const nums = [1, 1, 1, 1];
        const expectedLength = 1;
        const expectedNums = [1];
        const length = removeDuplicates(nums);
        expect(length).toBe(expectedLength);
        expect(nums.slice(0, length)).toEqual(expectedNums);
    });

    it('should handle an array with multiple duplicates', () => {
        const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
        const expectedLength = 5;
        const expectedNums = [0, 1, 2, 3, 4];
        const length = removeDuplicates(nums);
        expect(length).toBe(expectedLength);
        expect(nums.slice(0, length)).toEqual(expectedNums);
    });
});
