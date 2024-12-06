//numbers
let num1 = 2
let num2 = 5.4

let num3 = num1 + num2

console.log(num3)

//strings 

const firstName = "Sharad"
const lastName = "Shakya"

console.log(firstName + ' ' + lastName) //concatenations


//boolean

let isloggedIn = true
let isloggedOut = false
console.log(isloggedIn)
console.log(isloggedOut)



//null and undefined

let last = null //take space

let last_1 = undefined // don't take space



// objects

const person = {
    firstName : "Sharad",
    lastName : "Shakya",
    age : 21,
    isloggedIn : false
}


console.log(person)
console.log(person.age)

//operators on boolean


// 1->true || 0->false
//if we perform any operator + | - on true and false then it give result

console.log(true + 10) //output 11
console.log(false + 10) //output 10
console.log(false - 10) //output -10




console.log(1 + '1') // return string 11
console.log(1 -'1') // return 0, number
console.log(100 * '1') // return number 100



let firstName_1 = "CDE"
let lastName_1 = "FGH"
firstName_1 = firstName_1 + lastName_1
console.log(firstName_1)
lastName_1 = firstName_1 - lastName_1

console.log(firstName_1)
console.log(lastName_1)