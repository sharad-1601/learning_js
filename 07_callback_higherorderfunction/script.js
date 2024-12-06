//higher order function
// a function which takes another function as argument is hof

const add = (a,b,cb) => {
    let result = a+b
    cb(result)



    return () => console.log(result)
}


// function res (val){
//     console.log(val)
// }


let res_fun = add(5,16, () => {})
res_fun()

add(40,100, (res) => console.log(res))

// add -> hof as it takes cb as argument
//cb -> callback which executes after completion of main function 


//when we have a function which takes a much time which block main fn execution then we use callback

