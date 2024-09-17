/*
    Squares of a Sorted Array
    Given an integer array nums sorted in non-decreasing order, 
    return an array of the squares of each number sorted in non-decreasing order.


    Constraints:
    1 <= nums.length <= 104
    -104 <= nums[i] <= 104
    nums is sorted in non-decreasing order.

    Follow up: Squaring each element and sorting the new array is very trivial, 
    could you find an O(n) solution using a different approach?

    Example 1:
    Input: nums = [-4,-1,0,3,10]
    Output: [0,1,9,16,100]

    Example 2:
    Input: nums = [-7,-3,2,3,11]
    Output: [4,9,9,49,121]

 * Explanation:
 * - We use a two-pointer approach to solve this problem efficiently.
 * - Initialize two pointers: `left` at the start (0) and `right` at the end (nums.length - 1) of the array.
 * - Initialize an `index` pointer at the end of the result array.
 * - Compare the absolute values of the elements at the `left` and `right` pointers.
 * - Square the larger absolute value and place it at the `index` position in the result array.
 * - Move the pointer (`left` or `right`) corresponding to the larger absolute value inward.
 * - Decrement the `index` pointer.
 * - Continue this process until the `left` pointer exceeds the `right` pointer.
 * - This ensures that the largest squares are placed at the end of the result array, maintaining sorted order.
 */

export function squaresOfSortedArray(nums: number[]): number[] {
    const result: number[] = new Array(nums.length);
    let left = 0;
    let right = nums.length - 1;
    let index = nums.length - 1;

    while (left <= right) {
        const leftValue = Math.pow(nums[left], 2);
        const rightValue = Math.pow(nums[right], 2);

        if (leftValue < rightValue) {
            result[index] = rightValue;
            right--;
        } else {
            result[index] = leftValue;
            left++;
        }

        index--;
    }

    return result;
}
