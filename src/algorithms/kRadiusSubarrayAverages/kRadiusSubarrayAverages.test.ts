import { kRadiusSubarrayAverages } from './kRadiusSubarrayAverages';

describe('kRadiusSubarrayAverages', () => {
    test('should return correct averages for k = 1', () => {
        const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const k = 1;
        const result = kRadiusSubarrayAverages(nums, k);
        expect(result).toEqual([-1, 2, 3, 4, 5, 6, 7, 8, -1]);
    });

    test('should return correct averages for k = 2', () => {
        const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const k = 2;
        const result = kRadiusSubarrayAverages(nums, k);
        expect(result).toEqual([-1, -1, 3, 4, 5, 6, 7, -1, -1]);
    });

    test('should return all -1 for k larger than array length', () => {
        const nums = [1, 2, 3];
        const k = 5;
        const result = kRadiusSubarrayAverages(nums, k);
        expect(result).toEqual([-1, -1, -1]);
    });

    test('should return correct averages for k = 0', () => {
        const nums = [1, 2, 3, 4, 5];
        const k = 0;
        const result = kRadiusSubarrayAverages(nums, k);
        expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    test('should handle empty array', () => {
        const nums: number[] = [];
        const k = 1;
        const result = kRadiusSubarrayAverages(nums, k);
        expect(result).toEqual([]);
    });

    test('should handle single element array', () => {
        const nums = [5];
        const k = 1;
        const result = kRadiusSubarrayAverages(nums, k);
        expect(result).toEqual([-1]);
    });
});
