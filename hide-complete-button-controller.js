
const toggleCom = () =>{

    ///works but conflicts with show prio and too much coding to add the boolean to the print todos

   if (!completevalue){
    completevalue = true
    refreshTodos()
   }else {

   completevalue = false
   refreshTodos()
   }
}


    


const completeButon = document.querySelector('.hide-complete').addEventListener('click', toggleCom)