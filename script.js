const container = document.querySelector(".container");
const btn = document.querySelector("#btn");
// const rows = 16;
// const columns = 16;
let gridAmount = 16;

//Appends grids to container through js
const gridMaker = (amount) => {
	for (let i = 0; i < amount; i++){
		for (let j = 0; j < amount; j++){
			const gridItem = document.createElement("div");
			gridItem.classList.add('grid');
			container.append(gridItem);
		}
	}
}
gridMaker(gridAmount);

//Returns a collection; need to loop through every grid
const grids = document.querySelectorAll(".grid");

const gridStyler = (amount) => {
		grids.forEach((grid) => {
		grid.style.border = "1px solid black";
		grid.style.flexBasis = `calc(100%/${amount})`; 
		grid.style.boxSizing = "border-box";
		grid.style.transition = "background-color 0.3s";
		grid.addEventListener("mouseenter", () => {
		grid.style.backgroundColor = "black"
		})
	})
}
gridStyler(gridAmount);

btn.addEventListener("click", () => {
	let newGrid = Number(prompt("Enter grid amount from 16-100"));
	while (newGrid < 16 || newGrid > 100){
		newGrid = Number(prompt("Enter within specified range: 16-100"));
	}
	gridMaker(newGrid);
	gridStyler(newGrid);

})



