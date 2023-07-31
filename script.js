const container = document.querySelector(".container");
const rows = 16;
const columns = 16;

for (let i = 0; i < rows; i++){
	for (let j = 0; j < columns; j++){
		const gridItem = document.createElement("div");
		gridItem.classList.add('grid');
		container.append(gridItem);
	}
}

//Returns a collection; need to loop through every grid
const grids = document.querySelectorAll(".grid");

grids.forEach((grid) => {
	grid.style.border = "1px solid black";
	grid.style.flexBasis = "calc(100%/16)";
	grid.style.boxSizing = "border-box";
	grid.style.transition = "background-color 0.5s"
	grid.addEventListener("mouseenter", () => {
		grid.style.backgroundColor = "black"
	})
})

