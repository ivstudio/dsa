import { findMaxConsecutiveOnes } from './maxConsecutiveOnes';

describe('findMaxConsecutiveOnes', () => {
    it('should return the maximum number of consecutive 1s when no 0s need to be flipped', () => {
        expect(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1], 0)).toBe(3);
    });

    it('should return the maximum number of consecutive 1s when some 0s can be flipped', () => {
        expect(findMaxConsecutiveOnes([1, 1, 0, 0, 1, 1, 1, 0, 1, 1], 2)).toBe(
            7
        );
    });

    it('should return the maximum number of consecutive 1s when all 0s can be flipped', () => {
        expect(findMaxConsecutiveOnes([1, 0, 0, 1, 0, 1, 1, 0, 1, 1], 5)).toBe(
            10
        );
    });

    it('should return the length of the array when all elements are 1s', () => {
        expect(findMaxConsecutiveOnes([1, 1, 1, 1, 1], 2)).toBe(5);
    });

    it('should return the length of the array when k is greater than or equal to the number of 0s', () => {
        expect(findMaxConsecutiveOnes([1, 0, 1, 0, 1], 2)).toBe(5);
    });

    it('should return 0 when the array is empty', () => {
        expect(findMaxConsecutiveOnes([], 2)).toBe(0);
    });

    it('should handle edge case where k is 0 and array contains only 0s', () => {
        expect(findMaxConsecutiveOnes([0, 0, 0, 0], 0)).toBe(0);
    });

    it('should handle edge case where k is greater than the length of the array', () => {
        expect(findMaxConsecutiveOnes([1, 0, 1, 0, 1], 10)).toBe(5);
    });
});
