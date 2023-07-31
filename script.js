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
})
