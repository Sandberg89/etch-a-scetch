const container = document.getElementById('container');


addElements();
addEventToItems();

function addElements(){

    for (let i = 0; i < 16; i++){
        let row = document.createElement('div');
        row.classList.add('grid-row');
        container.appendChild(row);
        for (let j = 0; j < 16; j++){
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
    item.addEventListener('hover', (e) => {
        console.log(e);
    })
});
}
