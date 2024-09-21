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
 1. Initialization:
    - startWindow is initialized to 0 to represent the start of the window.
    - maxOnes is initialized to 0 to keep track of the maximum number of consecutive 1s found.
    - zeroCount is initialized to 0 to keep track of the number of 0s in the current window.
 
 2. Iteration:
    - The endWindow pointer iterates through the array to expand the window.
 
 3. Counting Zeros:
    - If nums[endWindow] is 0, increment zeroCount to account for the new 0 in the window.
 
 4. Adjusting the Window:
    -  If zeroCount exceeds k, the window is adjusted by moving the startWindow pointer to 
       the right until zeroCount is less than or equal to k.
    - If nums[startWindow] is 0, decrement zeroCount because this 0 is no longer in the window.
 
 5. Updating Maximum:
    -  The size of the current window is calculated as endWindow - startWindow + 1.
    -  maxOnes is updated to be the maximum of the current maxOnes and the size of the current window.
 
 6. Returning Result:
    -  After the iteration is complete, maxOnes is returned as the result, representing 
       the maximum number of consecutive 1s that can be achieved by flipping at most k 0s.
----------------------------------------------------------------*/

export function findMaxConsecutiveOnes1(nums: number[], k: number): number {
    let startWindow = 0;
    let maxOnes = 0;
    let zeroCount = 0;

    for (let endWindow = 0; endWindow < nums.length; endWindow++) {
        if (nums[endWindow] === 0) {
            zeroCount++;
        }

        while (zeroCount > k) {
            if (nums[startWindow] === 0) {
                zeroCount--;
            }
            startWindow++;
        }

        maxOnes = Math.max(maxOnes, endWindow - startWindow + 1);
    }

    return maxOnes;
}
