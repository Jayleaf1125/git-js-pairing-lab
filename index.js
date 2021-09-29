//Code your solutions in this file
function fiveToOneHundred() {
    for(let i = 5; i <= 100; i++) {
        console.log(i);    
    }
}

function multiplesOfThree() {
    for(let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
}

function multiplesOfThreeOrFive() {
    for(let i = 0; i <= 100; i++) {
        if(i % 3 === 0) {
         console.log(i);
        }  else if (i % 5 === 0) {
            console.log(i);
        }
    }
}

function untilNum(number) {
    for(let i = 0; i <= number; i++) {
        console.log(i)
    }
}

//Code your solutions in this file
function fiveToOneHundred() {
    for(let i = 5; i <= 100; i++) {
        console.log(i);    
    }
}

function multiplesOfThree() {
    for(let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
}

function multiplesOfThreeOrFive() {
    for(let i = 0; i <= 100; i++) {
        if(i % 3 === 0) {
         console.log(i);
        }  else if (i % 5 === 0) {
            console.log(i);
        }
    }
}

function untilNum(number) {
    for(let i = 0; i <= number; i++) {
        console.log(i)
    }
}

function multiply(number1, number2) {
    const product = number1 * number2;
    return product;    
}

function add(number1, number2) {
    if (number1 === number2) {
        const sumWithtriple = (number1 + number2) * 3;
        return sumWithtriple;
    } else {
        const sum = number1 + number2;
        return sum;
    }
}

function traingleArea(base, height) {
    const product = base * height;
    const area = product * (1 / 2);
    return area;
}

function largest(number1, number2, number3) {
    const largAvg = Math.max(number1, number2, number3);
    return largAvg;
}

// Call
// fiveToOneHundred();
// multiplesOfThree();    
// multiplesOfThreeOrFive();
// untilNum(5);
// console.log(add(6, 6));
// console.log(multiply(3, 7.5));
// console.log(traingleArea(6, 8));
console.log(largest(30, 22, 17));