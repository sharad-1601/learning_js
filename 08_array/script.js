// arrays 

// use to store differnt values of same data types or different data types


const students = ["Sharad", "Shakya", "Kanpur"]

console.log(students.length)
console.log(students[0]) // sharad 
console.log(students[3])  //undefined

console.log(students) //(3)["Sharad","Shakya","Kanpur"]
students[1] = "Rampur"
console.log(students) //(3)["Sharad","Rampur","Kanpur"]

students.push("Etah")
console.log(students) //(4)['Sharad', 'Rampur', 'Kanpur', 'Etah']


// array is hetrogenous in js different data types element in same array]\

new_arr = [1, "Sharad", true, '1']
console.log(new_arr)

new_arr.push({name: "Shakya"})
console.log(new_arr) //[1, 'Sharad', true, '1', {…}]
console.log(new_arr.indexOf("Shakya")) // -1

//-1 in index means value not present in array

students.pop()
console.log(students) //['Sharad', 'Rampur', 'Kanpur']

students.push("Etah")
console.log(students) //['Sharad', 'Rampur', 'Kanpur', 'Etah']

students.reverse()
console.log(students) // ['Etah', 'Kanpur', 'Rampur', 'Sharad']

students.fill() 
console.log(students) //[undefined, undefined, undefined, undefined]

