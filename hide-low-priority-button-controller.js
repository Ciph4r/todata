
const hidelow = () => {
   const hideLowButton2 = document.querySelector('.hide-low-priority')
   highLow ? (highLow = false , hideLowButton2.innerText = 'Show Low Priority') : 
   (hideLowButton2.innerText = 'Hide Low Priority' , highLow = true)
refreshTodos()
    
}

const hideLowButton = document.querySelector('.hide-low-priority').addEventListener('click', hidelow)