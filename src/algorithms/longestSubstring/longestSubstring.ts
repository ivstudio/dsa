/* 
   Longest Substring Without Repeating Characters
   Given a string, find the length of the longest 
   substring without repeating characters.

    Example 1:
    Input: "abcabcbb"
    Output: 3
    Explanation: The answer is "abc", with the length of 3.

    Example 2:
    Input: "bbbbb"
    Output: 1
    Explanation: The answer is "b", with the length of 1.

    Example 3:
    Input: "pwwkew"
    Output: 3
    Explanation: The answer is "wke", with the length of 3.
*/

// Solution 1
// Time Complexity: O(n)
// Space Complexity: O(n)

export function lengthOfLongestSubstring(s: string): number {
    // Initialize maxLength to keep track of the maximum length of substring found
    let maxLength = 0;
    // Initialize start to represent the starting index of the current window
    let start = 0;
    // Initialize a map to store the last index of each character encountered
    let map = new Map();

    // Loop through each character in the string
    for (let i = 0; i < s.length; i++) {
        // If the character is already in the map, it means we have encountered a repeating character
        if (map.has(s[i])) {
            // Update the start index to the right of the last occurrence of the current character
            start = Math.max(map.get(s[i]) + 1, start);
        }

        // Update the map with the current index of the character
        map.set(s[i], i);
        // Calculate the length of the current window and update maxLength if the current window is longer
        maxLength = Math.max(maxLength, i - start + 1);
    }

    // Return the maximum length of the substring without repeating characters
    return maxLength;
}
