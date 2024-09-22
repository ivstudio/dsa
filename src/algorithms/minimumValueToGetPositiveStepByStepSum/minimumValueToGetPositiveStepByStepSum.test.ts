import { minStartValue } from './minimumValueToGetPositiveStepByStepSum';

describe('minStartValue', () => {
    it('should return 5 for the array [-3, 2, -3, 4, 2]', () => {
        const nums = [-3, 2, -3, 4, 2];
        expect(minStartValue(nums)).toBe(5);
    });

    it('should return 1 for the array [1, 2, 3]', () => {
        const nums = [1, 2, 3];
        expect(minStartValue(nums)).toBe(1);
    });

    it('should return 5 for the array [-3, 2, -3, 4, 2]', () => {
        const nums = [-3, 2, -3, 4, 2];
        expect(minStartValue(nums)).toBe(5);
    });

    it('should return 1 for the array [1, 2, 3]', () => {
        const nums = [1, 2, 3];
        expect(minStartValue(nums)).toBe(1);
    });

    it('should return 5 for the array [-3, 2, -3, 4, 2]', () => {
        const nums = [-3, 2, -3, 4, 2];
        expect(minStartValue(nums)).toBe(5);
    });

    it('should return 1 for the array [1, 2, 3]', () => {
        const nums = [1, 2, 3];
        expect(minStartValue(nums)).toBe(1);
    });

    it('should return 1 for the array [0, 0, 0]', () => {
        const nums = [0, 0, 0];
        expect(minStartValue(nums)).toBe(1);
    });

    it('should return 1 for an empty array', () => {
        const nums: number[] = [];
        expect(minStartValue(nums)).toBe(1);
    });
});
