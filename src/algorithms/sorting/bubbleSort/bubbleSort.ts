/*
 The provided TypeScript code defines a function named 
 bubbleSort that implements the Bubble Sort algorithm f
 or sorting an array of numbers in ascending order.
 */
// export function bubbleSort(array: number[]) {
//     for (let i = array.length - 1; i > 0; i--) {
//         for (let j = 0; j < i; j++) {
//             if (array[j] > array[j + 1]) {
//                 let temp = array[j];
//                 array[j] = array[j + 1];
//                 array[j + 1] = temp;
//             }
//         }
//     }
//     return array;
// }

/**
 *
 * Optimized Bubble Sort
 *
 */
export function bubbleSort(array: number[]) {
    let isSorted = false;
    for (let i = array.length; i > 0; i--) {
        isSorted = true;
        for (let j = 0; j < i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                isSorted = false;
            }
        }
        if (isSorted) {
            return array;
        }
    }
    return array;
}

/*
The provided TypeScript code defines a function named bubbleSort 
that implements the Bubble Sort algorithm for sorting an array 
of numbers in ascending order. Here's a detailed 
explanation of how it works:

Function Definition: The function bubbleSort is defined with 
one parameter, array, which is an array of numbers (number[]). 
This function is intended to sort this array in ascending order 
and then return the sorted array.

Outer Loop: The outer loop starts with i initialized to 
the last index of the array (array.length - 1) and continues 
as long as i is greater than 0. With each iteration, 
i is decremented. This loop controls the number of passes 
through the array. After each pass, the largest unsorted 
element bubbles up to its correct position at the end of 
the array, so the range of the next pass can be reduced by 1.

Inner Loop: The inner loop iterates from the beginning 
of the array (j = 0) up to the last unsorted element (j < i). 
This loop compares adjacent elements in the array.

Swapping Elements: Inside the inner loop, there's a 
conditional statement that checks if the current
 element (array[j]) is greater than the next element (array[j + 1]). 
 If this condition is true, it means the elements are in the 
 wrong order (since we want an ascending sort), and they 
 need to be swapped.

A temporary variable temp is used to hold the value of array[j].
The value of array[j] is then replaced with the value of array[j + 1], 
effectively moving the smaller element one position to the left.
The value of array[j + 1] is then set to the value stored in temp, 
completing the swap and moving the larger element one position to the right.
Return Sorted Array: After all passes are completed (
i.e., the outer loop finishes), the array has been sorted in 
ascending order. The function then returns the sorted array.
*/
