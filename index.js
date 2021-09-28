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

// Call
// fiveToOneHundred();
multiplesOfThree();