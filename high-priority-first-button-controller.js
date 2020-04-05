const sortByNumber = (array) =>{
   array.sort(function(a,b) {
       return b.priority - a.priority
    })
    }



const highprio = () => {
    let i = 0

while (i < listCount){
    sortByNumber(currentTodos[i])
    i++
}
    refreshTodos()
}



const highprioButton = document.querySelector('.high-priority-first').addEventListener('click', highprio)



