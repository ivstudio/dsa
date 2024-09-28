/*
    K Radius Subarray Averages

    You are given a 0-indexed array nums of n integers, and an integer k.

    The k-radius average for a subarray of nums centered at some index i with 
    the radius k is the average of all elements in nums between the 
    indices i - k and i + k (inclusive). If there are less than k elements 
    before or after the index i, then the k-radius average is -1.

    Build and return an array avgs of length n where avgs[i] is the k-radius 
    average for the subarray centered at index i.

    The average of x elements is the sum of the x elements divided by x, using 
    integer division. The integer division truncates toward zero, which means 
    losing its fractional part.

    Example 1:
    Input: nums = [1,3,2,6,-1,4,1,8,2], k = 2
    Output: [2,2,3,3,2,3,4,4,4]

    Explanation:
    The k-radius average for the subarray centered at index 0 is (1 + 3) / 2 = 2.
    The k-radius average for the subarray centered at index 1 is (1 + 3 + 2 + 6) / 4 = 3.
    The k-radius average for the subarray centered at index 2 is (1 + 3 + 2 + 6 + -1 + 4) / 6 = 3.
    The k-radius average for the subarray centered at index 3 is (3 + 2 + 6 + -1 + 4 + 1) / 6 = 3.
    The k-radius average for the subarray centered at index 4 is (2 + 6 + -1 + 4 + 1 + 8) / 6 = 2.
    The k-radius average for the subarray centered at index 5 is (6 + -1 + 4 + 1 + 8 + 2) / 6 = 3.
    The k-radius average for the subarray centered at index 6 is (-1 + 4 + 1 + 8 + 2) / 5 = 4.
    The k-radius average for the subarray centered at index 7 is (4 + 1 + 8 + 2) / 4 = 4.
    The k-radius average for the subarray centered at index 8 is (1 + 8 + 2) / 3 = 4.

    Example 2:
    Input: nums = [2,3,1], k = 1
    Output: [2,2,2]

    Explanation:
    The k-radius average for the subarray centered at index 0 is (2) / 1 = 2.
    The k-radius average for the subarray centered at index 1 is (2 + 3 + 1) / 3 = 2.
    The k-radius average for the subarray centered at index 2 is (3 + 1) / 2 = 2.

*/

/**
 * This function calculates the k-radius subarray averages for a given array.
 *
 * Step-by-step explanation:
 * 1. Initialize variables:
 *    - `n` is the length of the input array `nums`.
 *    - `avgs` is an array of the same length as `nums`,
 *       initialized with `-1` to indicate positions where
 *       the average cannot be calculated.
 *    - `windowSize` is the size of the subarray, which is `2 * k + 1`.
 *    - `sum` is used to keep track of the sum of the current window.
 *
 * 2. Iterate through the array `nums`:
 *    - Add the current element to `sum`.
 *    - If the window size exceeds `windowSize`, subtract the element
 *      that falls out of the window from `sum`.
 *    - Once the window is fully within the bounds of the array
 *      (i.e., `i >= windowSize - 1`), calculate the average and store
 *      it in the `avgs` array at the appropriate position (`i - k`).
 *
 * 3. Return the `avgs` array containing the averages of the subarrays.
 */

export function kRadiusSubarrayAverages(nums: number[], k: number): number[] {
    const n = nums.length;
    const avgs: number[] = new Array(n).fill(-1);
    const windowSize = 2 * k + 1;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += nums[i];
        if (i >= windowSize) {
            sum -= nums[i - windowSize];
        }
        if (i >= windowSize - 1) {
            avgs[i - k] = Math.floor(sum / windowSize);
        }
    }

    return avgs;
}

// Time Complexity: O(n * k)
// Space Complexity: O(n)
// Brute Force
// export function kRadiusSubarrayAverages(nums: number[], k: number): number[] {
//     let avgs: number[] = [];
//     for (let i = 0; i < nums.length; i++) {
//         let sum = 0;
//         let count = 0;
//         for (let j = i - k; j <= i + k; j++) {
//             if (j >= 0 && j < nums.length) {
//                 sum += nums[j];
//                 count++;
//             }
//         }
//         avgs.push(Math.floor(sum / count));
//     }
//     return avgs;
// }
