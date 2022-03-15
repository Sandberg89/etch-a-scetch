const container = document.getElementById('container');
const resetBtn = document.getElementById('reset');

addElements(16, 16);
addEventToItems();

function addElements(rows, items){

    for (let i = 0; i < rows; i++){
        let row = document.createElement('div');
        row.classList.add('grid-row');
        container.appendChild(row);
        for (let j = 0; j < items; j++){
            let item = document.createElement('div');
            item.classList.add('grid-item');
            row.appendChild(item);
        }
    }
}

function addEventToItems(){
const gridNodes = document.getElementsByClassName('grid-item');
let gridItems = Array.from(gridNodes);

gridItems.forEach(item => {
    item.addEventListener('mouseover', (e) => {
        let color = randomColor();
        e.target.style.backgroundColor = color;
    })
});
}

function resetGrid(){
    const gridNodes = document.getElementsByClassName('grid-item');
    let gridItems = Array.from(gridNodes);

    gridItems.forEach(item => {
        item.style.backgroundColor = 'white';
        item.remove();
    });

    let items = prompt('Enter the new grid size. New value should be less then 100');
    if (items < 100){
        addElements(items, items);
        addEventToItems();
    } else {
        alert('Should be less then 100. Click reset again!');
    }
}

function randomColor() {
    let color = Math.floor(Math.random()*16777215).toString(16);
    return '#' + color;
}

resetBtn.addEventListener('click', resetGrid);
