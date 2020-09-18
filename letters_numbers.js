let sentence = "Dogs like other dogs"
let regex = /[a-z]/
console.log('Matching string: "' + sentence + '" with regex: ' + regex+' : '+ sentence.match(regex))

//
// regex = /dogs/ig
// console.log('Matching string: "' + sentence + '" with regex: ' + regex+' : '+ sentence.match(regex))
