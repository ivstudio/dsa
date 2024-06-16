/*
    The removeDuplicateObjects function is designed to 
    remove duplicate objects from an array. 

    1. The function begins by accepting an array of objects.
    2. The function then validates the input, ensuring
       it is indeed an array. If the input is not an array, an error is thrown.
    3. Following validation, the function uses the 'reduce' method 
       to iterate over each object in the array, adding only unique objects to an accumulator.
    4. The 'find' method is utilized to check if the current 
       object already exists within the accumulator.
    5. If the object is not found within the accumulator, it is then added.
    6. Finally, the function returns the accumulator, 
       which now consists of an array of unique objects.
*/

export const movies = [
    { title: 'Casablanca' },
    { title: 'The Wizard of Oz' },
    { title: 'Lawrence of Arabia' },
    { title: 'Citizen Kane' },
    { title: 'Casablanca' },
    { title: 'The Wizard of Oz' },
    { title: 'Citizen Kane' },
];

type Movie = { title: string };
type Movies = Movie[];

export function removeDuplicateObjects(arr: Movies) {
    if (!Array.isArray(arr)) {
        throw new Error('Input should be an array');
    }

    return arr.reduce((acc, curr) => {
        if (!acc.find(item => item.title === curr.title)) {
            return [...acc, curr];
        }
        return acc;
    }, []);
}
