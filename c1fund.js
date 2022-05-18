/*Sigma
Implement a function sigma(num) that, given a number, returns the sum of all positive integers from 
1 up to number (inclusive). Ex.: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).*/

function sigma(num){
    let sum = 0;
    for (let i = 0; i <= num; i++){
        sum +=i;
    }
    return sum;
}
console.log(sigma(5));

/*Factorial
Write a function factorial(num) that, given a number, returns the product (multiplication) of all
positive integers from 1 up to number (inclusive). For example, factorial(3) = 6 (or 1 * 2 * 3);
factorial(5) = 120 (or 1 * 2 * 3 * 4 * 5).*/

function factorial(num){
    let total = 1;
    for (let i = 1; i <= num; i++){
        total *= i;
    }
    return total;
}
console.log(factorial(3));

/*Threes and Fives
Create function ThreesFives() that adds each value from 100 and 4000000 (inclusive) if that value
is evenly divisible by 3 or 5 but not both. Display the final sum in the console.

Second: Change your function to make a BetterThreesFives(start,end)where start and end
values are customizable. You can think of the above ThreesFives() function as
BetterThreesFives(100,4000000)*/

function ThreeFives(){
    let sum = 0;
    for(let i = 100; i <= 4000000; i++){
        if( i % 5 == 0 ){
            sum +=i;
        }
        else if ( i % 3 == 0 ){
            sum += i;
        }
        else{
            continue;
        }
    }
    return sum;
}
console.log(ThreeFives());

function BetterThreesFives(start, end){
    let sum = 0;
    if(start >= end){
        console.log("start value needs to be smaller than the end value")
    }
    for(let i = start; i<=end; i++){

        if( i % 5 == 0 ){
            sum +=i;
        }
        else if ( i % 3 == 0 ){
            sum += i;
        }
        else{
            continue;
        }
    }
    return sum;
}
console.log(BetterThreesFives(100, 4000000));

/*Generate Coin Change
Implement generateCoinChange(cents) that accepts a parameter for the number of cents, and
computes how to represent that amount with the smallest number of coins. Console.log the result.*/

function generateCoinChange(cents){
    let remaincents = cents;
    let counts = 0;
    if(remaincents >= 25){
        counts += Math.floor(remaincents/25);
        remaincents = (remaincents%25);
    }
    if(remaincents >= 10){
        counts += Math.floor(remaincents/10);
        remaincents -= (Math.floor(remaincents/10)*10);
    }
    if(remaincents >= 5){
        counts += Math.floor(remaincents/5);
        remaincents -= (Math.floor(remaincents/5)*5);
    }
    if(remaincents >= 1){
        counts += remaincents;
        remaincents -= remaincents;
    }
    else{
        return "need larger value";
    }
    return ["remaining change: " + remaincents, "number of coins: " + counts];
}
console.log(generateCoinChange(42));


/*Statistics to Doubles
Implement a ‘die’ that randomly returns an integer between 1 and 6 inclusive. Roll a pair of these 
dice, tracking the statistics until doubles are rolled. Display the number of rolls, min, max, 
and average. */

function die(){
    let rolls = 0;
    let min = 6;
    let max = 0;
    // let average = 0;
    let sum = 0;
    let die1 = 0;
    let die2 = 1;
    while( die1 != die2){
        die1 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
        console.log(die1);
        die2 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
        console.log(die2);
        rolls += 1;
        sum += die1 + die2;
        if(die1 < min){
            min = die1;
        }
        else if (die2 < min){
            min = die2;
        }
        if(die1 > max){
            max = die1;
        }
        else if( die2 > max){
            max = die2;
        }
    }
    return (["number of rolls: " + rolls, ", sum: " + sum, ", max: " + max, ", min: " + min, ", average: " + (sum/rolls), ", die1: " + die1, ", die2: " + die2]);
}

console.log(die());

/*Sum To One Digit
Implement a function sumToOne(num) that, given a number, sums that number’s digits
repeatedly until the sum is only one digit. Return that final one digit result. */

function sumToOne(num){
    let lumsum = num;
    for(let i = 0; i < num.toString().length; i++){
        lumsum = (lumsum%10)+((lumsum - lumsum%10)/10);
    }
    return lumsum;
}
console.log(sumToOne(789));

/*Fibonacci
Implement the Fibonacci function, a famous mathematical equation that generates a numerical
sequence such that each number is the sum of the previous two. The Fibonacci numbers at index 0
and 1, coincidentally, have values of 0 and 1. Your function should accept an argument of which
Fibonacci number.
Examples: fibonacci(2) = 1, fibonacci(3) = 2, fibonacci(4) = 3, fibonacci(5) = 5, etc */

function fibonacci(num){
    let arr = [0,1,1];
    for(let i = 3; i <=num; i ++){
        arr.push((arr[i-2]) + arr[i-1]);
    }
    return arr[arr.length-1];
}
console.log(fibonacci(5));

/*Implement a function that accepts two non-negative integers as arguments. Function lastDigitAtoB(a,b) 
should return the last digit of the first number (a) raised to an exponent of the second number (b).
Examples: given (3, 4), you should return 1 (the last digit of 81: 3 * 3 * 3 * 3). Given (12, 5), 
return 2 (the least significant digit of 248832, which is 12 * 12 * 12 * 12 * 12). */

function lastDigitAtoB(a, b){
    let value = 1;
    for( let i = 1; i <= b; i++){
        value *= a;
    }
    return (value%10);
}
console.log(lastDigitAtoB(5, 5));

/*Clock Hand Angles
Traditional clocks are increasingly uncommon, but most can still read rotating hands of hours, minutes,
and seconds.
Create function clockHandAngles(seconds) that, given the number of seconds since 12:00:00, will
print the angles (in degrees) of the hour, minute and second hands. As a quick review, there are 360
degrees in a full arc rotation. Treat “straight-up” 12:00:00 as 0 degrees for all hands.*/

function clockHandAngles(seconds){
    let remainingSeconds = seconds%60;
    let wholeMinutes = Math.floor(seconds/60);
    let remainingMinutes = Math.floor(wholeMinutes%60);
    let wholeHours = Math.floor(wholeMinutes/60);
    let secondDegrees = remainingSeconds * 6;
    let minuteDegrees = (remainingMinutes * 6) + (remainingSeconds *0.1);
    let hourDegrees = (wholeHours * 30) + (remainingMinutes* 0.5);
    return ["seconds: " + secondDegrees, ", minutes: " + minuteDegrees, ", hours: " + hourDegrees];
    
}
console.log(clockHandAngles(3661));