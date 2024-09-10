import { timeLimit } from './promiseTimeLimit';

describe('timeLimit', () => {
    it('should resolve if the function completes within the time limit', async () => {
        const fn = async (n: number) => {
            await new Promise(res => setTimeout(res, 100));
            return n * n;
        };
        const limitedFn = timeLimit(fn, 150);
        const result = await limitedFn(5);
        expect(result).toBe(25);
    });

    it('should reject if the function exceeds the time limit', async () => {
        const fn = async (n: number) => {
            await new Promise(res => setTimeout(res, 100));
            return n * n;
        };
        const limitedFn = timeLimit(fn, 50);
        await expect(limitedFn(5)).rejects.toEqual('Time Limit Exceeded');
    });

    it('should resolve with the correct result if the function completes within the time limit', async () => {
        const fn = async (a: number, b: number) => {
            await new Promise(res => setTimeout(res, 120));
            return a + b;
        };
        const limitedFn = timeLimit(fn, 150);
        const result = await limitedFn(5, 10);
        expect(result).toBe(15);
    });

    it('should reject immediately if the function throws an error', async () => {
        const fn = async () => {
            throw 'Error';
        };
        const limitedFn = timeLimit(fn, 1000);
        await expect(limitedFn()).rejects.toEqual('Error');
    });
});
