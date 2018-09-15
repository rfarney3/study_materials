// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const trimStr = (str) => {
  return str.toLowerCase().replace(/[^\w]/g, "")
}

const sortStr = (str) => {
  let trimmed = trimStr(str)

  return trimmed.split("").sort().join("")
}

const anagrams = (stringA, stringB) => {
  return sortStr(stringA) === sortStr(stringB)
}
