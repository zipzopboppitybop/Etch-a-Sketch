let grid = document.getElementById("container");

function makegrid() {
for (let i =0; i < 256; i++) {
    let cell = document.createElement("div");
    cell.className = "cell"
    grid.appendChild(cell);
    cell.addEventListener("mouseover", function() {
        cell.style.backgroundColor = "black"
    })
}
}

makegrid()
