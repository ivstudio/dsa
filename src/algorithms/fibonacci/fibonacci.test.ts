import { fibonacci } from './fibonacci';

describe('fibonacci', () => {
    it('should return 1 for n = 1', () => {
        expect(fibonacci(1)).toBe(1);
    });

    it('should return 1 for n = 2', () => {
        expect(fibonacci(2)).toBe(1);
    });

    it('should return 2 for n = 3', () => {
        expect(fibonacci(3)).toBe(2);
    });

    it('should return 3 for n = 4', () => {
        expect(fibonacci(4)).toBe(3);
    });

    it('should return 5 for n = 5', () => {
        expect(fibonacci(5)).toBe(5);
    });

    it('should return 8 for n = 6', () => {
        expect(fibonacci(6)).toBe(8);
    });

    it('should return 13 for n = 7', () => {
        expect(fibonacci(7)).toBe(13);
    });

    it('should return 21 for n = 8', () => {
        expect(fibonacci(8)).toBe(21);
    });

    it('should return 34 for n = 9', () => {
        expect(fibonacci(9)).toBe(34);
    });

    it('should return 55 for n = 10', () => {
        expect(fibonacci(10)).toBe(55);
    });

    it('should return 6765 for n = 20', () => {
        expect(fibonacci(20)).toBe(6765);
    });

    it('should handle large n values efficiently', () => {
        expect(fibonacci(50)).toBe(12586269025);
    });
});
