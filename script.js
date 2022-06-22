const normal = document.getElementById("normalBtn");
const big = document.getElementById("bigBtn");
const small = document.getElementById("smallBtn");

function makeGrid(divNum = 16 * 16) {
    const grid = document.getElementById("container");
    grid.style.gridTemplateColumns = "repeat(16, 50px)";
    grid.style.gridTemplateRows = "repeat(16, 50px)";

    for (let i =0; i < divNum; i++) {
        let cell = document.createElement("div");
        cell.className = "cell";
        grid.appendChild(cell);
        cell.addEventListener("mouseover", function() {
        cell.style.backgroundColor = "black";
        })
        grid.insertAdjacentElement("beforeend", cell);
    }
}

makeGrid();

function makeGridSmall(divNum = 10 * 10) {
    const grid = document.getElementById("container");
    grid.style.gridTemplateColumns = "repeat(10, 50px)";
    grid.style.gridTemplateRows = "repeat(10, 50px)";

    for (let i =0; i < divNum; i++) {
        let cell = document.createElement("div");
        cell.className = "cell";
        grid.appendChild(cell);
        cell.addEventListener("mouseover", function() {
        cell.style.backgroundColor = "black";
        })
    }
}

function makeGridBig(divNum = 20 * 20) {
    const grid = document.getElementById("container");
    grid.style.gridTemplateColumns = "repeat(20, 50px)";
    grid.style.gridTemplateRows = "repeat(20, 50px)";

    for (let i =0; i < divNum; i++) {
        let cell = document.createElement("div");
        cell.className = "cell";
        grid.appendChild(cell);
        cell.addEventListener("mouseover", function() {
        cell.style.backgroundColor = "black";
        })
    }
}

function remove() {
    const grid = document.getElementById("container");
    grid.innerHTML = "";
}

normal.addEventListener("click", function() {
    remove();
    makeGrid();
})

small.addEventListener("click", function() {
    remove();
    makeGridSmall();
})

big.addEventListener("click", function() {
    remove();
    makeGridBig();
})



