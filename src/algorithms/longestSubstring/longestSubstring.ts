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
    if (!s) {
        return 0;
    }

    const seen = new Map<string, number>();
    let left = 0;
    let longest = 0;

    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];
        const prevSeenCharIndex = seen.get(currentChar);

        if (prevSeenCharIndex >= left) {
            left = prevSeenCharIndex + 1;
        }

        seen.set(currentChar, right);
        longest = Math.max(longest, right - left + 1);
    }

    return longest;
}
