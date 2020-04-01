

const refreshTodos = function() {
  currentTodos = completevalue ? todos.slice() : justNotComplete(todos.slice())
  clearTodos();
  !highLow ? printTodos(priority2Only (currentTodos)):
  printTodos(currentTodos);
}


