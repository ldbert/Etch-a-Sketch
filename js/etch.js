


function addElement (element) { 

  let container = document.getElementById('container');
  
  
  //This for loop will create 16 rows inside the main container
  for(let i=0; i<17; i++){

    //Create a new row
    let row = document.createElement("div"); 

    //Give the row a class of cell
    row.className = "row";
    //Give the row a unique id using the i of the for loop
    row.id = "r" + i;

    //This for loop will fill each row with 16 cells
    for (let c = 0; c<17; c++) {
      let cell = document.createElement("div");
      cell.className = "cell";
      cell.id = "c"+ c
      row.appendChild(cell);
    }
    //rows are appended to the main container div
    container.appendChild(row);

  }

  element.appendChild(container);

}

window.onload = addElement();

