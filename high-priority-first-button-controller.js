const sortByNumberAscending = (array) =>{
   array.sort(function(a,b) {
       return a.priority - b.priority
    })
    }


const highprio = () => {

    sortByNumberAscending(todos)
    refreshTodos()
}


const highprioButton = document.querySelector('.high-priority-first').addEventListener('click', highprio)



