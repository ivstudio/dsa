import { reverseString } from './reverseString';

describe('reverseString', () => {
    it('should reverse a string with multiple characters', () => {
        const str = ['h', 'e', 'l', 'l', 'o'];
        reverseString(str);
        expect(str).toEqual(['o', 'l', 'l', 'e', 'h']);
    });

    it('should reverse a string with an even number of characters', () => {
        const str = ['a', 'b', 'c', 'd'];
        reverseString(str);
        expect(str).toEqual(['d', 'c', 'b', 'a']);
    });

    it('should reverse a string with an odd number of characters', () => {
        const str = ['a', 'b', 'c'];
        reverseString(str);
        expect(str).toEqual(['c', 'b', 'a']);
    });

    it('should handle a single character string', () => {
        const str = ['a'];
        reverseString(str);
        expect(str).toEqual(['a']);
    });

    it('should handle an empty string', () => {
        const str: string[] = [];
        reverseString(str);
        expect(str).toEqual([]);
    });

    it('should handle a string with spaces', () => {
        const str = ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd'];
        reverseString(str);
        expect(str).toEqual([
            'd',
            'l',
            'r',
            'o',
            'w',
            ' ',
            'o',
            'l',
            'l',
            'e',
            'h',
        ]);
    });
});
