const form = document.getElementById("form")
const input = document.getElementById("input")
const todosUl = document.getElementById("todos")
form.addEventListener("submit", (e) =>{
    e.preventDefault()
    addTodo();
})
function addTodo(todo){
   let todoText = input.value
   console.log(todoText)
   if(todo){
    todoText = todo.text;
   }
   if(todoText){
    const todoEl = document.createElement("li")
    if(todo && todo.completed){
        todoEl.classList.add('completed.')
    }
    todoEl.innerHTML = todoText
    todoEl.addEventListener('click', () =>{
        todoEl.classList.toggle("completed")
        updateLS()
    })

    todoEl.addEventListener('contextmenu', (e) => {
        e.preventDefault()
        todoEl.remove();
        updateLS()
    })
    todosUl.appendChild(todoEl);
    input.value=' ';
    updateLS()
   }
   
  
}

function updateLS(){
    const todoEl = document.querySelectorAll("li")
    const todos =[]
    todosEl.forEach(todo =>{
        todos.push({
        text:todo.innerText,
        completed: todo.classList.contains('completed')
    
        })
    })
    localStorage.setItem('todosEl', JSON.stringify(todosEl))
}
