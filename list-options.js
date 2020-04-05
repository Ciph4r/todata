function dropdownfunc() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  function dropdownfunc2() {
    document.getElementById("myDropdown2").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName("dropdown-content2");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }




  const allthings = () => {
     
      let targetContainer = document.querySelector('.list-container')
      if (listCount > 4){
        targetContainer.style.gridTemplateColumns = `repeat(${3},1fr)`
    }else {
        targetContainer.style.gridTemplateColumns = `repeat(${listCount < 4 ? listCount : 3},1fr)`
    }
    const targlist = document.querySelectorAll('.lists')
    for (let i = 1 ; i < targlist.length ;i++){
        targlist[i].style.visibility = ""
    }
    const header = document.querySelector('.h1-1').innerText = 'My List'
    singleList = false
    
    refreshTodos()
  }
  const showall = document.querySelector('.show-all').addEventListener('click',allthings)