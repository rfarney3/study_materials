const maxChars = (string) => {
  let obj = {}
  let arr = string.split("")

  arr.forEach((char) => {
    if (!obj[char]) {
      obj[char] = 1
    } else {
      obj[char] += 1
    }
  })

  let max = 0
  let char = ""

  for (let key in obj) {
    if (max === 0 || obj[key] > max) {
      max = obj[key]
      char = key
    }
  }
  return char
}
