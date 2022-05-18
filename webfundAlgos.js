//Week 1

//Lesson 1 - Predict the output
var a = 25;
a = a - 13;
console.log(a/2);
//output: 6

a = "hello";
console.log(a + " hello");
//output: "hello hello"

//Lesson 2 - Predict Loops
for(var i=0; i<10; i++) {
    console.log(i);
    i = i + 3; 
}
    
//output:0, 4, 8
console.log("outside of the loop " + i);
//output: "outside of the loop 12"

//Lesson 3 - Predict what the code does
function getTotal(arrayOfNumbers) {
    var sum = arrayOfNumbers[0];
    for(var i=0; i<arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i];
        console.log("the current sum is: " + sum); 
    }
    console.log("the total is: " + sum);
    }
    getTotal([1, 3, 5]);
/*output: the current sum is: 2
output: the current sum is: 5
output: the current sum is: 10
output: the total is: 10*/

    
//Always isSunny
var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";
    
if(isSunny) {
    whatToBring += "sunglasses, ";
}
if(temperature < 50) {
    whatToBring += "a coat, ";
}
if(isRaining) {
    whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!";
    
console.log(whatToBring);
//output: I should bring sunglasses, a coat, and a smile.


//Prepare for downcount
for(var i=10; i>0; i--) {
    if(i != 2) {
        console.log(i);
    } else {
        console.log("ignition!");
    }
}

console.log("liftoff!");
//output: 10, 9, 8, 7, 6, 5, 4, 3, ignition, 1, liftoff

//Count positives
var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > 0){
            countPositives += 1;
        }
    }
    
console.log("there are " + countPositives + " positive values");
    
//output: "there are 4 positive values"


//Code Flow - Functions
var x = 5;
    
function setX(newValue) {
    x = newValue; 
}
    
console.log(x);
//output: 5
setX(15);
console.log(x);
//output: 15


//The Return of return
var x = 5;
    
function addToX(amount) {
    return x + amount;
    console.log("hello there");
}
    
console.log(x);
//output: 5
var result = addToX(-10);
console.log(result);
//output: -5
console.log(x);
//output: 5

//Code Flow - Is the Array a Palindrome
function isPal(arr) {
    for(var left=0; left<arr.length/2; left++) {
        var right = arr.length-1-left;
        if(arr[left] != arr[right]) {
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}
    
var result1 = isPal( [1, 1, 2, 2, 1] );
console.log(result1);
//output: Not a pal-indrome
    
var result2 = isPal( [3, 2, 1, 1, 2, 3] );
console.log(result2);
//output: Pal-indrome


//How to swap variables
var fruit1 = "apples";
var fruit2 = "oranges";
    
fruit2 = fruit1;
    
console.log(fruit2 + " and " + fruit1);
//output: apples and apples

var fruit1 = "apples";
var fruit2 = "oranges";
    
var temp = fruit1; // temp is a common name for this
fruit1 = fruit2;
fruit2 = temp;
    
console.log(fruit2 + " and " + fruit1);
//output: apples and oranges

//While loops
var start = 0;
var end = 12;
    
while(start < end) {
    console.log("start: " + start + ", end: " + end);
    start += 2;
    end -= 2;
}
//output: start: 0, end: 12
//output: start: 2, end: 10
//output: start: 4, end: 8

/*Reversing an array
Write a function reverse( arr ) to reverse an array, if we were given...

["a", "b", "c", "d", "e"];copy
we expect to get back...

["e", "d", "c", "b", "a"];*/

function reverseArr(arr){
    for(let i = 0; i < arr.length/2; i++){
        let temp = arr[i];
        arr[i] = arr[(arr.length-1)-i];
        arr[(arr.length-1)-i] = temp;
    }
    return arr;
}
console.log(reverseArr([1,2,3,4,5]));

//Week 2
//The Math Library
//Predict what each of the following will return. Can we predict the variable random?

var floor = Math.floor(1.8);
var ceiling = Math.ceil( Math.PI );
var random = Math.random();
    
console.log(floor);
//output: 1
console.log(ceiling);
//output: 4
console.log(random);
//output: between 0 and 1

//Dice Roller
//Using what we've learned about the Math library in JavaScript, 
//complete the following function that should return a value between 1 through 6 at random.

function d6() {
    var roll = Math.random();
    // your code here
    return roll;
}
    
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);