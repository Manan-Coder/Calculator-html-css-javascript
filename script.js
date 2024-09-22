

let result
const input = document.getElementById("num-input")
input.addEventListener('input', function (e) {
    const allowedChars = /^[0-9+\-*/().]+$/;
    if (!allowedChars.test(this.value)) {
        this.value = this.value.slice(0, -1); // Remove the last character
    }
});
function AC() {
    input.value = ""
    input.focus()
}


function C() {
    const input_ar = input.value
    const input_final_array = input_ar.split("")
    const remove = input_final_array.pop()
    const input_final = input_final_array.join("")
    input.value = input_final
}

function seven() {
    input.value = input.value + 7
}
function eight() {
    input.value = input.value + 8
}
function nine() {
    input.value = input.value + 9
}
function six() {
    input.value = input.value + 6
}
function five() {
    input.value = input.value + 5
}
function four() {
    input.value = input.value + 4
}
function three() {
    input.value = input.value + 3
}
function two() {
    input.value = input.value + 2
}
function one() {
    input.value = input.value + 1
}
function zero() {
    input.value = input.value + 0
}


function add() {
    input.value = input.value + '+'
}

function sub() {
    input.value = input.value + '-'
}

function mult() {
    input.value = input.value + '*'
}

function div() {
    input.value = input.value + '/'
}

function point() {
    input.value = input.value + '.'
}

function solve() {
    let x = math.evaluate(input.value)
    input.value = x
}

function change() {
    let m = math.evaluate(input.value + "* -1")
    input.value = m
}

