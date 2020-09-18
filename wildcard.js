let sentence = "The dog chased the cat."
let car_sentence = "The dog chased the car"
let regex = /ca./
console.log('Matching string: ' + sentence + ' with regex: ' + regex+' : '+ sentence.match(regex))
console.log('Matching string: ' +  car_sentence + ' with regex: ' + regex+' : '+ car_sentence.match(regex))


sentence = 'Lets have fun with regexes'
regex = /.un/i
console.log('Matching string: "' + sentence + '" with regex: ' + regex+' : '+ sentence.match(regex))
sentence = 'the sun is out'
console.log('Matching string: "' + sentence + '" with regex: ' + regex+' : '+ sentence.match(regex))
sentence = 'im going for a run'
console.log('Matching string: "' + sentence + '" with regex: ' + regex+' : '+ sentence.match(regex))
sentence = 'The UN released a report'
console.log('Matching string: "' + sentence + '" with regex: ' + regex+' : '+ sentence.match(regex))
sentence = 'UN released a report'
console.log('Matching string: "' + sentence + '" with regex: ' + regex+' : '+ sentence.match(regex))
