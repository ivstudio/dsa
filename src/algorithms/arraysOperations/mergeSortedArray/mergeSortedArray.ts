/*
    Merge Sorted Array
    You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, 
    and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

    Merge nums1 and nums2 into a single array sorted in non-decreasing order.

    The final sorted array should not be returned by the function, but instead be stored inside 
    the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements 
    denote the elements that should be merged, and the last n elements are set to 0 and 
    should be ignored. nums2 has a length of n.


    Example 1:
    Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
    Output: [1,2,2,3,5,6]

    Example 2:
    Input: nums1 = [1], m = 1, nums2 = [], n = 0
    Output: [1]

*/

/**
 * Merges two sorted arrays into one sorted array in-place.
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * - Initialize pointers for nums1 and nums2:
 *   - nums1Pointer: Pointer for the last element in the valid part of nums1
 *   - nums2Pointer: Pointer for the last element in nums2
 *   - mergePointer: Pointer for the last position in nums1 (which has enough space to hold all elements from both arrays)
 * - Iterate while there are elements in nums2 to be processed:
 *   - If there are elements in nums1 and the current element in nums1 is greater than the current element in nums2:
 *     - Place the element from nums1 at the current position in nums1
 *     - Move the pointer in nums1 to the left
 *   - Else:
 *     - Place the element from nums2 at the current position in nums1
 *     - Move the pointer in nums2 to the left
 *   - Move the mergePointer to the left
 */
export function mergeSortedArray(
    nums1: number[],
    m: number,
    nums2: number[],
    n: number
): void {
    let nums1Pointer = m - 1;
    let nums2Pointer = n - 1;
    let mergePointer = m + n - 1;

    while (nums2Pointer >= 0) {
        if (nums1Pointer >= 0 && nums1[nums1Pointer] > nums2[nums2Pointer]) {
            nums1[mergePointer] = nums1[nums1Pointer];
            nums1Pointer--;
        } else {
            nums1[mergePointer] = nums2[nums2Pointer];
            nums2Pointer--;
        }
        mergePointer--;
    }
}
