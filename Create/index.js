const names = ['Ignace', 'Leslie','John','safa']
// in this part we want to link the newly created newSection to the already existing html Element
// first we have to pinpoint where we want to paste it 

let articleSection = document.querySelector('article');

for (let i=0; i<names.length; i++){

/* create new section */
let newSection = document.createElement('section');
/*create new paragraph */
let newParagraph1 = document.createElement('p');


/*  1) create new text for the paragrap
    2) add a variable to it 
    3) in parameters, define your text
    4) i created a variable outside my loop called names 
    5) names variable is set as an array 
    6) to loop names I include the [i]
    */
let newText = document.createTextNode(names[i]);



/*  in this part we will link all the created variables to each other */


// linked
newParagraph1.appendChild(newText);

// linked
newSection.appendChild(newParagraph1);
/* my articleSecton is defined first outside the loop as a variable */ 
articleSection.appendChild(newSection);

// generate a random color code
const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

newParagraph1.style.backgroundColor = randomColor;

}














/*   to see the results on web inspect */
// console.log('section');
