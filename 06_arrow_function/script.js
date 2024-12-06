// arrow functions 

// 1. syntax
const sayHello = () => {
    console.log("Hi Sharad")
}

sayHello()

const add = (a,b) =>{
    return a+b;
}
//when  we only have one statement in function then use one line fn

const add_1 = (a,b)  => a+b; // one line 
console.log(add(2,3))
console.log(add_1(2,3)) 




// 2. arguments keyword

// in arrow fn it will give error as argument not defined

const addNumber = () => {
    console.log(arguments)
}
addNumber(1,2,3,34,5)


//it will work with spread function

const addNumber_1 = (...nums) => {
    console.log(nums)
}
addNumber_1(1,2,3,34,5)



// 3. hoisting

sayhey()


function sayhey = () => {
    console.log("Hello")
}

//it will give error as hoisting doesnot support by arrow function



// 4. this keyword

const obj = {
    key : 20, 
    myFunction :  () => {
        console.log(this)
    }
}
obj.myFunction()


//arrow function have global scope so when we print this it point's to window object and in normal function this denotes to object 
