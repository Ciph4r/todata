const truesFirst = (array)=>{
    
    array.sort((a,b) => a.complete === b.complete ? 0 : a.complete ? -1 : 1)
  }

const completeLst = () => {
    truesFirst(todos)
    refreshTodos()
}



const completelstButton = document.querySelector('.complete-last').addEventListener('click' ,completeLst )