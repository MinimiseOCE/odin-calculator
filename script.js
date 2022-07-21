// Variable for input
let input = 0
// Variable for string shown
let text = ''
// Variable for sub-string
let subtext = ''
// Operator value for string
const operators = {
    '+': function(a, b){ return a+b},
    '-': function(a, b){ return a-b},
    'x': function(a, b){ return a*b},
    '÷': function(a, b){ return a/b},
    '%': function(a, b){ return a%b},
}

let dCheck = false
let counter = 10
let clear = 0


// On Button Click add number to input
const button1 = document.querySelector('#button1');
button1.addEventListener('click', function() { 
    if (clear == 1) {
        input = 0
    }
    if (dCheck == false) {
        input = input * 10 + 1
    }
    if (dCheck == true) {
        input = input + (1 / counter)
        counter = counter * 10
    }
    if (counter > 1000000) {
        input = input.toFixed(6);
    }
    
    document.getElementById('text').textContent=input;
    clear = 0
});

const button2 = document.querySelector('#button2');
button2.addEventListener('click', function() { 
    if (clear == 1) {
        input = 0
    }
    if (dCheck == false) {
        input = input * 10 + 2
    }
    if (dCheck == true) {
        input = input + (2 / counter)
        counter = counter * 10
    }
    if (counter > 1000000) {
        input = input.toFixed(6);
    }
    
    document.getElementById('text').textContent=input;
    clear = 0
});

const button3 = document.querySelector('#button3');
button3.addEventListener('click', function() { 
    if (clear == 1) {
        input = 0
    }
    if (dCheck == false) {
        input = input * 10 + 3
    }
    if (dCheck == true) {
        input = input + (3 / counter)
        counter = counter * 10
    }
    if (counter > 1000000) {
        input = input.toFixed(6);
    }
    
    document.getElementById('text').textContent=input;
    clear = 0
});

const button4 = document.querySelector('#button4');
button4.addEventListener('click', function() { 
    if (clear == 1) {
        input = 0
    }
    if (dCheck == false) {
        input = input * 10 + 4
    }
    if (dCheck == true) {
        input = input + (4 / counter)
        counter = counter * 10
    }
    if (counter > 1000000) {
        input = input.toFixed(6);
    }
    
    document.getElementById('text').textContent=input;
    clear = 0
});

const button5 = document.querySelector('#button5');
button5.addEventListener('click', function() { 
    if (clear == 1) {
        input = 0
    }
    if (dCheck == false) {
        input = input * 10 + 5
    }
    if (dCheck == true) {
        input = input + (5 / counter)
        counter = counter * 10
    }
    if (counter > 1000000) {
        input = input.toFixed(6);
    }
    
    document.getElementById('text').textContent=input;
    clear = 0
});

const button6 = document.querySelector('#button6');
button6.addEventListener('click', function() { 
    if (clear == 1) {
        input = 0
    }
    if (dCheck == false) {
        input = input * 10 + 6
    }
    if (dCheck == true) {
        input = input + (6 / counter)
        counter = counter * 10
    }
    if (counter > 1000000) {
        input = input.toFixed(6);
    }
    
    document.getElementById('text').textContent=input;
    clear = 0
});

const button7 = document.querySelector('#button7');
button7.addEventListener('click', function() { 
    if (clear == 1) {
        input = 0
    }
    if (dCheck == false) {
        input = input * 10 + 7
    }
    if (dCheck == true) {
        input = input + (7 / counter)
        counter = counter * 10
    }
    if (counter > 1000000) {
        input = input.toFixed(6);
    }
    
    document.getElementById('text').textContent=input;
    clear = 0
});

const button8 = document.querySelector('#button8');
button8.addEventListener('click', function() { 
    if (clear == 1) {
        input = 0
    }
    if (dCheck == false) {
        input = input * 10 + 8
    }
    if (dCheck == true) {
        input = input + (8 / counter)
        counter = counter * 10
    }
    if (counter > 1000000) {
        input = input.toFixed(6);
    }
    
    document.getElementById('text').textContent=input;
    clear = 0
});

