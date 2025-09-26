const squaresContainer = document.querySelector(".squares-container")

for(let i = 0; i < 16; i++){
    const squareRow = document.createElement('div');
    squareRow.style.display = "flex";
    squaresContainer.appendChild(squareRow);
    for(let j = 0; j < 16; j++){
        const square = document.createElement('div');
        square.style.width = "5px";
        square.style.height = "5px";
        square.style.border = "black solid 1px";
        squareRow.appendChild(square);
    }
}

function createCanvas(n){
    squaresContainer.innerHTML = "";
    for(let i = 0; i < n; i++){
        const squareRow = document.createElement('div');
        squareRow.style.display = "flex";
        squaresContainer.appendChild(squareRow);
        for(let j = 0; j < n; j++){
            const square = document.createElement('div');
            square.style.width = "5px";
            square.style.height = "5px";
            square.style.border = "black solid 1px";
            squareRow.appendChild(square);
        }
    }
    const squares = document.querySelectorAll('.squares-container > div > div');

    squares.forEach((x) => x.addEventListener('mouseover', () => {
        x.style.background = "red";
    }))
}

const button = document.querySelector('button');
button.addEventListener('click', () => {
    const response = prompt("Enter the number of squares you want to see in each row (less than 100)");

    if(response > 100 || isNaN(Number(response))) alert('Not a valid number.');
    else{
        createCanvas(Number(response))
    }
})

const squares = document.querySelectorAll('.squares-container > div > div');

squares.forEach((x) => x.addEventListener('mouseover', () => {
    x.style.background = "red";
}))