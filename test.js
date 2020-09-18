// Exact matches
// Case sensitive
let sentence = "The dog chased the cat."
let regex = /the/
console.log('Testing regex: ' + regex + ' with string: ' + sentence+' : '+ regex.test(sentence))

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);
console.log('Testing regex: ' + myRegex + ' with string: ' + myString+' : '+ result)

// Match string literal with multiple possibilities
//  | = OR
let petString = 'James has a pet cat.';
let petRegex = /dog|cat|pig|bird|fish/;
console.log('Testing regex: ' + petRegex + ' with string: ' + petString+' : '+ petRegex.test(petString))

// i = ignore case
let ignore_case_string = "freecodecamp";
let ignore_case_regex = /FreeCodeCamp/i;
console.log('Testing regex: ' + ignore_case_regex+ ' with string: ' + ignore_case_string+' : '+ ignore_case_regex.test(ignore_case_string))
