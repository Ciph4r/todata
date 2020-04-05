

const refreshTodos = function() {
clearTodos();
let i = 0

while (i < listCount){
  
if (!highLow && !completevalue){
printTodos((priority2Only(justNotComplete(currentTodos[i]))),i)

} else if (highLow && !completevalue){
printTodos((justNotComplete(currentTodos[i])),i)

} else if (!highLow && completevalue){
  printTodos((priority2Only(currentTodos[i])), i)

} else {
  printTodos(currentTodos[i], i)
}
i++
}
}

// completevalue ? printTodos(currentTodos) : printTodos(justNotComplete(currentTodos))
// !highLow ? printTodos(priority2Only (currentTodos)):

// const refreshTodos = function() {
//   currentTodos = completevalue ? todos.slice() : justNotComplete(todos.slice())
//   clearTodos();
  
//   !highLow ? printTodos(priority2Only (currentTodos)):
//   printTodos(currentTodos);
// }


