import { removeDuplicates } from './removeDuplicatesfromSortedArray';

describe('removeDuplicates', () => {
    it('should return the length of array with no duplicates', () => {
        const nums = [1, 2, 3, 4, 5];
        const length = removeDuplicates(nums);
        expect(length).toBe(5);
        expect(nums.slice(0, length)).toEqual([1, 2, 3, 4, 5]);
    });

    it('should return the length of array with some duplicates', () => {
        const nums = [1, 1, 2, 2, 3];
        const length = removeDuplicates(nums);
        expect(length).toBe(3);
        expect(nums.slice(0, length)).toEqual([1, 2, 3]);
    });

    it('should return the length of array with all duplicates', () => {
        const nums = [1, 1, 1, 1, 1];
        const length = removeDuplicates(nums);
        expect(length).toBe(1);
        expect(nums.slice(0, length)).toEqual([1]);
    });

    it('should return the length of an empty array', () => {
        const nums: number[] = [];
        const length = removeDuplicates(nums);
        expect(length).toBe(0);
        expect(nums.slice(0, length)).toEqual([]);
    });

    it('should return the length of array with a single element', () => {
        const nums = [1];
        const length = removeDuplicates(nums);
        expect(length).toBe(1);
        expect(nums.slice(0, length)).toEqual([1]);
    });
});
