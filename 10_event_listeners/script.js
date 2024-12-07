const ele = document.getElementById('click')

// ele.onclick = () => {
//     console.log("Hello everyone")
// }

// it is not the preffered way as it overwrite if we have one more script 

//so we have addeventlistener

ele.addEventListener('click', () => {
    console.log("Hey everyone")
})