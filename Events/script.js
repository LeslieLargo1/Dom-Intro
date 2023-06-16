const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  // 1) working area
  const displayWrapper = document.querySelector('.displayedsquare-wrapper');
  const unOrderedList = document.querySelector('ul');
  const timelog = getElapsedTime();
  // 2) create a new div 
  const newDiv = document.createElement('div');
  const list = document.createElement('li');
  // e = clickOnSquare and displays new one
  const colors = e.target.classList[1];
 


 
  newDiv.classList.add('displayedsquare', colors);
  displayWrapper.appendChild(newDiv);

  // this is a string with the variables included to display 
  list.textContent = `[${timelog}] created a new ${colors} square`;
  unOrderedList.appendChild(list);
  
 console.log(e.target.classList[1])

  console.log(getElapsedTime())

}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
  
}

/*   - Create a new `<div>` with a class `.displayedsquare` 
and the corresponding clicked color in the div above (`.displayedsquare-wrapper`)  */
// const actionSquare = document.querySelectorAll('.actionsquare')
// document.querySelector
// actionSquares.forEach(square => {
//   square.addEventListener('click', () =>{
//     const newDiv = document.createElement('div');
//     newDiv.classList.add('.displayedsquare');
//     document..appendChild('newDiv');

//   } )
  
// });

// const space = (press) => {
  const body = document.querySelector('body')


  // test
// body.style.backgroundColor = 'pink';

const backgroundcolor = () => {
  const changeColor = randomcolor();
  body.style.backgroundColor = changeColor;

  
}



const randomcolor = () => {
  const letters =  '0123456789ABCDEF';
  let color = '#';
  for ( i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random()*16)];
  }
  return color;
}




// const clearLog = () => {
//   while ( unOrderedList.)
// }

  const press = (e) => {
    
    if (e.key == ' '){
      backgroundcolor();
      console.log('testing', press); 

      
    const unOrderedList2 = document.querySelector('ul');
    const timelog = getElapsedTime();
    // 2) create a new div 
    const newDiv2 = document.createElement('div');
    const list2 = document.createElement('li');
    // e = clickOnSquare
    ;
    
    newDiv2.classList.add('presedSpace');
    newDiv2.appendChild(list2);
  
    // this is a string with the variables included to display 
    list2.textContent = `[${timelog}] spacebar was pressed!`;
    unOrderedList2.appendChild(list2);
  
  
  
   console.log(e.target.classList[1])
  
    console.log(getElapsedTime())
    }
    
    }

    const deleteList = (e) => {
      if (e.key === 'l') {
        const allLogs = document.querySelectorAll('ul');
        // const li = document.querySelectorAll('li');
        allLogs.forEach(function(item) {
          item.remove();
          
        });
 
      }
      

    }



    const delGenSquares = (e) => {
      if (e.key === 's') {
        const gensquares = document.querySelectorAll('.displayedsquare-wrapper');
        gensquares.forEach(function(item) {
          item.remove();
          
        });
 
      }
      

    }

    
      
    

// }
document.body.addEventListener('keypress', delGenSquares);
document.body.addEventListener('keypress', deleteList);
document.body.addEventListener('keypress', press);

console.log('a key was pressed')

const displayWrapper = document.querySelector('.displayedsquare-wrapper');

displayWrapper.addEventListener("click", (e) => {
  const targetElement = e.target;
  if (targetElement.classList.contains('displayedsquare')) {
    const squareColor = targetElement.classList[1].split('-')[1];
    alert(`The color of the square is ${squareColor}`);
  }
});  

// finished



