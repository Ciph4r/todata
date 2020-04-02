const printTodo = function(todo) {

  // Use `document.createElement` to make an <li>
  const li = document.createElement('li');
  !priovalue ? li.innerText = todo.text :
  li.innerText = `${todo.text}  -  ${todo.priority === 1 ? 'Low' : 'High'}`

  // Query the ul and put it in a variable.
  const ul = document.querySelector('.todo-list');

  // Append the li we made to the ul as the last child.
  ul.appendChild(li);


  // Give the name <p> a complete class if it was complete already (as in dummy data, or loaded data if we had a back end.
  if (todo.complete) {
    li.classList.add('complete')
  }

  // Give the <li> a layout class and an id so we can find it later (for instance in the ).
  li.classList.add('todo-item');
  li.id = todo.id.toString();

  // Give the name <p> an event listener to toggle its completeness.

  li.addEventListener('click', function(event) {
    const x = Number(event.target.id)
    // const x = currentTodos.filter(x => x.id === Number(event.target.id))
    
    event.target.classList.toggle('complete')
    currentTodos.map(obj => {if (obj.id === x) obj.complete = obj.complete ? false : true})
    refreshTodos()
    // TODO: find the correct todo in your data to toggle the completeness of!
    
  })
}