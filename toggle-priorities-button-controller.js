
const toggleButton = document.querySelector('.toggle-priorities').addEventListener('click', function(){ 
    priovalue = !priovalue ? true : false
    refreshTodos()
})