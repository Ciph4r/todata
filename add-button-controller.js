
const newitem = () =>{
const todoText = document.querySelector('.todo-input').value
const prioVal = document.querySelector('.priority').value
const newobj = {}
newobj.text = todoText
newobj.id = currentTodos[currentTodos.length-1].id +1
newobj.complete = false,
newobj.priority = Number(prioVal)
addTodo(newobj)
refreshTodos()
}
const addButton = document.querySelector('.add-todo').addEventListener('click',newitem)
