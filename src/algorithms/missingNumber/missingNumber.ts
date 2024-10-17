/*
    Missing Number
    Given an array nums containing n distinct numbers in the range [0, n], 
    return the only number in the range that is missing from the array.

    Example 1:
    Input: nums = [3,0,1]
    Output: 2

    Example 2:
    Input: nums = [0,1]
    Output: 2

    Example 3:
    Input: nums = [9,6,4,2,3,5,7,0,1]
    Output: 8
*/

/*
    Explanation:
    - expectedSum: The sum of the first n natural numbers is n * (n + 1) / 2.
    - actualSum: The sum of the numbers in the array.
    - The difference between the expected sum and the actual sum is the missing number.

*/
export const missingNumber = (nums: number[]): number => {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((acc, num) => acc + num, 0);
    return expectedSum - actualSum;
};
