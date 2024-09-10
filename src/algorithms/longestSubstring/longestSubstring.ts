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

    const charIndexMap = new Map<string, number>();
    let pointLeft = 0;
    let maxLength = 0;

    for (let pointRight = 0; pointRight < s.length; pointRight++) {
        const currentChar = s[pointRight];
        const prevIndex = charIndexMap.get(currentChar);

        if (prevIndex >= pointLeft) {
            pointLeft = prevIndex + 1;
        }

        charIndexMap.set(currentChar, pointRight);
        maxLength = Math.max(maxLength, pointRight - pointLeft + 1);
    }

    return maxLength;
}