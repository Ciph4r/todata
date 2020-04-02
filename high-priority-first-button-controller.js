const sortByNumber = (array) =>{
   array.sort(function(a,b) {
       return b.priority - a.priority
    })
    }



const highprio = () => {
    sortByNumber(currentTodos)
    refreshTodos()
}



const highprioButton = document.querySelector('.high-priority-first').addEventListener('click', highprio)



