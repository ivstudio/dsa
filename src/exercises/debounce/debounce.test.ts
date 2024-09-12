import { debounce } from './debounce';

jest.useFakeTimers();

describe('debounce', () => {
    it('should call the function after the specified interval', () => {
        const fn = jest.fn();
        const debouncedFn = debounce(fn, 200);

        debouncedFn();
        expect(fn).not.toHaveBeenCalled();

        jest.advanceTimersByTime(200);
        expect(fn).toHaveBeenCalled();
    });

    it('should call the function only once if called multiple times within the interval', () => {
        const fn = jest.fn();
        const debouncedFn = debounce(fn, 200);

        debouncedFn();
        debouncedFn();
        debouncedFn();

        jest.advanceTimersByTime(200);
        expect(fn).toHaveBeenCalledTimes(1);
    });

    it('should pass the correct arguments to the debounced function', () => {
        const fn = jest.fn();
        const debouncedFn = debounce(fn, 200);

        debouncedFn(1, 2, 3);

        jest.advanceTimersByTime(200);
        expect(fn).toHaveBeenCalledWith(1, 2, 3);
    });

    it('should reset the timer if called again within the interval', () => {
        const fn = jest.fn();
        const debouncedFn = debounce(fn, 200);

        debouncedFn();
        jest.advanceTimersByTime(100);
        debouncedFn();
        jest.advanceTimersByTime(100);
        debouncedFn();

        jest.advanceTimersByTime(200);
        expect(fn).toHaveBeenCalledTimes(1);
    });
});
