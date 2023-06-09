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



//Add a keyup listener on both fields 
//and show a visual hint (for instance turn the field red)
// if the password is too short (less than 6 characters)
// or if the password and its confirmation do not match.
 

const password1 = document.getElementById('pwd')
const password2 = document.getElementById('pwd-confirm')

const passwordVerifier = (e) => {
  if ( password1.value.length < 6 || password1.value != password2.value)  {
    password1.style.backgroundColor ='pink' 
    // password2.style.backgroundColor ='pink'
  }
  else {password1.style.backgroundColor ='white' 
  password2.style.backgroundColor ='white'
  
  }
} 

password1.addEventListener( 'keyup' , passwordVerifier  )
password2.addEventListener( 'keyup' ,  passwordVerifier )



//Finally, use a 'change' listener on the <select> field
// to toggle a dark mode on the whole page.
// turning the background black and the text white.


const theme = (e) => {
  const themechange = e.target.value;
  const body = document.querySelector("body")
  body.style.backgroundColor = "white"

if (themechange === "light") {
  body.style.backgroundColor ="white"
  body.style.color = "black"
}
else{
  body.style.backgroundColor = "black"
  body.style.color = "white"
}

}
const switchScreen = document.getElementById("toggle-darkmode")
 switchScreen.addEventListener("change", theme)




