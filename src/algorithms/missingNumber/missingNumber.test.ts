import { missingNumber } from './missingNumber';

describe('Missing Number', () => {
    it('should return the missing number when input is [3, 0, 1]', () => {
        const nums = [3, 0, 1];
        expect(missingNumber(nums)).toBe(2);
    });

    it('should return the missing number when input is [0, 1]', () => {
        const nums = [0, 1];
        expect(missingNumber(nums)).toBe(2);
    });

    it('should return the missing number when input is [9, 6, 4, 2, 3, 5, 7, 0, 1]', () => {
        const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
        expect(missingNumber(nums)).toBe(8);
    });

    it('should return 0 when input is [1]', () => {
        const nums = [1];
        expect(missingNumber(nums)).toBe(0);
    });

    it('should return 1 when input is [0]', () => {
        const nums = [0];
        expect(missingNumber(nums)).toBe(1);
    });

    it('should return the missing number when input is [0, 1, 2, 4]', () => {
        const nums = [0, 1, 2, 4];
        expect(missingNumber(nums)).toBe(3);
    });
});
