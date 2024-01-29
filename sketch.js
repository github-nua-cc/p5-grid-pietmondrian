const CANVAS_SIZE = 800;
const NUMBER_OF_CELLS = 20;
const CELL_SIZE = CANVAS_SIZE / NUMBER_OF_CELLS;
const COLORS_ARRAY = ["#fae317", "#f50f0f", "#0d7fbe", "#f3f3f3", "#000000"];
const POSSIBLE_SIZES = [
  CELL_SIZE,
  CELL_SIZE,
  CELL_SIZE,
  CELL_SIZE * 2,
  CELL_SIZE * 3,
  CELL_SIZE * 4,
];


function preload() {}

function setup() {
  //create a canvas of 800 x 800 pixels
  createCanvas(CANVAS_SIZE, CANVAS_SIZE);

  // define a background color for the canvas
  background(220);

  // set a stroke
  strokeWeight(5);

  //define x and y
  let x = 0;
  let y = 0;

  // loop through canvas to create grid
  while (y < CANVAS_SIZE) {
    //set height
    const height = random(POSSIBLE_SIZES);
    //reset x
    x = 0;
    while (x < CANVAS_SIZE) {
      // calculate random color
      const cellColor = random(COLORS_ARRAY);

      //set fill
      fill(cellColor);

      //calculate size
      const width = random(POSSIBLE_SIZES);

      //draw image
      rect(x, y, width, height);

      //update x
      x = x + width;
    }
    
    //update y
    y = y + height;
  }
}
