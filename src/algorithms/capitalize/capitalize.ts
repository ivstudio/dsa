/*
    Capitalize:
    - The first letter of each word in the string is capitalized
    - The rest of the word is in lowercase
*/

export function capitalize(str: string): string {
    return str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

/*
    Example usage:
    console.log(capitalize('hello world')); // Hello World

    Time Complexity:
    - O(n)

    Explanation:
    - The function first splits the input string into an array of words.
    - It then maps over each word, capitalizing the first letter and 
      converting the rest to lowercase.
    - Finally, it joins the words back together into a single string.
*/
