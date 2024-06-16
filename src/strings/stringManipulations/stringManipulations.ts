/*----------------------------------------------------------------
The removeDuplicateCharacters
*----------------------------------------------------------------*/

export function removeDuplicateCharacters(str: string): string {
    return [...new Set(str.split(''))].join('');
}

/*----------------------------------------------------------------
Extract Vowels
*----------------------------------------------------------------*/

export function extractVowels(str: string): string {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.join('') : '';
}

/*----------------------------------------------------------------
Get Unique Intersecting Characters
*----------------------------------------------------------------*/

export function getUniqueIntersectingCharacters(
    str: string = '',
    str2: string = ''
): string {
    if (str.length === 0 || str2.length === 0) {
        return '';
    }

    return str
        .split('')
        .filter(char => str2.includes(char))
        .join('');
}

/*----------------------------------------------------------------
Count Characters
*----------------------------------------------------------------*/
export function countCharacters(str: string = '') {
    if (str.length === 0) return {};

    return str
        .toLowerCase()
        .split('')
        .reduce<Record<string, number>>((acc, curr) => {
            acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
            return acc;
        }, {});
}

/*----------------------------------------------------------------
Check for Palindrome
*----------------------------------------------------------------*/
export function isPalindrome(str: string): boolean {
    const lowerCaseStr = str.toLowerCase();
    return lowerCaseStr === lowerCaseStr.split('').reverse().join('');
}

/*----------------------------------------------------------------
Is Anagram
This approach is simpler and more straightforward, but it may be 
less efficient for large strings because it involves sorting the characters.
*----------------------------------------------------------------*/

export function isAnagram(str1: string, str2: string): boolean {
    const normalize = (str: string) => {
        return str.replace(/\s/g, '').toLowerCase().split('').sort().join('');
    };

    return normalize(str1) === normalize(str2);
}

/*----------------------------------------------------------------
Is Anagram Optimized
This approach is more complex, but it may be more efficient for 
large strings because it avoids sorting the characters.
*----------------------------------------------------------------*/
export function isAnagramOptimized(str1: string, str2: string): boolean {
    const buildCharMap = (str: string) => {
        const cleanStr = str.replace(/\s/g, '').toLowerCase();
        return cleanStr
            .split('')
            .reduce<Record<string, number>>((acc, curr) => {
                acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
                return acc;
            }, {});
    };

    const str1CharMap = buildCharMap(str1);
    const str2CharMap = buildCharMap(str2);

    if (Object.keys(str1CharMap).length !== Object.keys(str2CharMap).length) {
        return false;
    }

    for (let char in str1CharMap) {
        if (str1CharMap[char] !== str2CharMap[char]) {
            return false;
        }
    }

    return true;
}
