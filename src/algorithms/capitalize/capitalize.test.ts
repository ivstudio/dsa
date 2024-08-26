import { capitalize } from './capitalize';

describe('capitalize', () => {
    it('should capitalize the first letter of each word in a single word string', () => {
        expect(capitalize('hello')).toBe('Hello');
    });

    it('should capitalize the first letter of each word in a multi-word string', () => {
        expect(capitalize('hello world i am john doe')).toBe(
            'Hello World I Am John Doe'
        );
    });

    it('should handle strings with mixed case', () => {
        expect(capitalize('hElLo WoRLd')).toBe('Hello World');
    });

    it('should handle strings with leading and trailing spaces', () => {
        expect(capitalize('  hello world  ')).toBe('  Hello World  ');
    });

    it('should handle empty strings', () => {
        expect(capitalize('')).toBe('');
    });

    it('should handle strings with multiple spaces between words', () => {
        expect(capitalize('hello   world')).toBe('Hello   World');
    });

    it('should handle strings with special characters', () => {
        expect(capitalize('hello-world')).toBe('Hello-world');
    });
});
