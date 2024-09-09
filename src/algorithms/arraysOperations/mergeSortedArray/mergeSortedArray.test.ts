// mergeSortedArray.test.ts
import { mergeSortedArray } from './mergeSortedArray';

describe('mergeSortedArray', () => {
    it('should merge two sorted arrays correctly', () => {
        const nums1 = [1, 2, 3, 0, 0, 0];
        const nums2 = [2, 5, 6];
        mergeSortedArray(nums1, 3, nums2, 3);
        expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
    });

    it('should handle empty nums2 array', () => {
        const nums1 = [1, 2, 3];
        const nums2: number[] = [];
        mergeSortedArray(nums1, 3, nums2, 0);
        expect(nums1).toEqual([1, 2, 3]);
    });

    it('should handle empty nums1 array', () => {
        const nums1 = [0, 0, 0];
        const nums2 = [1, 2, 3];
        mergeSortedArray(nums1, 0, nums2, 3);
        expect(nums1).toEqual([1, 2, 3]);
    });

    it('should handle both arrays being empty', () => {
        const nums1: number[] = [];
        const nums2: number[] = [];
        mergeSortedArray(nums1, 0, nums2, 0);
        expect(nums1).toEqual([]);
    });

    it('should handle nums1 having larger elements', () => {
        const nums1 = [4, 5, 6, 0, 0, 0];
        const nums2 = [1, 2, 3];
        mergeSortedArray(nums1, 3, nums2, 3);
        expect(nums1).toEqual([1, 2, 3, 4, 5, 6]);
    });
});
