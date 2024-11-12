/**
 * selectedSort
 * Sorts an array of numbers in ascending order using the selection sort algorithm.
 * - Finds the smallest element in the unsorted portion of the array.
 * - Swaps it with the first unsorted element.
 * - Repeats the process for the next unsorted element.
 * - Continues until the entire array is sorted.
 *
 * @param arr - The array of numbers to be sorted.
 * @returns The sorted array.
 */

export function selectedSort(arr: number[]): number[] {
    let lowest;
    for (let i = 0; i < arr.length; i++) {
        lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if (lowest !== i) {
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}
