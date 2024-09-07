import { lengthOfLongestSubstring } from './longestSubstring';

describe('lengthOfLongestSubstring', () => {
    it('should return 3 for "abcabcbb"', () => {
        expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
    });

    it('should return 1 for "bbbbb"', () => {
        expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
    });

    it('should return 3 for "pwwkew"', () => {
        expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
    });

    it('should return 0 for an empty string', () => {
        expect(lengthOfLongestSubstring('')).toBe(0);
    });

    it('should return 5 for "abcde"', () => {
        expect(lengthOfLongestSubstring('abcde')).toBe(5);
    });

    it('should return 2 for "aab"', () => {
        expect(lengthOfLongestSubstring('aab')).toBe(2);
    });

    it('should return 3 for "dvdf"', () => {
        expect(lengthOfLongestSubstring('dvdf')).toBe(3);
    });
});
