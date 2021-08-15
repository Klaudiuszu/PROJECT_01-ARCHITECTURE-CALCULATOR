let outputRight = document.getElementById('outputRight');
let outputLeft = document.getElementById('outputLeft');
let count = 0;
let reset = document.getElementById('reset');
let currentOperation = document.getElementById('currentOperation');

const buttons = document.querySelectorAll('button');

// reset  numbers in current operation

//alert(buttons);

// Buttons +/-

for (i = 0; i < buttons.length; i++) {
	buttons[i].onclick = function() {
		var className = this.className;

		if (className.indexOf('right') >= 0) {
			var output = outputRight;
		} else {
			var output = outputLeft;
		}

		var count = parseInt(output.innerHTML);

		if (className.indexOf('plus') >= 0) {
			count++;
		} else if (className.indexOf('minus') >= 0) {
			count--;
		}

		if (count >= 0) {
			output.innerHTML = count;
			summary();
		}
	};
}

function summary() {
	let sum = parseInt(outputRight.innerHTML) + parseInt(outputLeft.innerHTML);
	currentOperation.innerHTML = sum;
}

reset.onclick = function() {
	currentOperation.innerHTML = 0;
	outputRight.innerHTML = 0;
	outputLeft.innerHTML = 0;
};

function getNewColor() {
	var symbols, color;
	symbols = '0123456789ABCDEF';
	color = '#';
	for (var i = 0; i < 6; i++) {
		color = color + symbols[Math.floor(Math.random() * 16)];
		document.body.style.background = buttons;
	}
}
// stare
// let buttonAddRight = document.getElementById('rightAdd');
// let buttonAddLeft = document.getElementById('leftAdd');
// let buttonMinusRight = document.getElementById('dataOperationMinusRight');
// let buttonMinusLeft = document.getElementById('dataOperationMinusLeft');
/*
buttonAddRight.onclick = function() {
	let count = parseInt(outputRight.innerHTML);
	count++;
	if (count >= 0) {
		outputRight.innerHTML = count;
		summary();
	}
};

buttonMinusRight.onclick = function() {
	let count = parseInt(outputRight.innerHTML);
	count--;
	if (count >= 0) {
		outputRight.innerHTML = count;
		summary();
	}
};

// left operations

buttonAddLeft.onclick = function() {
	let count = parseInt(outputLeft.innerHTML);
	count++;
	if (count >= 0) {
		outputLeft.innerHTML = count;
		summary();
	}
};


buttonMinusLeft.onclick = function() {
	let count = parseInt(outputLeft.innerHTML);
	count--;
	if (count >= 0) {
		outputLeft.innerHTML = count;
		summary();
	}
};
*/
