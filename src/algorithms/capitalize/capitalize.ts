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
