// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const buildCharMap = (string) => {
  const charMap = {}

  for (let char of string.replace(/[^\w]/g).toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1
  }
  return charMap
}

function anagrams(stringA, stringB) {
  const aMap = buildCharMap(stringA)
  const bMap = buildCharMap(stringB)

  if (Object.keys(aMap).length !== Object.keys(bMap).length) {
    return false
  }

  for (let key in aMap) {
    if (aMap[key] !== bMap[key]) {
      return false
    }
  }
  return true
}

// const trimStr = (str) => {
//   return str.toLowerCase().replace(/[^\w]/g, "")
// }
//
// const sortStr = (str) => {
//   let trimmed = trimStr(str)
//
//   return trimmed.split("").sort().join("")
// }
//
// const anagrams = (stringA, stringB) => {
//   return sortStr(stringA) === sortStr(stringB)
// }
