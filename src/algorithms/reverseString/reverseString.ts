/*
    Write a function that reverses a string. 
    The input string is given as an array of characters s.

    You must do this by modifying the input array in-place with O(1) extra memory.
    
    Example 1:
    Input: s = ["h","e","l","l","o"]
    Output: ["o","l","l","e","h"]

    Example 2:
    Input: s = ["H","a","n","n","a","h"]
    Output: ["h","a","n","n","a","H"]

    Constraints:
    1 <= s.length <= 105
    s[i] is a printable ascii character.
*/

/*
    Explanation:
    - We can use two pointers approach to solve this problem.
    - We can swap the characters at the left and right pointers.
    - We can continue this process until the left pointer is less than the right pointer.


*/

export function reverseString(str: string[]): void {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        let temp = str[left];
        str[left] = str[right];
        str[right] = temp;
        left++;
        right--;
    }
}
