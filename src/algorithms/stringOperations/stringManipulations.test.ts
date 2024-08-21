import {
    removeDuplicateCharacters,
    extractVowels,
    getUniqueIntersectingCharacters,
    countCharacters,
    isPalindrome,
    isAnagram,
    isAnagramOptimized,
} from './stringManipulations';

/*----------------------------------------------------------------
The removeDuplicateCharacters
*----------------------------------------------------------------*/
describe('removeDuplicateLetters', () => {
    it('should remove duplicate characters from a string', () => {
        const result = removeDuplicateCharacters('banana');
        const expected = 'ban';
        expect(result).toEqual(expected);
    });

    it('should return an empty string when the input is an empty string', () => {
        const result = removeDuplicateCharacters('');
        const expected = '';
        expect(result).toEqual(expected);
    });

    it('should return the same string when there are no duplicates', () => {
        const result = removeDuplicateCharacters('abc');
        const expected = 'abc';
        expect(result).toEqual(expected);
    });
});

/*----------------------------------------------------------------
Extract Vowels
*----------------------------------------------------------------*/
describe('extractVowels', () => {
    it('should return all vowels from a string', () => {
        const result = extractVowels('hello world');
        const expected = 'eoo';
        expect(result).toEqual(expected);
    });

    it('should return an empty string when there are no vowels', () => {
        const result = extractVowels('rhythm');
        const expected = '';
        expect(result).toEqual(expected);
    });

    it('should return the same string when the string is made up of vowels only', () => {
        const result = extractVowels('aeiou');
        const expected = 'aeiou';
        expect(result).toEqual(expected);
    });
});

/*----------------------------------------------------------------
Get Unique Intersecting Characters
*----------------------------------------------------------------*/
describe('getUniqueIntersectingCharacters', () => {
    it('should return unique duplicate letters from two strings', () => {
        const result = getUniqueIntersectingCharacters('hello', 'world');
        const expected = 'llo';
        expect(result).toEqual(expected);
    });

    it('should return an empty string when there are no duplicate letters', () => {
        const result = getUniqueIntersectingCharacters(
            'Lorem ipsum dolor sit amet',
            'zyzxq'
        );
        const expected = '';
        expect(result).toEqual(expected);
    });

    it('should return the same string when the second string contains all letters of the first string', () => {
        const result = getUniqueIntersectingCharacters('abc', 'abcabc');
        const expected = 'abc';
        expect(result).toEqual(expected);
    });

    it('should return a string for not passing arguments', () => {
        const result = getUniqueIntersectingCharacters();
        const expected = '';
        expect(result).toEqual(expected);
    });
});

/*----------------------------------------------------------------
Count Characters
*----------------------------------------------------------------*/

describe('countCharacters', () => {
    it('should correctly count the number of each character in a string', () => {
        const result = countCharacters('hello world');
        const expected = { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 };
        expect(result).toEqual(expected);
    });

    it('should return an empty object for an empty string', () => {
        const result = countCharacters();
        const expected = {};
        expect(result).toEqual(expected);
    });
});

/*----------------------------------------------------------------
Check for Palindrome
*----------------------------------------------------------------*/
describe('isPalindrome', () => {
    it('should return true for a palindrome', () => {
        expect(isPalindrome('racecar')).toBe(true);
    });

    it('should return false for a non-palindrome', () => {
        expect(isPalindrome('hello')).toBe(false);
    });

    it('should be case-insensitive', () => {
        expect(isPalindrome('RaceCar')).toBe(true);
    });

    it('should return true for an empty string', () => {
        expect(isPalindrome('')).toBe(true);
    });
});

/*----------------------------------------------------------------
Check for Anagram
*----------------------------------------------------------------*/
describe('isAnagram', () => {
    it('should return true for anagrams', () => {
        expect(isAnagram('listen', 'silent')).toBe(true);
    });

    it('should return false for non-anagrams', () => {
        expect(isAnagram('hello', 'world')).toBe(false);
        expect(isAnagram('Hi there', 'Bye there')).toBe(false);
    });

    it('should be case-insensitive', () => {
        expect(isAnagram('Listen', 'Silent')).toBe(true);
    });

    it('should ignore spaces, punctuation, and special characters', () => {
        expect(isAnagram('A gentleman', 'Elegant man')).toBe(true);
        expect(isAnagram('Fourth of July', 'Joyful Fourth')).toBe(true);
        expect(isAnagram('debit card', 'bad credit')).toBe(true);
    });
});

describe('isAnagramOptimized', () => {
    it('should return true for anagrams', () => {
        expect(isAnagramOptimized('listen', 'silent')).toBe(true);
    });

    it('should return false for non-anagrams', () => {
        expect(isAnagramOptimized('hello', 'world')).toBe(false);
        expect(isAnagramOptimized('Hi there', 'Bye there')).toBe(false);
    });

    it('should be case-insensitive', () => {
        expect(isAnagramOptimized('Listen', 'Silent')).toBe(true);
    });

    it('should ignore spaces, punctuation, and special characters', () => {
        expect(isAnagramOptimized('A gentleman', 'Elegant man')).toBe(true);
        expect(isAnagramOptimized('Fourth of July', 'Joyful Fourth')).toBe(
            true
        );
        expect(isAnagramOptimized('debit card', 'bad credit')).toBe(true);
    });
});
