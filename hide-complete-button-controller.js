
const toggleCom = () =>{

    ///works but conflicts with show prio and too much coding to add the boolean to the print todos
    let completeButton1 = document.querySelector('.hide-complete')
   if (!completevalue){
    completevalue = true
    refreshTodos()
    completeButton1.innerText = 'Hide Complete'
   }else {

   completevalue = false
   refreshTodos()
   completeButton1.innerText = 'Show Complete'
   }
}


    


const completeButon = document.querySelector('.hide-complete').addEventListener('click', toggleCom)