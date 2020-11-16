// hasDuplicate
// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

const hasDuplicate = array =>  new Set (array).size !==array.length;
    
// hasDuplicate([1,3,2,1]) // true
// hasDuplicate([1,5,-1,4]) // false

// vowelCount
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are 
// the count of the vowels in the string.

const isVowel = char => 'aeiou'.includes(char) //will return true or false if the character is included (if true it is a vowel)

const vowelCount = string => {
    const myMap = new Map(); //create empty map
    for(let letter of string){
        if(isVowel(letter.toLowerCase())){ //if the letter (lowercased) is a vowel then execute the following
            if(myMap.has(letter.toLowerCase())){
                myMap.set(letter.toLowerCase(), myMap.get(letter.toLowerCase())+ 1) // if the map already contains the letter as a key, increment its value by one
            } else {
                myMap.set(letter.toLowerCase(), 1) // if the map does not yet contain the letter as a key, add it in and set its value to 1
            }

        }

    }
    return myMap
}

// vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Colt') // Map { 'o' => 1 }