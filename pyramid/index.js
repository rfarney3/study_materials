// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

const pyramid = (n) => {
  const midpoint = Math.floor((2 * n - 1) / 2)
  for (let row = 0; row < n; row++) {
    let level = ""
    for (let col = 0; col < 2 * n - 1; col++) {
      if (midpoint - row <= col && midpoint + row >= col) {
        level += "#"
      } else {
        level += " "
      }
    }
    console.log(level)
  }
}

const pyramid = (n, row = 0, level = "") => {
  if (row === n) {
    return;
  }

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1)
  }

  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    level += "#"
  } else {
    level += " "
  }
  pyramid(n, row, level)
}
