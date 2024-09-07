/*
    Anagram
    An anagram is a word or phrase formed by rearranging the letters of a 
    different word or phrase, typically using all the original letters exactly once.

    Given two strings, write a function to determine if they are anagrams of each other.
    Only consider characters, not spaces or punctuation.

    Example 1:
    Input: s = "anagram", t = "nagaram"
    Output: true

    Example 2:
    Input: s = "rat", t = "car"
    Output: false

    Example 3:
    Input: s = "listen", t = "silent"
    Output: true

    Example 4:
    Input: s = "rails safety", t = "fairy tales"
    Output: true
*/

// Solution 1
// Time Complexity: O(n)
// Space Complexity: O(n)

export function isAnagram(s: string, t: string): boolean {
    // Remove all non-letter characters and convert to lower case
    s = s.replace(/[^\w]/g, '').toLowerCase();
    t = t.replace(/[^\w]/g, '').toLowerCase();

    // If the lengths of the strings are not equal, they cannot be anagrams
    if (s.length !== t.length) {
        return false;
    }

    // Create a map to count the frequency of each character in the first string
    const sMap = new Map<string, number>();

    // Populate the map with the frequency of each character in the first string
    for (const char of s) {
        // Check if the character exists in the map
        const currentCount = sMap.get(char) || 0;

        // Increment the count
        const newCount = currentCount + 1;

        // Update the map with the new count
        sMap.set(char, newCount);
    }

    // Check the frequency of each character in the second string
    for (const char of t) {
        // Check if the character exists in the map and get its current count
        const currentCount = sMap.get(char);

        // If the character is not found in the map or its count is zero, they are not anagrams
        if (currentCount === undefined || currentCount === 0) {
            return false;
        }

        // Decrement the count of the character in the map
        sMap.set(char, currentCount - 1);
    }

    // If all counts are zero, the strings are anagrams
    return true;
}
