import { isAnagram } from './anagram';

describe('isAnagram', () => {
    it('should return true for anagrams', () => {
        expect(isAnagram('listen', 'silent')).toBe(true);
        expect(isAnagram('anagram', 'nagaram')).toBe(true);
        expect(isAnagram('rat', 'tar')).toBe(true);
        expect(isAnagram('rail safety', 'fairy tales')).toBe(true);
    });

    it('should return false for non-anagrams', () => {
        expect(isAnagram('hello', 'world')).toBe(false);
        expect(isAnagram('rat', 'car')).toBe(false);
        expect(isAnagram('anagram', 'nagaramm')).toBe(false);
    });

    it('should return false for strings of different lengths', () => {
        expect(isAnagram('a', 'ab')).toBe(false);
        expect(isAnagram('abc', 'abcd')).toBe(false);
    });

    it('should return true for empty strings', () => {
        expect(isAnagram('', '')).toBe(true);
    });

    it('should handle case sensitivity', () => {
        expect(isAnagram('Listen', 'Silent')).toBe(true);
        expect(isAnagram('LISTEN', 'SILENT')).toBe(true);
        expect(isAnagram('Listen', 'Silentt')).toBe(false);
    });

    it('should handle spaces and punctuation', () => {
        expect(isAnagram('conversation', 'voices rant on')).toBe(true);
        expect(isAnagram('a gentleman', 'elegant man')).toBe(true);
        expect(isAnagram('William Shakespeare', 'I am a weakish speller')).toBe(
            true
        );
    });
});
