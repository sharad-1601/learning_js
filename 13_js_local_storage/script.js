const clic_button = document.getElementById('button-clicked')
const uname = document.getElementById('input-username')
const username = document.getElementById('user-name')

clic_button.addEventListener("click", () =>{
    const val = uname.value 
    console.log(uname.value)
    localStorage.setItem("Name", val)
    location.reload()
})

window.addEventListener('load',() => {
    const u_val = localStorage.getItem('Name')
    username.innerText = u_val
})