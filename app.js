const container = document.getElementById("container");

let draggedElement = null;

let offsetX = 0;
let offsetY = 0;


container.addEventListener("dragover", (event) => { 
  event.preventDefault(); 
});

container.addEventListener("drop", (event) => {
  event.preventDefault();

  const containerRect = container.getBoundingClientRect();

  const x = event.clientX - containerRect.left - offsetX;
  const y = event.clientY - containerRect.top - offsetY;

  if (draggedElement) {
    draggedElement.style.left = `${x}px`;
    draggedElement.style.top = `${y}px`;
  } else {
    console.warn('Drop: no dragged element available to position');
  }

  draggedElement = null;
});

function getTool(event) {
  const sender = event.target;
  if (!sender) return;

  const clone = sender.cloneNode(true);

  if (clone.id) clone.removeAttribute('id');

  clone.draggable = true;
  clone.addEventListener("dragstart", (event) => {

    if (event.dataTransfer) event.dataTransfer.setData('text/plain', '');


    draggedElement = clone;

    const rect = clone.getBoundingClientRect();
    offsetX = event.clientX - rect.left;
    offsetY = event.clientY - rect.top;
  });

  clone.addEventListener('dragend', () => {
    draggedElement = null;
  });

  clone.onclick = null;

  container.appendChild(clone);
}

function addCabelPoints(tool) {
    const plusePoint = document.createElement("div");
    const minusPoint = document.createElement("div");



}