/*
    Capitalize
    - The first letter of each word in the string is capitalized
    - The rest of the word is in lowercase

    Example:
    - capitalize('hello world') returns 'Hello World'
    - capitalize('hELLO wORLD') returns 'Hello World'
    - capitalize('HELLO WORLD') returns 'Hello World'

    Explanation:
    - The function splits the input string into an array of words.
    - It then maps over each word, capitalizing the first letter and converting the rest to lowercase.
    - Finally, it joins the words back together into a single string.

    Time Complexity:
    - O(n)

*/

export function capitalize(str: string): string {
    return str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}
