import { twoSum, twoSumMultiple } from './twoSum';

describe('twoSum', () => {
    it('should return indices of the two numbers that add up to the target', () => {
        const nums = [2, 7, 11, 15];
        const target = 9;
        const result = twoSum(nums, target);
        expect(result).toEqual([0, 1]);
    });

    it('should return null if no two numbers add up to the target', () => {
        const nums = [1, 2, 3, 4];
        const target = 8;
        const result = twoSum(nums, target);
        expect(result).toBeNull();
    });

    it('should return indices of the first valid pair if multiple pairs add up to the target', () => {
        const nums = [2, 3, 7, 9, 1];
        const target = 11;
        const result = twoSum(nums, target);
        expect(result).toEqual([0, 3]);
    });

    it('should handle arrays with duplicate numbers', () => {
        const nums = [3, 3, 4, 5];
        const target = 6;
        const result = twoSum(nums, target);
        expect(result).toEqual([0, 1]);
    });
});

describe('twoSumMultiple', () => {
    it('returns all pairs of indices whose values sum up to the target', () => {
        const nums = [1, 2, 3, 4, 3];
        const target = 6;
        const result = twoSumMultiple(nums, target);
        expect(result).toEqual([
            [1, 3],
            [2, 4],
        ]);
    });

    it('returns null when no pairs are found', () => {
        const nums = [1, 2, 3, 4];
        const target = 10;
        const result = twoSumMultiple(nums, target);
        expect(result).toBeNull();
    });

    it('returns the correct pair when only one pair exists', () => {
        const nums = [1, 2, 3, 4];
        const target = 5;
        const result = twoSumMultiple(nums, target);

        expect(result).toEqual([
            [1, 2],
            [0, 3],
        ]);
    });

    it('handles duplicate numbers correctly', () => {
        const nums = [1, 2, 2, 3];
        const target = 4;
        const result = twoSumMultiple(nums, target);
        expect(result).toEqual([
            [1, 2],
            [0, 3],
        ]);
    });
});
