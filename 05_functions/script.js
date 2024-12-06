//functions



function sayHello(){
    console.log("Say hello")
}

sayHello()


//parameters and arguments 
function sum(a,b){ //here a and b are arguments
    console.log(a+b)
}

sum(5,10)  // 5 and 10 are parameters 
sum(30,10)
sum(50,10)



//value from functions

function multiply(a,b){
    return a*b
}

let answer = multiply(5,10)

console.log('The result of multiply is ', answer)

console.log(answer+12)
 // add any number of numbers using arguments
function addNumber(){
    console.log(arguments)
    let ans = 0
    for(let i = 0; i<arguments.length; i++){
        // console.log(arguments[i])
        ans = ans + arguments[i]
    }
    console.log("result is ", ans)
    return ans;
}



// add any number of numbers using spread operator 


function addNumber_1(...number){
    ans = 0;
    for(let i = 0; i<number.length; i++){
        ans = ans + number[i];
    }
    return ans
}


let result = addNumber_1(1,2,3,4,5,6,7,34,53,534,534,5,2,5,43,4,43,5,454,35,4,3464,5)
console.log(result)