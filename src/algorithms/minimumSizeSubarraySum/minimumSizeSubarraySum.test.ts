import { minSubArrayLen } from './minimumSizeSubarraySum';

describe('minSubArrayLen', () => {
    it('should return the minimal length of a contiguous subarray with sum >= target', () => {
        const target = 7;
        const nums = [2, 3, 1, 2, 4, 3];
        const expectedOutput = 2; // [4, 3] is the smallest subarray with sum >= 7
        expect(minSubArrayLen(target, nums)).toBe(expectedOutput);
    });

    it('should return 0 if no subarray sums to target', () => {
        const target = 100;
        const nums = [1, 2, 3, 4, 5];
        const expectedOutput = 0;
        expect(minSubArrayLen(target, nums)).toBe(expectedOutput);
    });

    it('should handle an empty array', () => {
        const target = 7;
        const nums: number[] = [];
        const expectedOutput = 0;
        expect(minSubArrayLen(target, nums)).toBe(expectedOutput);
    });

    it('should handle an array with one element equal to target', () => {
        const target = 5;
        const nums = [5];
        const expectedOutput = 1;
        expect(minSubArrayLen(target, nums)).toBe(expectedOutput);
    });

    it('should handle an array with one element less than target', () => {
        const target = 5;
        const nums = [3];
        const expectedOutput = 0;
        expect(minSubArrayLen(target, nums)).toBe(expectedOutput);
    });

    it('should handle an array where the entire array is the smallest subarray', () => {
        const target = 15;
        const nums = [1, 2, 3, 4, 5];
        const expectedOutput = 5;
        expect(minSubArrayLen(target, nums)).toBe(expectedOutput);
    });
});
