// ^ = negate
let sentence = "The 3 dogs chased the 2 cats."
let consonant_regex = /[^0-9aeiou\s\.]/ig
console.log('Matching string: "' + sentence + '" with regex: ' + consonant_regex+' : '+ sentence.match(consonant_regex))
