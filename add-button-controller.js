
const newitem = () =>{
const todoText = document.querySelector('.todo-input')
const prioVal = document.querySelector('.priority').value
if (todoText.value === ''){
    alert("YOUR ADD TODO IS BLANK");
        todoText.focus()
    }
    else {
const newobj = {}
newobj.text = todoText.value
newobj.id = arrayLength()
newobj.complete = false,
newobj.priority = Number(prioVal)
addTodo(newobj)
refreshTodos()
todoText.value=''
    }
}
const addButton = document.querySelector('.add-todo').addEventListener('click',newitem)
