import { interval } from './interval';

describe('interval', () => {
    jest.useFakeTimers();

    it('should call the function at the specified interval', () => {
        const fn = jest.fn();
        const intervalTime = 1000;
        const clear = interval(fn, intervalTime);

        // Fast-forward time
        jest.advanceTimersByTime(intervalTime * 3);

        expect(fn).toHaveBeenCalledTimes(3);

        clear();
    });

    it('should stop calling the function after clearInterval is called', () => {
        const fn = jest.fn();
        const intervalTime = 1000;
        const clear = interval(fn, intervalTime);

        // Fast-forward time
        jest.advanceTimersByTime(intervalTime * 3);

        expect(fn).toHaveBeenCalledTimes(3);

        // Clear the interval
        clear();

        // Fast-forward time again
        jest.advanceTimersByTime(intervalTime * 3);

        // Ensure the function was not called again
        expect(fn).toHaveBeenCalledTimes(3);
    });
});
