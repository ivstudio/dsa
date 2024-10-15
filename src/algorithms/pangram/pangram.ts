/*
    Pangram
    Check if the Sentence Is Pangram

    A pangram is a sentence where every letter of the English alphabet appears at least once.
    Given a string sentence containing only lowercase English letters, return true 
    if sentence is a pangram, or false otherwise.

    Example 1:
    Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
    Output: true

    Example 2:
    Input: sentence = "leetcode"
    Output: false    
*/

export const isPangram = (sentence: string): boolean => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const lowerCaseSentence = sentence.toLowerCase();
    for (let char of alphabet) {
        if (!lowerCaseSentence.includes(char)) {
            return false;
        }
    }
    return true;
};
