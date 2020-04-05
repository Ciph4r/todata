const printTodos = function(todos ,num = 0) {
  for (const todo of todos) {
    printTodo(todo, num);
  }
}

// printTodos(todos);


printTodos(currentTodos[0]);


