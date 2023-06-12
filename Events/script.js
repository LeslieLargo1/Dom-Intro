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
  // e = clickOnSquare
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
