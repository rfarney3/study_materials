// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


const chunk = (array, size) => {
  let chunked = []

  let i = 0;
  while (i < array.length) {
    chunked.push(array.slice(i, i + size))
    i += size
  }
  return chunked
}


// const chunk = (array, size) => {
//   let chunked = []
//
//   while (array.length > 0) {
//     chunked.push(array.splice(0, size))
//   }
//   return chunked
// }

// const chunk = (arr, size) => {
//   let chunked = []
//
//   for (let i = 0; i < arr.length; i++) {
//     if (chunked.length < 1 || chunked[chunked.length - 1].length === size) {
//       chunked.push([arr[i]])
//     } else if (chunked[chunked.length - 1].length !== size) {
//       chunked[chunked.length - 1].push(arr[i])
//     }
//   }
//   return chunked
// }
