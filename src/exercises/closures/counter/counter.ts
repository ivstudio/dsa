/*
    Create a function that returns an object with two methods:
    - increment: increments a counter by 1
    - decrement: decrements a counter by 1
    - get: returns the current value of the counter
*/

export function counter() {
    let counter = 0;
    return {
        increment: () => counter++,
        decrement: () => counter--,
        get: () => counter,
    };
}
