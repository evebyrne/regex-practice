let sentence = "The dog chased the cat."
let regex = /[bcr]at/g
console.log('Matching string: "' + sentence + '" with regex: ' + regex+' : '+ sentence.match(regex))

sentence = "The rat chased the cat."
console.log('Matching string: "' + sentence + '" with regex: ' + regex+' : '+ sentence.match(regex))

vowel_regex = /[aeiou]/g
console.log('Matching string: "' + sentence + '" with regex: ' + vowel_regex+' : '+ sentence.match(vowel_regex))

// match a range of characters
alphabet_regex = /[a-z]/ig
console.log('Matching string: "' + sentence + '" with regex: ' + alphabet_regex+' : '+ sentence.match(alphabet_regex))


// match numbers and letters
sentence = 'The 100 rats chased the 2 cats'
letters_numbers_regex = /[0-9a-z]/ig
console.log('Matching string: "' + sentence + '" with regex: ' + letters_numbers_regex+' : '+ sentence.match(letters_numbers_regex))

numbers_regex = /[0-9]/g
console.log('Matching string: "' + sentence + '" with regex: ' + numbers_regex+' : '+ sentence.match(numbers_regex))
