
const hidelow = () => {
   highLow = highLow ? false : true
refreshTodos()
    
}

const hideLowButton = document.querySelector('.hide-low-priority').addEventListener('click', hidelow)