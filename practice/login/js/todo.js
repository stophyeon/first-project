const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-form input")
const todoList = document.querySelector("#todo-list")
let todos = []

function savetodo() {
    localStorage.setItem("todos", JSON.stringify(todos))
}
function deletetodo(event) {
    const li = event.target.parentElement
    li.remove()
    todos = todos.filter((todo) => todo.id !== parseInt(li.id))
    savetodo()
}

function painttodo(todo) {
    const li = document.createElement("li")
    li.id = todo.id
    const span = document.createElement("span")
    span.innerHTML = todo.text
    const button = document.createElement("button")
    button.innerHTML = "Cancel"
    li.appendChild(span)
    li.appendChild(button)
    button.addEventListener("click", deletetodo)
    todoList.appendChild(li)

}

function handlesubmit(event) {
    event.preventDefault()
    const newtodo = todoInput.value
    todoInput.value = ""
    const newtodoobj = {
        text: newtodo,
        id: Date.now(),
    }
    todos.push(newtodoobj)
    painttodo(newtodoobj)
    savetodo()

}
todoForm.addEventListener("submit", handlesubmit)
const savedtodos = localStorage.getItem("todos")
if (savedtodos !== null) {
    const parsedtodos = JSON.parse(savedtodos)
    todos = parsedtodos
    parsedtodos.forEach(painttodo);
}

