const loginFrom = document.querySelector("#log-in-form")
const loginInput = loginFrom.querySelector("input")
const greeting = document.querySelector("#greeting")

function onSubmit(event) {
    event.preventDefault()
    const username = loginInput.value
    loginFrom.classList.add("hidden")
    paintGreetings(username)
    localStorage.setItem("username", username)
}
function paintGreetings(username) {
    greeting.classList.toggle("hidden")
    greeting.innerText = `Hello ${username}`

}

const savedUsername = localStorage.getItem("username")

if (savedUsername === null) {
    loginFrom.classList.toggle("hidden")
    loginFrom.addEventListener("submit", onSubmit)
} else {
    paintGreetings(savedUsername)
}