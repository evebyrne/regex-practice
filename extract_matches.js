let sentence = "The dog chased the cat."
let regex = /cat/
console.log('Matching string: ' + sentence + ' with regex: ' + regex+' : '+ sentence.match(regex))

// will match first instance by default
sentence = 'Twinkle, twinkle, little star'
regex = /twinkle/i
console.log('Matching string: ' + sentence + ' with regex: ' + regex+' : '+ sentence.match(regex))

//  g = match all instances
sentence = 'Twinkle, twinkle, little star'
regex = /twinkle/ig
console.log('Matching string: ' + sentence + ' with regex: ' + regex+' : '+ sentence.match(regex))

 
