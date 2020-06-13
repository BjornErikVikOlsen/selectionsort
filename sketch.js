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
	frameRate(5);
	selectionsort()

	for (let i = 0; i < values.length; i++) {
		noStroke();
		rect(i * w, height - values[i], w, values[i]);
	}
}

async function selectionsort() {

	let n = values.length;

	if (i < values.length) {
		for (let i = 0; i < n - 1; i++) {
			let min_idx = i;
			for (let j = i + 1; j < n; j++) {
				if (values[j] < values[min_idx]) {
					min_idx = j;
					swap(values, min_idx, i)
				}
			}
		}
	}
	i++;

}

 async function swap(arr, a, b) {
	await sleep(10);
	let temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
