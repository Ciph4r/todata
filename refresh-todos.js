

const refreshTodos = function() {
clearTodos();

if (!highLow && !completevalue){
printTodos((priority2Only(justNotComplete(currentTodos))))

} else if (highLow && !completevalue){
printTodos((justNotComplete(currentTodos)))

} else if (!highLow && completevalue){
  printTodos((priority2Only(currentTodos)))

} else {
  printTodos(currentTodos)
}



  // printTodos(currentTodos);
}

// completevalue ? printTodos(currentTodos) : printTodos(justNotComplete(currentTodos))
// !highLow ? printTodos(priority2Only (currentTodos)):

// const refreshTodos = function() {
//   currentTodos = completevalue ? todos.slice() : justNotComplete(todos.slice())
//   clearTodos();
  
//   !highLow ? printTodos(priority2Only (currentTodos)):
//   printTodos(currentTodos);
// }


