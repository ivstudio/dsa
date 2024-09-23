/*
    Interval (closure)
    Implement the function interval that executes a 
    function over a given time interval.

    The function should return a function that when 
    called will execute the original function every interval milliseconds.

    The function should also return a function that when
    called will stop the interval.

*/

export function interval(fn: Function, interval: number) {
    let timer = setInterval(fn, interval);
    return () => clearInterval(timer);
}
