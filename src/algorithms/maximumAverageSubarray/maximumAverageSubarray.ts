/*
    Maximum Average Subarray I

    You are given an integer array nums consisting of n elements, and an integer k.
    Find a contiguous subarray whose length is equal to k that has the maximum 
    average value and return this value. Any answer with a calculation error less
    than 10-5 will be accepted.

    Example 1:
    Input: nums = [1,12,-5,-6,50,3], k = 4
    Output: 12.75000

    Example 2:
    Input: nums = [5], k = 1
    Output: 5.00000

    Example 3:
    Input: nums = [0,1,2,3,4], k = 2
    Output: 2.50000

    Constraints:
    n == nums.length
    1 <= k <= n <= 105
    -104 <= nums[i] <= 104

    Solution:
    - Create a variable to store the sum of the first k elements
    - Create a variable to store the maximum sum
    - Iterate through the array starting from k
        - Add the current element and subtract the first element of the previous subarray
        - Update the maximum sum if the current sum is greater than the maximum sum
    - Return the maximum sum divided by k

    Time Complexity: O(n)
    Space Complexity: O(1)

  [1, 12, -5, -6, 50, 3] and k = 4.

*/

export function findMaxAverage(nums: number[], k: number): number {
    if (k > nums.length) {
        return NaN; // Handle case where k is greater than the length of nums
    }

    // Initialize the left and right boundaries of the window
    let leftWindow = 0;
    let rightWindow = k - 1;
    let sum = 0;

    // Calculate the initial sum of the first k elements
    for (let i = 0; i <= rightWindow; i++) {
        sum += nums[i];
    }

    // Initialize maxSum with the initial sum
    let maxSum = sum;

    // Slide the window from left to right
    while (rightWindow < nums.length - 1) {
        // Move the right boundary of the window one step to the right
        rightWindow++;
        /* Update the sum by adding the new element entering 
           the window and subtracting the old element leaving the window */
        sum += nums[rightWindow] - nums[leftWindow];
        // Move the left boundary of the window one step to the right
        leftWindow++;
        // Update maxSum if the current sum is greater than the previous maxSum
        maxSum = Math.max(maxSum, sum);
    }

    // Return the maximum average by dividing maxSum by k
    return maxSum / k;
}
