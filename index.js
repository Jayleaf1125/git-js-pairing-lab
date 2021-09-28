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
    
// Call
fiveToOneHundred();
multiplesOfThree();    
multiplesOfThreeOrFive();
untilNum(5);
    