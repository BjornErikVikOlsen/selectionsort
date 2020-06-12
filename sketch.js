let values = [];
let w = 10;
let j = 0;
let i = 0;


function setup() {
	createCanvas(windowWidth, windowHeight);
  	values = new Array(floor(width / w));
  	for (let i = 0; i < values.length; i++) {
    	values[i] = random(height);
  	}
}

function draw() {
	background(0);

	selectionsort()
  
	for (let i = 0; i < values.length; i++) {
	  noStroke();
	  rect(i * w, height - values[i], w, values[i]);
	}
  }

function selectionsort(){


}  
  
function swap(arr, a, b) {
	let temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
  }

  function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
  }
