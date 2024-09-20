/*
    Given a binary array nums and an integer k, return the maximum number 
    of consecutive 1's in the array if you can flip at most k 0's.

    Example 1:
    Input: [1,1,1,0,0,0,1,1,1,1,0], k = 2
    Output: 6

    Example 2:
    Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
    Output: 10


    Constraints:
    1 <= nums.length <= 105
    nums[i] is either 0 or 1.
    0 <= k <= nums.length
*/

/*----------------------------------------------------------------
Explanation steps:
----------------------------------------------------------------
1. Initialize left and right pointers to 0.
2. Initialize zeroCount to 0.
3. Iterate through the array.
4. If the current element is 0, increment zeroCount.
5. While zeroCount is greater than k, increment left pointer.
6. Update maxOnes with the maximum of maxOnes and the current window size.
7. Increment right pointer.
8. Return maxOnes.
----------------------------------------------------------------*/

export function findMaxConsecutiveOnes(nums: number[], k: number): number {
    let left = 0;
    let right = 0;
    let maxOnes = 0;
    let zeroCount = 0;

    while (right < nums.length) {
        if (nums[right] === 0) {
            zeroCount++;
        }

        while (zeroCount > k) {
            if (nums[left] === 0) {
                zeroCount--;
            }
            left++;
        }

        maxOnes = Math.max(maxOnes, right - left + 1);
        right++;
    }

    return maxOnes;
}
