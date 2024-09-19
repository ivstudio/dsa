import { findMaxAverage } from './maximumAverageSubarray';

describe('findMaxAverage', () => {
    it('should return the maximum average of any subarray of length k', () => {
        expect(findMaxAverage([1, 12, -5, -6, 50, 3], 4)).toBeCloseTo(12.75);
        expect(findMaxAverage([5, 5, 5, 5, 5], 1)).toBe(5);
        expect(findMaxAverage([1, 2, 3, 4, 5], 2)).toBe(4.5);
        expect(findMaxAverage([1, 2, 3, 4, 5], 5)).toBe(3);
    });

    it('should handle cases where k is equal to the length of nums', () => {
        expect(findMaxAverage([1, 2, 3, 4, 5], 5)).toBe(3);
    });

    it('should handle cases where k is greater than the length of nums', () => {
        expect(findMaxAverage([1, 2, 3], 4)).toBeNaN();
    });

    it('should handle cases with negative numbers', () => {
        expect(findMaxAverage([1, 12, -5, -6, 50, 3], 4)).toBeCloseTo(12.75);
    });

    it('should handle cases with a single element', () => {
        expect(findMaxAverage([5], 1)).toBe(5.0);
    });
});
