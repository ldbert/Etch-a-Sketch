

    var newGridSize;
    //create a variable for the container for the grid
    let container = document.getElementById("container");

    // This handler will be executed every time the cursor
  // is moved over a different list item
      container.addEventListener("mouseover", function( event ) {   
      // highlight the mouseover target
          event.target.style.backgroundColor = 'orange';
      });

  //adding an event to the button that will ask user to change size of grid
  document.getElementById("sizeBtn").addEventListener("click", changeGridSize);

  //function that create the initial grid
  function initialGrid(){
    for (var i = 0; i < 256; i++) {
      let cell = document.createElement('div');
      cell.setAttribute("id", i);
      cell.setAttribute("class", "cell")
      container.appendChild(cell);
    }
  }

  // *WORKING* function returning a random color 
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

//Function that clear the current grid of all cells
function removeCells(){
  while (container.hasChildNodes()) {  
    container.removeChild(container.firstChild);
  }
}


//function that create a new grid
function createNewGrid(size){
  container.setAttribute(
    "style", `display: grid; background-color: white; grid-template-columns: repeat(${newGridSize}, 1fr); grid-template-rows: repeat(${newGridSize}, 1fr); width: 75vmin;
    height: 75vmin;`);
  for (var i = 0; i < (`${newGridSize}` * `${newGridSize}`); i++) {
    let cell = document.createElement('div');
    cell.setAttribute("id", i);
    cell.setAttribute("class", "cell")
    container.appendChild(cell);
  }
}




//function the creates a new grid
function changeGridSize(){

alert("The grid will be reset" );

  // This handler will be executed every time the cursor
  // is moved over a different list item
      container.addEventListener("mouseover", function( event ) {   
      // highlight the mouseover target
          event.target.style.backgroundColor = 'orange';
      });

//ask user to ente the zize of teh new grid
newGridSize = prompt("How many squares per side would you like in the new grid?"); 

removeCells();

  // check that the size requested is accettable
  if (0 == newGridSize ) {

    alert("Stop kidding and enter a bloody value" );
    newGridSize = prompt("How many squares per side would you like in the new grid?" );
    createNewGrid(newGridSize);

  } else if (newGridSize > 64) {

    alert("We are just making a grid not a football pitch mate" );
    newGridSize = prompt("How many squares per side would you like in the new grid?" );
    createNewGrid(newGridSize);

  } else {

    createNewGrid(newGridSize);
  }
}


function drawRandomColors(){
  alert("You will be using random colors to paint now!! Great eh!?" );

  container.addEventListener("mouseover", function( event ) {   
      // highlight the mouseover target
          event.target.style.backgroundColor = getRandomColor();
      });

//ask user to ente the zize of teh new grid
newGridSize = prompt("How many squares per side would you like in the new grid?"); 

removeCells();

  // check that the size requested is accettable
  if (0 == newGridSize ) {

    alert("Stop kidding and enter a bloody value" );
    newGridSize = prompt("How many squares per side would you like in the new grid?" );
    createNewGrid(newGridSize);

  } else if (newGridSize > 64) {

    alert("We are just making a grid not a football pitch mate" );
    newGridSize = prompt("How many squares per side would you like in the new grid?" );
    createNewGrid(newGridSize);

  } else {

    createNewGrid(newGridSize);
  }

}


initialGrid();

