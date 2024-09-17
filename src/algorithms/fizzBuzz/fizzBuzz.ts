/*
    FizzBuzz is a simple algorithm that prints numbers from 1 to n. 
    But for multiples of 3, it prints "Fizz" instead of the number 
    and for the multiples of 5, it prints "Buzz". 
    For numbers which are multiples of both three and five, 
    it prints "FizzBuzz".

    Example:
    fizzBuzz(6) => ['1', '2', 'Fizz', '4', 'Buzz', 'Fizz']
    fizzBuzz(2) => ['1', '2']

    Explanation:
    - The function loops from 1 to n.
    - If the number is divisible by 3 and 5, it adds 'FizzBuzz' to the result array.
    - If the number is divisible by 3, it adds 'Fizz' to the result array.
    - If the number is divisible by 5, it adds 'Buzz' to the result array.
    - Otherwise, it adds the number to the result array.
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
