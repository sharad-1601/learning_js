// closure 
//A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
//In other words, a closure gives a function access to its outer scope. 
//In JavaScript, closures are created every time a function is created, at function creation time.



function sayhey (name){
   

    function console_fun() {
        console.log(name)
    }
    
    return console_fun
}

let n = sayhey("Sharad")


n()




//first closure function -> property


function adder(num) {

    function add(b){
        console.log(num + b)
    }

    return add;
}

const addto5 = adder(5);
const addto10 = adder(10)

           
addto5(6)
addto10(29)



//apply on html


const myname = document.getElementById('my-name')
const mybtn  = document.getElementById('my-btn')


function changeSize(size){

    function textSize (){
        myname.style.fontSize = `${size}px `
    }

    return textSize
}


const changeSize20  = changeSize(20)

const changeSize70 = changeSize(70)


mybtn.addEventListener('click', changeSize70)





//make counter

function counter() {
    
    let count = 1
    
    function increment () {

        console.log(count ++)
    }

    return increment
}

const counter1 = counter(1)

counter1()
counter1()
counter1()
counter1()
counter1()
counter1()
