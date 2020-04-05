const truesFirst = (array)=>{
    array.sort((a,b) => a.complete === b.complete ? 0 : a.complete ? 1 : -1)
  }

const completeLst = () => {
  let i = 0

while (i < listCount){
    truesFirst(currentTodos[i])
    i++
  }
    refreshTodos()
}



const completelstButton = document.querySelector('.complete-last').addEventListener('click' ,completeLst )