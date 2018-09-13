// function maskify(string) {
//   let num = string.slice(0, -4).length
//   let str = ""
//   for (let i = 0; i < num; i++) {
//     str += "#";
//   }
//   return str + string.slice(-4)
// }
//
//BETTER ANSWER
// function maskify(string) {
//   return string.slice(0, -4).replace(/./g, '#') + string.slice(-4);
// }

// console.log(maskify("4556364607935616")) //== "############5616"
// console.log(maskify("64607935616")) //== "#######5616"
// console.log(maskify("1")) //== "1"
// console.log(maskify("")) //==  ""
