
/* create new section */
let newSection = document.createElement('section');


/*create new paragraph */
let newParagraph1 = document.createElement('p');


/* create new text for the paragrap*/
let newText = document.createTextNode('Ignace');




/*  in this part we will link all the created variables to each other */


// linked
newParagraph1.appendChild(newText);

// linked
newSection.appendChild(newParagraph1);


// in this part we want to link the newly created newSection to the already existing html Element
// first we have to pinpoint where we want to paste it 

let articleSection = document.querySelector('article');
articleSection.appendChild(newSection);

/*   to see the results on web inspect */
// console.log('section');
