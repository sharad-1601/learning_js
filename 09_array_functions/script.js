const students = ["Sharad", "Shakya", "Kanpur", "Etah"]


students.reverse() // reverse all the element of array

console.log(students)




students.forEach((val) => console.log(val))
students.map((val) => console.log(val))


//map returns a new array while for each doesn't return anything


const numbers = [1,2,3,4,5,6]

function double(n) {
     return n*2
}

let newArr = numbers.forEach(double)
let newArr_1 = numbers.map(double)

console.log(newArr) //undefined as for each doesn't return anything
console.log(newArr_1) //(6) [2, 4, 6, 8, 10, 12]
console.log(numbers) //(6) [1, 2, 3, 4, 5, 6]


let ans = numbers.find((num) => num === 6)
let ans_1 = numbers.find((num) => num === 7)

console.log(ans) //6
console.log(ans_1) //undefined


let ans_2 = numbers.findIndex((num) => num === 6)
console.log(ans_2) // 5


let ans_3 = numbers.includes(4)

console.log(ans_3) // true returns boolean value



const new_arr = numbers.filter((num) => num % 2 == 0)

console.log(new_arr) //(3) [2, 4, 6]


let new_arr_1 = numbers.slice(1,5)  // 1 and 5 are index excluding 5
// 1 is starting and 5 is ending excluding index 5

console.log(new_arr_1) //[2, 3, 4, 5] 


let new_arr_2 = numbers.splice(1,4)
// 1 is starting and 4 is no of elements remove

console.log(new_arr_2) //(4) [2, 3, 4, 5]
console.log(numbers) //[1, 6]