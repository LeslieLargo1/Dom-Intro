
/*  1) add a title attribute to every element that has the important class*/


// let important=document.getElementsByClassName(.important);

// console.log( important);


// const importantElements = document.getElementsByClassName('important');

// for (let i = 0; i < importantElements.length; i++) {
//   const element = importantElements[i];
//   element.setAttribute('title', 'This is an important item');
// }

/* or we can us the querySelectorAll
*/
// const importantElements = document.querySelectorAll('.important');

// console.log(importantElements);

// importantElements.forEach(function(element) {
//   element.setAttribute('title', 'This is an important item');
// });




/*   2) images is the variable name i chose,
        document is to look into it,
        querySelectorAll to select everything 
        () is to target what i want to select

        2b) i need to create an if loop; 
        first i have to declare something,
        if images[i] in classList do not contain the 
        class name important;
        then display none.

*/ 

// const images = document.querySelectorAll('img') 

// for(let i=0; i< images.length; i++){
//     console.log(images[i]) 
//     if(!images[i].classList.contains("important")){
//         images[i].style.display="none";
//     }
// }





/*  3) first part selects elements
       second part allows us to display the selected element
*/
// const paragraphs = document.querySelectorAll('p') 

// for(let i=0; i< paragraphs.length; i++){

//     console.log(paragraphs[i]) 
//     if(paragraphs[i].classList.contains(".class")){
//         paragraphs[i].style.display=".class";
//     }
// }






/*  4)  
*/

// Select all the paragraphs in the document
// var paragraphs = document.querySelectorAll('p');

// // Loop through each paragraph
// paragraphs.forEach(function(paragraph) {
//   // Check if the paragraph has a class
//   if (!paragraph.classList.length) {
//     // Generate a random color
//     var randomColor = getRandomColor();

//     // Apply the random color as the text color
//     paragraph.style.color = randomColor;
//   }
// });

// // Function to generate a random color
// function getRandomColor() {
//   var letters = '0123456789ABCDEF';
//   var color = '#';
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }






