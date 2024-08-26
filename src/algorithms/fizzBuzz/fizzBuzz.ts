/*
    FizzBuzz is a simple algorithm that prints numbers from 1 to n. 
    But for multiples of 3, it prints "Fizz" instead of the number 
    and for the multiples of 5, it prints "Buzz". 
    For numbers which are multiples of both three and five, 
    it prints "FizzBuzz".
*/

export function fizzBuzz(n: number): string[] {
    const result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push('FizzBuzz');
        } else if (i % 3 === 0) {
            result.push('Fizz');
        } else if (i % 5 === 0) {
            result.push('Buzz');
        } else {
            result.push(i.toString());
        }
    }
    return result;
}
