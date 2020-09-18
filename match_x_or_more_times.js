let sentence = "Mississipi"
let regex = /s/g
console.log('Matching string: "' + sentence + '" with regex: ' + regex+' : '+ sentence.match(regex))

// + = one or more times
regex = /s+/
console.log('Matching string: "' + sentence + '" with regex: ' + regex+' : '+ sentence.match(regex))

regex = /s+/g
console.log('Matching string: "' + sentence + '" with regex: ' + regex+' : '+ sentence.match(regex))

// * = zero or more times
regex = /s*/g
console.log('Matching string: "' + sentence + '" with regex: ' + regex+' : '+ sentence.match(regex))

sentence = 'gooooooooooaaaallll'
regex = /go*/
console.log('Matching string: "' + sentence + '" with regex: ' + regex+' : '+ sentence.match(regex))

regex = /o*/g
console.log('Matching string: "' + sentence + '" with regex: ' + regex+' : '+ sentence.match(regex))
