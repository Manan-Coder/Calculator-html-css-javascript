let result;
const input = document.getElementById("num-input");

input.addEventListener('input', function (e) {
    const allowedChars = /^[0-9+\-*/().]+$/;
    if (!allowedChars.test(this.value)) {
        this.value = this.value.slice(0, -1);  
    }
});

function AC() {
    input.value = "";
    input.focus();
}

function C() {
    const input_ar = input.value;
    const input_final_array = input_ar.split("");
    input_final_array.pop(); 
    const input_final = input_final_array.join("");
    input.value = input_final;
}


function seven() { input.value += 7; }
function eight() { input.value += 8; }
function nine() { input.value += 9; }
function six() { input.value += 6; }
function five() { input.value += 5; }
function four() { input.value += 4; }
function three() { input.value += 3; }
function two() { input.value += 2; }
function one() { input.value += 1; }
function zero() { input.value += 0; }


function add() { input.value += '+'; }
function sub() { input.value += '-'; }
function mult() { input.value += '*'; }
function div() { input.value += '/'; }

function change() {
    let m = math.evaluate(input.value + "* -1");
    input.value = m;
}


function myFunction(event) {
    if (event.key >= '0' && event.key <= '9') {
        input.value += event.key;
    }
    if (event.key == '+' || event.key == '-' || event.key == '*' || event.key == '/') {
        input.value += event.key;
    } else if (event.keyCode == 13 || event.key == '=') {
        solve();
    }
}

document.addEventListener('keyup', function (event) {
    if (event.key === 'Enter' || event.key === '=') {
        solve();
    }
});

// Add decimal point logic
document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('keydown', function (event) {
        if (event.key === '.') {
            event.preventDefault(); 
            point();
        }
    });
});

function point() {
    if (!input) {  
        console.log("Input element not found");
        return;
    }


    let lastPart = input.value.split(/[\+\-\*\/]/).pop(); 
    if (!lastPart.includes('.')) {
        input.value += '.';
    } else {
        console.log("A period is already present.");
    }
}

function solve() {
    try {
        let x = math.evaluate(input.value);  
        input.value = x;
        console.log("Solved");
    } catch (error) {
        console.log("Invalid expression");
    }
}
