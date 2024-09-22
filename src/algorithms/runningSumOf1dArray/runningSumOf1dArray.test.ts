import { runningSum } from './runningSumOf1dArray';

describe('runningSum', () => {
    it('should return the running sum of an array of numbers', () => {
        expect(runningSum([1, 2, 3, 4])).toEqual([1, 3, 6, 10]);
        expect(runningSum([1, 1, 1, 1, 1])).toEqual([1, 2, 3, 4, 5]);
        expect(runningSum([3, 1, 2, 10, 1])).toEqual([3, 4, 6, 16, 17]);
    });

    it('should handle an empty array', () => {
        expect(runningSum([])).toEqual([]);
    });

    it('should handle an array with one element', () => {
        expect(runningSum([5])).toEqual([5]);
    });

    it('should handle negative numbers', () => {
        expect(runningSum([-1, -2, -3, -4])).toEqual([-1, -3, -6, -10]);
    });
});
