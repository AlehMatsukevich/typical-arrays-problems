const array = [1, 2, 3, 4]
const min = Math.min(...array)
console.log(min)

const max = Math.max(...array)
console.log(max)

let sum = array.reduce((sum, current) => sum + current,0)
//console.log(sum)
const avg = sum / array.length
console.log(avg)
