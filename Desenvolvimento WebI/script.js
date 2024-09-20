const container = document.getElementById('grid-container');

function getRandomColor() {
    const a = Math.floor(Math.random() * 256); 
    const b = Math.floor(Math.random() * 256); 
    const c = Math.floor(Math.random() * 256); 
    return `rgb(${a}, ${b}, ${c})`;
}
for (let i = 0; i < 60 * 60; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    container.appendChild(gridItem);
}

function updateColors() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.style.backgroundColor = getRandomColor();
    });
}

updateColors();

setInterval(updateColors, 1000);
