/*
  Add a keyup listener
 on the first input field, 
 so that once you type a letter in this field, 
 it goes into the <span id="display-firstname">. 
 The content of the field and the span should always remain the same. */



const inputName = document.getElementById('firstname');
const spanName = document.getElementById('display-firstname');
const printName = function (e) {
 
  spanName.textContent += e.key
  
   
 }

inputName.addEventListener('keyup', printName )



