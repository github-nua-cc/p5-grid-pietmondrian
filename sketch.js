const CANVAS_SIZE = 800;
const NUMBER_OF_CELLS = 20;
const CELL_SIZE = CANVAS_SIZE / NUMBER_OF_CELLS;
const COLORS_ARRAY = ["#fae317", "#f50f0f", "#0d7fbe", "#f3f3f3", "#000000"];

function preload() {}

function setup() {
  //create a canvas of 800 x 800 pixels
  createCanvas(CANVAS_SIZE, CANVAS_SIZE);

  // define a background color for the canvas
  background(220);

  //set stroke
  strokeWeight(5);

  // loop through canvas to create grid
  for (let row = 0; row < NUMBER_OF_CELLS; row++) {
    for (let column = 0; column < NUMBER_OF_CELLS; column++) {
      // calculate random color
      const cellColor = random(COLORS_ARRAY);

      //set fill
      fill(cellColor);

      //calculate position
      const xPosition = row * CELL_SIZE;
      const yPosition = column * CELL_SIZE;

      //calculate size
      const width = CELL_SIZE;
      const height = CELL_SIZE;

      //draw image
      rect(xPosition, yPosition, width, height);
    }
  }
}
