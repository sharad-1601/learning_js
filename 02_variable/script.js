//variable 
//js is loosely type language 

//no need to give data types 


var age;    // stores undefined value

var age = 21

console.log(age)

age = "Sharad"

console.log(age)


//var scope is global


if (true){
    var firstName = "Shakya"
}


console.log(firstName)

//local scope -- let


{
    let a  = 10
    console.log(a) // returns 10
}

console.log(a) // error a is not defined


// const 
// scope -- local
// const one assign can't change 
// you have to give value to const at time of initializing



const b = 12

console.log(b)

b = 21

console.log(b)// error assign value to const