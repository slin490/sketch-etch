const container = document.querySelector(".container");
const btn = document.querySelector("#btn");
const reset = document.querySelector("#resetBtn");
let gridAmount = 16;
let newGrid;

//Appends grids to container through js
const createGrid = (amount) => {
	for (let i = 0; i < amount * amount; i++){
		const gridItem = document.createElement("div");
		gridItem.classList.add('grid');
		container.append(gridItem);
	} 
}

const gridStyler = (amount) => {
		grids.forEach((grid) => {
		grid.style.cssText = `
			border: 1px solid black;
			flex-basis: calc(100%/${amount});
			box-sizing: border-box;
			transition: background-color 0.3s;`
		grid.addEventListener("mouseover", () => {
		grid.style.backgroundColor = "black";
		})
	}) 
}

const newConfig = () => {
	// newGrid = Number(prompt("Enter grid amount from 16-100"));
	
	// while (newGrid < 16 || newGrid > 100){
	// 	newGrid = Number(prompt("Enter within specified range: 16-100"));
	// }
	container.innerHTML = "";
	createGrid(gridAmount);
	gridStyler(gridAmount);
}

const removeGrids = () => {
	// window.location.reload();
	grids.forEach((grid) => {
		grid.remove();
	})
}

createGrid(gridAmount);
const grids = document.querySelectorAll(".grid");
gridStyler(gridAmount);
btn.addEventListener("click", newConfig);
reset.addEventListener("click", removeGrids);