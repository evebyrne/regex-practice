let sentence = "Dogs like other dogs"
let regex = /dogs/i
console.log('Matching string: "' + sentence + '" with regex: ' + regex+' : '+ sentence.match(regex))

regex = /dogs/ig
console.log('Matching string: "' + sentence + '" with regex: ' + regex+' : '+ sentence.match(regex))

regex = /^dogs/i
console.log('Matching string: "' + sentence + '" with regex: ' + regex+' : '+ sentence.match(regex))

regex = /dogs$/i
console.log('Matching string: "' + sentence + '" with regex: ' + regex+' : '+ sentence.match(regex))

regex = /^dogs$/i
console.log('Matching string: "' + sentence + '" with regex: ' + regex+' : '+ sentence.match(regex))
