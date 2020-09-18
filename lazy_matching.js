// greedy match finds longest match (default)
let sentence = "Mississipi"
let regex = /M[a-z]*s/
console.log('Matching string: "' + sentence + '" with regex: ' + regex+' : '+ sentence.match(regex))

// lazy match finds shortest matches
regex = /M[a-z]*?s/
console.log('Matching string: "' + sentence + '" with regex: ' + regex+' : '+ sentence.match(regex))

// greedy
sentence = '<h1>text</h1>'
regex = /<.*>/
console.log('Matching string: "' + sentence + '" with regex: ' + regex+' : '+ sentence.match(regex))

// lazy
regex = /<.*?>/
console.log('Matching string: "' + sentence + '" with regex: ' + regex+' : '+ sentence.match(regex))
