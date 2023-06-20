 
 
 const Collection = [
    {
        pic: "klsdfsk",
        name: "Flamin-Hot",
        location: "Mex",
        description: "blah blah blah",
        rating: " 5/5",
    },


    {
        pic: "klsdfsk",
        name: "Ruffles",
        location: "Mex",
        description: "blah blah blah",
        rating: " 5/5",
    },


    {
        pic: "klsdfsk",
        name: "Doritos",
        location: "Mex",
        description: "blah blah blah",
        rating: " 5/5",
    },

    {
        pic: "klsdfsk",
        name: "Cheese Cheetos",
        location: "Mex",
        description: "blah blah blah",
        rating: " 5/5",
    },


    {
        pic: "klsdfsk",
        name: "Takis",
        location: "Mex",
        description: "blah blah blah",
        rating: " 5/5",
    },


    {
        pic: "klsdfsk",
        name: "Churritos",
        location: "Mex",
        description: "blah blah blah",
        rating: " 5/5",
    },

    {
        pic: "klsdfsk",
        name: "Tostitos",
        location: "Mex",
        description: "blah blah blah",
        rating: " 5/5",
    },

    {
        pic: "klsdfsk",
        name: "Onion Rings",
        location: "Mex",
        description: "blah blah blah",
        rating: " 5/5",
    },

    {
        pic: "klsdfsk",
        name: "Fritos",
        location: "Mex",
        description: "blah blah blah",
        rating: " 5/5",
    },



    {
        pic: "klsdfsk",
        name: "Sun Chips",
        location: "Mex",
        description: "blah blah blah",
        rating: " 5/5",
    }]


const firstObject = Collection[0];

// // Accessing properties of the first object
// console.log(firstObject.name); // Output: "flamin-hot"
// console.log(firstObject.rating); // Output: "5/5"



function loopThroughCollection(collection) {
    for (let i = 0; i < collection.length; i++) {
        const object = collection[i];

        // Perform some action with the object
        console.log(`Object ${i + 1}:`);
        console.log(object.name);
        console.log(object.rating);
        console.log("---");
    }
}

// Call the function with your Collection array
loopThroughCollection(Collection);



// this section needs to be checked  
//   function displayCollection(collection) {
//     const container = document.getElementById("collectionContainer");

//     for (let i = 0; i < collection.length; i++) {
//       const object = collection[i];

//       const objectDiv = document.createElement("div");
//       objectDiv.classList.add("object");

//       const nameElement = document.createElement("h2");
//       nameElement.textContent = object.name;

//       const ratingElement = document.createElement("p");
//       ratingElement.textContent = "Rating: " + object.rating;

//       objectDiv.appendChild(nameElement);
//       objectDiv.appendChild(ratingElement);

//       container.appendChild(objectDiv);
//     }
//   }

//   displayCollection(Collection);



const contain = document.getElementsByClassName("Container");

const info = document.getElementsByClassName("info");

// info.addEventListener("mouseover"())