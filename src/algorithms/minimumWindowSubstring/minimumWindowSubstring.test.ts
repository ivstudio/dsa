import { minWindow } from './minimumWindowSubstring';

describe('minWindow', () => {
    it('should return the minimum window substring', () => {
        const s = 'ADOBECODEBANC';
        const t = 'ABC';
        const expectedOutput = 'BANC';
        expect(minWindow(s, t)).toBe(expectedOutput);
    });

    it('should return an empty string if no such window exists', () => {
        const s = 'ADOBECODEBANC';
        const t = 'XYZ';
        const expectedOutput = '';
        expect(minWindow(s, t)).toBe(expectedOutput);
    });

    it('should return the entire string if t is the same as s', () => {
        const s = 'ABC';
        const t = 'ABC';
        const expectedOutput = 'ABC';
        expect(minWindow(s, t)).toBe(expectedOutput);
    });

    it('should return an empty string if t is longer than s', () => {
        const s = 'A';
        const t = 'AA';
        const expectedOutput = '';
        expect(minWindow(s, t)).toBe(expectedOutput);
    });

    it('should handle repeated characters in t', () => {
        const s = 'AAABBBCCC';
        const t = 'ABC';
        const expectedOutput = 'ABBBC';
        expect(minWindow(s, t)).toBe(expectedOutput);
    });

    it('should handle edge case with empty t', () => {
        const s = 'ABC';
        const t = '';
        const expectedOutput = '';
        expect(minWindow(s, t)).toBe(expectedOutput);
    });

    it('should handle edge case with empty s', () => {
        const s = '';
        const t = 'ABC';
        const expectedOutput = '';
        expect(minWindow(s, t)).toBe(expectedOutput);
    });
});
