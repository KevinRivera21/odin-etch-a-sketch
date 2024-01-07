let gridSize = 16;
let startingWidth = 800;
let squareSize = startingWidth / gridSize;
let amountOfSquares = gridSize * gridSize;
const mainContainer = document.getElementById('main-container');




function createGrid () {
    squareSize = startingWidth / gridSize;
    amountOfSquares = gridSize * gridSize;

    while (mainContainer.firstChild) {  //Delete previously created grid, if any
        mainContainer.removeChild(mainContainer.firstChild);
    }


    for (let i = 0; i < amountOfSquares; i++) {
        const square = document.createElement('div');
        square.style.width = squareSize + "px";
        square.style.height = squareSize + "px";
        square.style.border = 'solid black';
        square.style.boxSizing = 'border-box';
        square.addEventListener('mouseover', changeSquareColor);
        mainContainer.appendChild(square);

    }

}

function changeSquareColor(event) {
    event.target.style.backgroundColor = 'black';
}

function getGridSize() {
    gridSize = prompt("Enter a new amount of squares per side");
    createGrid();
}

const sizeButton = document.getElementById('size-button');

sizeButton.addEventListener('click', getGridSize);

createGrid();
