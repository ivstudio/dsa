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

    Explanation:
    - We can use two pointers approach to solve this problem.
    - We can compare the absolute values of the elements at the left and right pointers.
    - We can square the larger absolute value and add it to the result array.
    - We can continue this process until the left pointer is less than the right pointer.
*/

export function squaresOfSortedArray(nums: number[]): number[] {
    const result: number[] = [];
    let left = 0;
    let right = nums.length - 1;
    let index = nums.length - 1;

    while (left <= right) {
        const leftValue = Math.pow(nums[left], 2);
        const rightValue = Math.pow(nums[right], 2);

        if (leftValue > rightValue) {
            result[index] = leftValue;
            left++;
        } else {
            result[index] = rightValue;
            right--;
        }

        index--;
    }

    return result;
}
