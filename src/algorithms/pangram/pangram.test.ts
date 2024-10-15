import { isPangram } from './pangram';

describe('isPangram', () => {
    test.each([
        'The quick brown fox jumps over the lazy dog',
        'Pack my box with five dozen liquor jugs',
        'Jackdaws love my big sphinx of quartz',
        'The five boxing wizards jump quickly',
        'How vexingly quick daft zebras jump!',
        'Bright vixens jump; dozy fowl quack',
    ])('should return true for pangram sentence "%s"', sentence => {
        expect(isPangram(sentence)).toBe(true);
    });

    it('should return false for a non-pangram sentence', () => {
        const sentence = 'Hello world';
        expect(isPangram(sentence)).toBe(false);
    });

    it('should return false for an empty string', () => {
        const sentence = '';
        expect(isPangram(sentence)).toBe(false);
    });

    it('should return false for a sentence with missing letters', () => {
        const sentence = 'The quick brown fox jumps over the lazy';
        expect(isPangram(sentence)).toBe(false);
    });

    it('should return true for a pangram sentence with uppercase letters', () => {
        const sentence = 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG';
        expect(isPangram(sentence.toLowerCase())).toBe(true);
    });
});
