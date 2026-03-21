let container = document.querySelector("div");
let resetButton = document.querySelector(".Reset");
let redoButton = document.querySelector(".Redo");
let undoButton = document.querySelector(".Undo");

const createdCircles = [];
const undoneCircles = [];

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function createCircle(x, y, size = 24) {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    circle.style.position = "absolute";
    circle.style.left = x - size / 2 + "px";
    circle.style.top = y - size / 2 + "px";
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.backgroundColor = randomColor();
    return circle;
}

container.addEventListener("click", function(event) {
    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const circle = createCircle(x, y);
    container.appendChild(circle);
    createdCircles.push(circle);
    undoneCircles.length = 0; 
    console.log(createdCircles);
    console.log(undoneCircles); 
    resetButton.disabled = false;
    undoButton.disabled = false;
    redoButton.disabled = true;
});

resetButton?.addEventListener("click", function() {
    createdCircles.forEach(c => c.remove());
    undoneCircles.forEach(c => c.remove());
    createdCircles.length = 0;
    undoneCircles.length = 0;
    console.log(createdCircles);
    console.log(undoneCircles);
    resetButton.disabled = true;
    undoButton.disabled = true;
    redoButton.disabled = true;         
});

undoButton?.addEventListener("click", function() {
    const circle = createdCircles.pop();
    if (!circle) return;
    circle.remove();
    undoneCircles.push(circle);
    console.log(createdCircles);
    console.log(undoneCircles);
    resetButton.disabled = createdCircles.length === 0;
    undoButton.disabled = createdCircles.length === 0;
    redoButton.disabled = false;             
});

redoButton?.addEventListener("click", function() {
    const circle = undoneCircles.pop();
    if (!circle) return;

    container.appendChild(circle);
    createdCircles.push(circle);
    console.log(createdCircles);
    console.log(undoneCircles); 
    resetButton.disabled = false;
    undoButton.disabled = false;
    redoButton.disabled = undoneCircles.length === 0;   
});