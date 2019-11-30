console.log("connected");

//for(initial value; condition; step or increment)
console.log("for loop div by 8");
for(var i = 0; i  < 18; i+=8) {
    console.log(i);
}

//while loop equivalent
console.log("while loop div by 8");
var wi = 0;

while(wi < 18) {
    console.log(wi);
    wi+=8
}

console.log("2nd for loop exercise");
var str = "ahceclwlxo";

for(var i = 1; i < str.length; i+=2) {
    console.log(str[i]);
}





//FOR LOOPS PROBLEM SET
//print all numbers between -10 and 19
console.log("print all numbers between -10 and 19");
for(var i = -10; i < 20; i++) {
    console.log(i);
}

// var counter = -10;

// while(counter < 20) {
//     console.log(counter);
//     counter++;
// }

//print all even numbers between 10 and 40
console.log("print all even numbers between 10 and 40");
for(var i = 10; i <= 40; i += 2) {
    console.log(i);
}

// var counter = 10;

// while(counter <= 40) {
//     console.log(counter);
//     counter+=2;
// }

//alternate version
console.log("alt v. - print all even numbers between 10 and 40");
for(var i = 10; i <= 40; i += 1) {
    if(i % 2 ===0) {
        console.log(i);
    }
}

var counter = 10;

// while(counter < 40) {
//     if(counter % 2 === 0) {
//         console.log(counter);
//     }
//     counter+=1;
// }

//print all odd numbers between 300 and 333
console.log("print all odd numbers between 300 and 333");
for(var i = 300; i <= 333; i++) {
    console.log(i);
}

// var counter = 300;

// while(counter <= 333) {
//     if(counter % 2 !== 0) {
//         console.log(counter);
//     }
//     counter+=1;
// }

//print all numbers divisible by 5 AND 3 between 5 and 50
console.log("print all numbers divisible by 5 AND 3 between 5 and 50");for(var i = 5; i <= 50; i++) {
    if(i % 5 === 0 && i % 3 === 0) {
        console.log(i);
    }
}

// var counter = 5;

// while(counter <= 50) {
//     if(counter % 5 === 0 && counter % 3 === 0) {
//         console.log(counter);
//     }
//     counter+=1;
// }