const button9 = document.querySelector('#button9');
button9.addEventListener('click', function() { 
    if (clear == 1) {
        input = 0
    }
    if (dCheck == false) {
        input = input * 10 + 9
    }
    if (dCheck == true) {
        input = input + (9 / counter)
        counter = counter * 10
    }
    if (counter > 1000000) {
        input = input.toFixed(6);
    }
    
    document.getElementById('text').textContent=input;
    clear = 0
});

const button0 = document.querySelector('#button0');
button0.addEventListener('click', function() { 
    if (clear == 1) {
        input = 0
    }
    if (dCheck == false) {
        input = input * 10
        document.getElementById('text').textContent=input;
    }
    if (dCheck == true) {
        counter = counter * 10
        document.getElementById('text').textContent=input +'.0';
    }
    if (counter > 1000000) {
        input = input.toFixed(6);
    }
    
    clear = 0
});

const buttonDecimal = document.querySelector('#buttonDecimal');
buttonDecimal.addEventListener('click', function() { 
    if (clear == 1) {
        input = 0
    }
    document.getElementById('text').textContent=input + '.';
    clear = 0
    dCheck = true
});

// On Clear set everything to 0
const buttonAC = document.querySelector('#buttonAC');
buttonAC.addEventListener('click', function() { 
    input = 0
    subtext = ''
    document.getElementById('text').textContent=input;
    document.getElementById('subtext').textContent=subtext;
    dCheck = false
    counter = 10
});

// On Clear set everything to 0
const buttonC = document.querySelector('#buttonC');
buttonC.addEventListener('click', function() { 
    input = 0
    subtext = ''
    document.getElementById('text').textContent=input;
    document.getElementById('subtext').textContent=subtext;
    dCheck = false
    counter = 10
});

// On plus click add numbers in input
const buttonPlus = document.querySelector('#buttonPlus');
buttonPlus.addEventListener('click', function() { 
    // Send plus to string
    operator = '+'
    // Send input to substring
    subtext = input
    document.getElementById('subtext').textContent=subtext + operator;
    // Clear input
    input = 0
    document.getElementById('text').textContent=input;
    clear = 0
    dCheck = false
    counter = 10
});

// On subtract click subtract numbers in input
const buttonSubtract = document.querySelector('#buttonSubtract');
buttonSubtract.addEventListener('click', function() { 
    // Send subtract to string
    operator = '-'
    // Send input to substring
    subtext = input
    document.getElementById('subtext').textContent=subtext + operator;
    // Clear input
    input = 0
    document.getElementById('text').textContent=input;
    clear = 0
    dCheck = false
    counter = 10
});

// On multiply click multiply numbers in input
const buttonMultiply = document.querySelector('#buttonMultiply');
buttonMultiply.addEventListener('click', function() { 
    // Send multiply to string
    operator = 'x'
    // Send input to substring
    subtext = input
    document.getElementById('subtext').textContent=subtext + operator;
    // Clear input
    input = 0
    document.getElementById('text').textContent=input;
    clear = 0
    dCheck = false
    counter = 10
});

// On Divide click Divide numbers in input
const buttonDivide = document.querySelector('#buttonDivide');
buttonDivide.addEventListener('click', function() { 
    // Send multiply to string
    operator = '÷'
    // Send input to substring
    subtext = input
    document.getElementById('subtext').textContent=subtext + operator;
    // Clear input
    input = 0
    document.getElementById('text').textContent=input;
    clear = 0
    dCheck = false
    counter = 10
});

// On % click % numbers in input
const buttonRemainder = document.querySelector('#buttonRemainder');
buttonRemainder.addEventListener('click', function() { 
    // Send multiply to string
    operator = '%'
    // Send input to substring
    subtext = input
    document.getElementById('subtext').textContent=subtext + operator;
    // Clear input
    input = 0
    document.getElementById('text').textContent=input;
    clear = 0
    dCheck = false
    counter = 10
});

// On equal click set input to operation of 2 numbers
const equals = document.querySelector('#equals');
equals.addEventListener('click', function() { 
    if (input == 0 && operator == '÷') {
        document.getElementById('text').textContent='Cannot Divide by Zero!';
    }
    else {
        input = operators[operator](subtext,input)
        subtext = ''
        document.getElementById('text').textContent='';
        document.getElementById('subtext').textContent=input;
        clear = 1
        dCheck = false
        counter = 10
    }
    
});

