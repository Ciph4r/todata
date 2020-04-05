const clearTodos = function() {

  for (let i = 0 ; i < listCount ; i++){
  const list = document.querySelector(`.todo-list${i}`);
  while(list.hasChildNodes()) {
    list.firstChild.remove();
  }
  }
}