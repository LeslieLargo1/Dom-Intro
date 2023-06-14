/* 1)
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


//  2) Add a keyup listener
// on the second input (the number input),
// so that if the age is below 18 the content of the section a-hard-truth remains hidden, otherwise show them this hard to swallow fact.

const numBer = document.getElementById('age')

const ageVerification = (e) => {  
 

const hardTruth = document.getElementById('a-hard-truth')

  if ( numBer.value < 18) {
    hardTruth.style.visibility = 'hidden'
    // //testing the event function
    // console.log(e);
  }
  else { 
    hardTruth.style.visibility = 'visible'

  }


}
// //testing numBer
// console.log(numBer);
 numBer.addEventListener('keyup', ageVerification)




