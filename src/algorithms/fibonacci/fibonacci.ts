/*
    Fibonacci
    The Fibonacci sequence is a series of numbers in which each number 
    ( Fibonacci number ) is the sum of the two preceding ones, 
     usually starting with 0 and 1.

     Print out the n-th entry in the fibonacci series.

    Example:
    fibonacci(4) => 3
    fibonacci(6) => 8
    fibonacci(10) => 55

*/

export const fibonacci = (n: number): number => {
    const memo: { [key: number]: number } = {};

    const fib = (n: number): number => {
        if (n <= 2) return 1;
        if (memo[n]) return memo[n];
        memo[n] = fib(n - 1) + fib(n - 2);
        return memo[n];
    };

    return fib(n);
};
