/*
    Running Sum of 1d Array
    Given an array nums. We define a running sum of an array as
    runningSum[i] = sum(nums[0]…nums[i]).

    Return the running sum of nums.

    Example 1:
    Input: nums = [1,2,3,4]
    Output: [1,3,6,10]
    Explanation: Running sum is obtained as follows: 
    [1, 1+2, 1+2+3, 1+2+3+4].

    Example 2:
    Input: nums = [1,1,1,1,1]
    Output: [1,2,3,4,5]
    Explanation: Running sum is obtained as follows: 
    [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].


    Constraints:
    1 <= nums.length <= 1000
    -10^6 <= nums[i] <= 10^6
*/

/*
Using the prefix sum technique
Time Complexity: O(n)
Space Complexity: O(1)
*/
export function runningSum(nums: number[]): number[] {
    const array = new Array(nums.length);
    array[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        array[i] = array[i - 1] + nums[i];
    }
    return array;
}

/*
Map function
Time Complexity: O(n)
Space Complexity: O(1)

export function runningSum(nums: number[]): number[] {
    let sum = 0;
    return nums.map(num => (sum += num));
}

*/
