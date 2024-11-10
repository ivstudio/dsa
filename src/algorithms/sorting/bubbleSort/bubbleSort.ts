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
export function bubbleSorta(array: number[]) {
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
Function Definition: The bubbleSort function takes one parameter, 
array, which is an array of numbers (number[]). This function sorts 
array in ascending order and returns the sorted array.

Outer Loop (Pass Control):
The outer loop starts with i initialized to the length of the array 
and decreases with each iteration. This loop dictates the number of
passes needed through the array to ensure all elements are in their 
correct positions. With each pass, the largest remaining unsorted 
element moves to its final position at the end of the array, 
reducing the range of unsorted elements by 1.

Inner Loop (Comparison and Swapping):
The inner loop iterates over the elements of the array up to the 
last unsorted element (j < i - 1). In each iteration, 
it compares adjacent elements:

If the current element (array[j]) is greater than the 
next element (array[j + 1]), they are out of order 
and need to be swapped.
A temporary variable (temp) is used to store array[j] during the swap. 
This process moves the smaller element one position to the left and 
the larger element one position to the right.

Early Termination with isSorted Flag:
The isSorted flag optimizes the algorithm by allowing an early exit 
if no swaps are made in a pass, indicating that the array is 
already sorted. If isSorted remains true after an inner loop pass, 
the function returns the sorted array immediately.

Return:
After all necessary passes are complete, the array is sorted, and 
the function returns the sorted array.

Time Complexity:
The time complexity of the Bubble Sort algorithm is O(n^2) in the
worst and average cases, where n is the number of elements in the array.

Space Complexity:
The space complexity of the Bubble Sort algorithm is O(1) since
the algorithm sorts the array in place, using only a constant amount
of extra space for temporary variables.
*/
