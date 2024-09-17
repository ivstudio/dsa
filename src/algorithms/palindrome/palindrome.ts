/*
    Palindrome
    A palindrome is a word, phrase, number, or other sequence of characters
    that reads the same forward and backward.

    Example: madam, 12321, racecar,

    Constraint:
    - The solution must use only constant extra space, i.e., O(1) space complexity.

    Explanation:
    - Convert the input to a string
    - Initialize two pointers, left and right, pointing to the start and end of the string respectively
    - While left is less than right, compare the characters at the left and right pointers
    - If the characters are not equal, return false
    - Otherwise, increment left and decrement right
    - If the loop completes, return true

    Limitation:
    - This approach does not work for negative numbers or special characters
    - To handle negative numbers, convert the number to a string and remove the '-' sign
    - To handle special characters, remove them from the string before comparison
    RegEx can be used to remove special characters and spaces
    - str.replace(/[^a-zA-Z0-9]/g, '')

    Time complexity:
    - O(n), where n is the length of the input string

    Space complexity:
    - O(1)
*/

export const isPalindrome = (input: string | number): boolean => {
    const str = input.toString().toLowerCase().split(' ').join('');

    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
};
