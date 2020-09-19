to run: node filename.js

# Flags
* i = ignore case
* g = global, match every occurence

# Metacharacters
* . = any character
* \+ = one or more of preceeding char
* \* = zero or more of preceeding char
* ? = lazy match (takes shortest possible match) (default is greedy)
* [] = character sets (multiple possibilities for a character)
* [^] = negated character set
* ^ = match beginning of string
* $ = match end of string
* {min num matches, max num matches}

# Character classes
* \w = [A-za-z0-9_]
* \W = [^A-za-z0-9_]
* \d = [0-9]
* \D = [^0-9]
