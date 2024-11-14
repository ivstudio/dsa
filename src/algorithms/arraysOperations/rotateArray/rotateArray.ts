/*
    Rotate Array
    Given an integer array nums, rotate the array to 
    the right by k steps, where k is non-negative.

    Example 1:
    Input: nums = [1,2,3,4,5,6,7], k = 3
    Output: [5,6,7,1,2,3,4]
    Explanation:
    rotate 1 steps to the right: [7,1,2,3,4,5,6]
    rotate 2 steps to the right: [6,7,1,2,3,4,5]
    rotate 3 steps to the right: [5,6,7,1,2,3,4]
    Example 2:

    Example 2:
    Input: nums = [-1,-100,3,99], k = 2
    Output: [3,99,-1,-100]
    Explanation: 
    rotate 1 steps to the right: [99,-1,-100,3]
    rotate 2 steps to the right: [3,99,-1,-100]
*/

/**
 * Rotates the array to the right by k steps.
 *
 * Steps:
 * 1. Calculate the effective number of rotations needed by taking k modulo the length of the array.
 *    - This handles cases where k is greater than the length of the array.
 * 2. Reverse the entire array.
 *    - This step moves the elements that need to be rotated to the front of the array to the back.
 * 3. Reverse the first k elements.
 *    - This step places the first k elements in their correct rotated positions.
 * 4. Reverse the remaining elements from k to the end of the array.
 *    - This step places the remaining elements in their correct rotated positions.
 *
 * @param nums - The array of numbers to be rotated.
 * @param k - The number of steps to rotate the array.
 * @returns The rotated array.
 */
function reverse(nums: number[], start: number, end: number): void {
    while (start < end) {
        const temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}

export function rotate(nums: number[], k: number): number[] {
    const n = nums.length;
    k = k % n; // In case k is greater than the length of the array
    reverse(nums, 0, n - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, n - 1);
    return nums;
}
