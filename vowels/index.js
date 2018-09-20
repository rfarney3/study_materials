// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

const vowels = (string) => {
  const vowels = "aeiouAEIOU"
  let letters = string.split("")
  let count = 0

  letters.forEach((letter) => {
    if (vowels.includes(letter)) {
      count += 1
    }
  })
  return count
}

const vowels = (string) => {
  let matches = string.match(/[aeiou]/gi)
  return matches ? matches.length : 0
}
