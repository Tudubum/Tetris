const h1 = document.createElement('h1');
h1.textContent = "TETRIS GAME";
h1.setAttribute('class', 'title');    
document.body.appendChild(h1);

const container = document.createElement('div');
container.setAttribute('id', 'container');
document.body.appendChild(container)

const grid = document.createElement('div');
grid.setAttribute('class', 'grid');    
container.appendChild(grid);

let colors = [
    '#ecb5ff',
    '#ffa0ab',
    '#8cffb4',
    '#ff8666',
    '#80c3f5',
    '#c2e77d',
    '#fdf9a1',
  ];


let lastElement = null; //The variable lastElement will be used as a storage location to hold the value of the last element.

function GetRandom(max){ // why we use max?
    return parseInt(Math.floor(Math.random() * max));
}

function CreateElement(){
    lastElement = document.createElement('div');
    lastElement.setAttribute('class','shape');
    lastElement.style.position = 'absolute';  // without absolute shape won't move
    lastElement.style.top = "60px";
    lastElement.style.width = "50px";
    lastElement.style.height = "50px";
    lastElement.style.backgroundColor = colors[GetRandom(colors.length)];

    grid.appendChild(lastElement);
}

// WHY WE USE parseInt?

function MoveLastElement(){
    let yPosition = lastElement.style.top;
    let yPositionInt = parseInt(yPosition);

    yPositionInt = yPositionInt + 10;
    lastElement.style.top = yPositionInt + "px";

    if (yPositionInt > 620){    
        CreateElement();
    }

    window.setTimeout(MoveLastElement,100);
}

    CreateElement();
    MoveLastElement();


