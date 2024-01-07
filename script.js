let gridSize = 16;

const mainContainer = document.getElementById('main-container');


for (let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.style.width = '25px';
    square.style.height = '25px';
    square.style.border = 'solid black';
    square.style.boxSizing = 'border-box';
    square.addEventListener('mouseover', changeSquareColor);
    mainContainer.appendChild(square);

}

function changeSquareColor (event) {
    event.target.style.backgroundColor = 'black';
}

