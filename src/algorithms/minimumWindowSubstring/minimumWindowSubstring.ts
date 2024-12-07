/*
    Minimum Window Substring
    Given two strings s and t of lengths m and n respectively, return the minimum window 
    substring of s such that every character in t (including duplicates) 
    is included in the window. If there is no such substring, return the empty string "".

    Example:
    Input: s = "ADOBECODEBANC", t = "ABC"
    Output: "BANC"
    Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

    Example 2:
    Input: s = "a", t = "a"
    Output: "a"
    Explanation: The entire string s is the minimum window.

    Example 3:
    Input: s = "a", t = "aa"
    Output: ""
    Explanation: Both 'a's from t must be included in the window.

    Constraints:
    - m == s.length
    - n == t.length
    - 1 <= m, n <= 10^5

    Follow up: Could you find an algorithm that runs in O(m + n) time?
*/

export function minWindow(s: string, t: string): string {
    if (t.length === 0) return '';
    let map = new Map();

    for (let i = 0; i < t.length; i++) {
        map.set(t[i], map.has(t[i]) ? map.get(t[i]) + 1 : 1);
    }

    let left = 0;
    let right = 0;
    let count = map.size;
    let minLen = Infinity;
    let minStart = 0;

    while (right < s.length) {
        if (map.has(s[right])) {
            map.set(s[right], map.get(s[right]) - 1);
            if (map.get(s[right]) === 0) count--;
        }
        right++;

        while (count === 0) {
            if (right - left < minLen) {
                minLen = right - left;
                minStart = left;
            }

            if (map.has(s[left])) {
                map.set(s[left], map.get(s[left]) + 1);
                if (map.get(s[left]) > 0) count++;
            }
            left++;
        }
    }

    return minLen === Infinity ? '' : s.substring(minStart, minStart + minLen);
}
