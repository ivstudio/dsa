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

   Explanation:
   - The function uses a sliding window approach to find the 
     longest substring without repeating characters.
   - It maintains a map (or dictionary) to store the index of each character.
   - Two pointers, `pointLeft` and `pointRight`, are used to traverse the string.
   - `pointRight` expands the window by moving to the right.
   - If a repeating character is found, `pointLeft` is moved to the right of 
     the previous index of the repeating character.
   - The length of the current window is calculated as `pointRight - pointLeft + 1`.
   - The function keeps track of the maximum length of all windows encountered.
   - Finally, it returns the length of the longest substring without repeating characters.

*/

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
