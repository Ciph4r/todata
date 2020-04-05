
const newlist = () => {
    const newarray = []
    
    const newListInput = document.querySelector('.new-list')
    if (newListInput.value === ''){
    alert("INPUT NEW LIST NAME");
    newListInput.focus()
    }
    else{
    const createSec = document.createElement('section')
    createSec.setAttribute('class','lists')
    const targetContainer = document.querySelector('.list-container')
    targetContainer.appendChild(createSec)
    const createNewListObj = document.createElement('ol')
    createNewListObj.setAttribute('class',`todo-list${listCount}`)
    const newli = document.createElement('h1')
    
    newli.innerText = newListInput.value
    createSec.appendChild(newli)
    createSec.appendChild(createNewListObj)
    currentTodos.push(newarray)
    createArrayButton(listCount , newListInput.value)
    newListInput.value=''
    listCount ++
    arraycount ++
    

    function myFunction(x) {
        if (x.matches) { 
            targetContainer.style.gridTemplateColumns = `repeat(1,1fr)`
        }else if (listCount < 4){
            targetContainer.style.gridTemplateColumns = `repeat(${listCount},1fr)`
        }
      }
      let x = window.matchMedia("(max-width: 700px)")
      myFunction(x) 
      x.addListener(myFunction) 

  
    if (listCount < 4){
        targetContainer.style.gridTemplateColumns = `repeat(${listCount},1fr)`
    }
    }
} 

const listAdd = () => {
    const arrayIndex = event.target.className.split('-')[3]
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
    newaddtodos(arrayIndex , newobj)
    refreshTodos()
    todoText.value=''
        }
}


const createArrayButton = (num , str)=> {
    const newButton = document.createElement('Button')
    newButton.setAttribute('class',`button-to-array-${num}`)
    newButton.innerText = `Add To ${str}`
    newButton.addEventListener('click',listAdd)
    const area1 = document.querySelector('.input-area-1')
    area1.appendChild(newButton)
    

}


const createButton = document.querySelector('.add-new-list').addEventListener('click',newlist)