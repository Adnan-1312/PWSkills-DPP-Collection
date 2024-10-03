const gridContainer = document.getElementById('grid-container');
const colorPicker = document.getElementById('color-picker');
const clearBtn = document.getElementById('clear-btn');
const gridSizeInput = document.getElementById('grid-size');
const resizeBtn = document.getElementById('resize-btn');
let gridSize = 16;
let isDrawing = false;

function createGrid(size) 
{
    gridContainer.innerHTML = '';
    gridContainer.style.gridTemplateColumns = `repeat(${size},20px)`;
    gridContainer.style.gridTemplateRows = `repeat(${size},20px)`;
    for (let i = 0; i < size * size; i++) 
    {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.addEventListener('mousedown', startDrawing);
        pixel.addEventListener('mouseover', draw);
        pixel.addEventListener('mouseup', stopDrawing);
        gridContainer.appendChild(pixel);
    }
}

function startDrawing(event) 
{
    isDrawing = true;
    draw(event);
}

function draw(event) 
{
    if (isDrawing && event.target.classList.contains('pixel')) 
    {
        event.target.style.backgroundColor = colorPicker.value;
    }
}

function stopDrawing() 
{
    isDrawing = false;
}

clearBtn.addEventListener('click', () => 
{
    document.querySelectorAll('.pixel').forEach((pixel) => 
    {
        pixel.style.backgroundColor = 'transparent';
    });
});

resizeBtn.addEventListener('click', () => 
{
    const newSize = parseInt(gridSizeInput.value);
    if (newSize && newSize > 0 && newSize <= 32) 
    {
        gridSize = newSize;
        createGrid(gridSize);
    } 
    else 
    {
        alert('Please enter a valid grid size between 1 and 32.');
    }
});

document.addEventListener('mouseup', stopDrawing);
createGrid(gridSize);