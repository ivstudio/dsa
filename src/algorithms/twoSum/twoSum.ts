/*----------------------------------------------------------------
  Two Sum
  Given an array of integers nums and an integer target, 
  return indices of the two numbers such that they add up to target.

  If there is no target return null.

  example:
    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]

    Input: nums = [3,2,4], target = 6
    Output: [1,2]

    Input: nums = [3,3], target = 6
    Output: [0,1]

    Input: nums = [2, 3, 7, 9, 1], target = 11
    Output: [0, 3]
----------------------------------------------------------------*/

/*----------------------------------------------------------------
    Efficient Solution
    Time Complexity: O(n)
    Where n is the number of elements in the input array nums.

    Why is it efficient?
    The efficient solution uses a map to store the numbers.

    constraints:
    Only one valid combination exists.
----------------------------------------------------------------*/

export function twoSum(nums: number[], target: number): number[] | null {
    // Create a map to store the numbers and their indices
    const map = new Map<number, number>();

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement of the current number
        const complement = target - nums[i];

        // Check if the complement exists in the map
        if (map.has(complement)) {
            // If it exists, return the indices of the complement and the current number
            return [map.get(complement)!, i];
        }

        // If it doesn't exist, add the current number and its index to the map
        map.set(nums[i], i);
    }

    // If no solution is found, return null
    return null;
}

/*----------------------------------------------------------------
    Efficient Solution
    Time Complexity: O(n)

    Multiple valid combinations if they exist or null if they don't.
----------------------------------------------------------------*/

export function twoSumMultiple(
    nums: number[],
    target: number
): number[][] | null {
    const numCollection: { [key: number]: number } = {};
    const result: number[][] = [];

    for (let p1 = 0; p1 < nums.length; p1++) {
        const complement = target - nums[p1];

        if (numCollection[complement] !== undefined) {
            result.push([numCollection[complement], p1]);
        }
        numCollection[nums[p1]] = p1;
    }

    return result.length > 0 ? result : null;
}

/*----------------------------------------------------------------
    Inefficient Solution
    Time Complexity: O(n^2)

    Why is it inefficient?
    The inefficient solution uses two nested loops to iterate 
    through the array.
  ----------------------------------------------------------------*/
function twoSumIneficient(nums: number[], target: number): number[] | null {
    // Iterate through the array with two nested loops
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            // Check if the sum of the current pair equals the target
            if (nums[i] + nums[j] === target) {
                // If it does, return the indices of the pair
                return [i, j];
            }
        }
    }

    // If no solution is found, return null
    return null;
}
