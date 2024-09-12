import { isPalindrome } from './palindrome';

describe('isPalindrome', () => {
    it('should return true for a palindrome string', () => {
        expect(isPalindrome('madam')).toBe(true);
        expect(isPalindrome('nurses run')).toBe(true);
        expect(isPalindrome('racecar')).toBe(true);
        expect(isPalindrome('We panic in a pew')).toBe(true);
    });

    it('should return false for a non-palindrome string', () => {
        expect(isPalindrome('hello')).toBe(false);
    });

    it('should return true for a palindrome number', () => {
        expect(isPalindrome(121)).toBe(true);
        expect(isPalindrome(214121412)).toBe(true);
    });

    it('should return false for a non-palindrome number', () => {
        expect(isPalindrome(123)).toBe(false);
    });

    it('should return true for a single character string', () => {
        expect(isPalindrome('a')).toBe(true);
    });

    it('should return true for an empty string', () => {
        expect(isPalindrome('')).toBe(true);
    });
});
