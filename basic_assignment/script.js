const sc = document.getElementById('score')
const inc = document.getElementById('increase')
const dec = document.getElementById('decrease')
const greeting = document.getElementById('greeting'); 

inc.style.backgroundColor = 'green'

dec.style.backgroundColor = 'red'

let nam = prompt("What's your name?", "Player1");
if (nam) {
    greeting.textContent = `Hello, ${nam}`;
}

function increase() {
    if(+sc.innerText >= 20){
        alert("Maximum Score Reached")
    }else{
        sc.innerText = +sc.innerText + 1
    }
}

function decrease() {
    if(+sc.innerText <= 0){
        alert("Minimum Score Reached")
    }else{
        sc.innerText = +sc.innerText - 1
    }
}

inc.addEventListener('click', increase)
dec.addEventListener('click', decrease)


