// // 1)
// // Select the last child of the <ol> tag and put it at the beginning of the list

// first i have to select the working area//
// then i need to create a variable to target what i want to move, working area //
// const ol = document.querySelector('ol');
// const last = ol.lastElementChild;


// //call working area,
// //define what the properties will do
// // select the properties 
// ol.insertBefore(last, ol.firstElementChild)



// // 2)  Move the <h2> of the third section in the second one and vice-versa
// // first i have to select the working area, i will have access to 1 and 2//
// // then i need to create a variable to target what i want to move//



// const section2 = document.querySelectorAll('section') [1];
// const section3 = document.querySelectorAll('section')[2];
// const toyh2 = section3.querySelector('h2');

// section2.insertBefore(toyh2,section2.firstChild);

// // dont figure out how to move the h2 in the 3rd section to section 2 HELP!!!


// 3) Delete the last section from the DOM, we don't need it anyways



// var mainElement = document.querySelector("main");
// var lastSection = mainElement.lastElementChild;

// if (lastSection) {
//   mainElement.removeChild(lastSection);

// }

// vs 
// Select all <section> tags
let sections = document.querySelectorAll('section');

// Remove the last <section> from the document
sections[sections.length - 1].remove();
