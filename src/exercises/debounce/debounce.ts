/*
    Debounce
    Implement a debounce function that will prevent a function from 
    being called if it is called again before a certain amount of time has passed.

    The debounce function will take a function and a time interval as arguments.

    The function should return a new function that will only call the
    original function if the time interval has passed since the last time it was called.

*/

export function debounce<T extends (...args: any[]) => void>(
    fn: T,
    interval: number
) {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    return (...args: Parameters<T>): void => {
        if (timeoutId !== null) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            fn(...args);
        }, interval);
    };
}
