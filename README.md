to run: node filename.js

# Flags
* i = ignore case
* g = global, match every occurence

# Metacharacters
* . = any character
* \+ = one or more of preceeding char
* \* = zero or more of preceeding char
* ? = lazy match (takes shortest possible match) (default is greedy)
* (literal_char)? = zero or one of previous character
* [] = character sets (multiple possibilities for a character)
* [^] = negated character set
* ^ = match beginning of string
* $ = match end of string
* {min num matches, max num matches}: eg, {0,3}, {3,}(3, inf)
* | = or

# Character classes
* \w = [A-za-z0-9_]
* \W = [^A-za-z0-9_]
* \d = [0-9]
* \D = [^0-9]
* \s = [ \n\t\r\f\x\v]
* \S = [^ \n\t\r\f\x\v]

# Lookaheads
## Positive
(?=)
## Negative
(?!)

# Capture Groups
* (capture group)
* to repeat \\num times to repeat
