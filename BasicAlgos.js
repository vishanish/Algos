// Print 1-255
// Print all the integers from 1 to 255.
    for(let i = 1; i < 256; i++){
        console.log(i);
    }

    // Print Sum 0-255
// Print integers from 0 to 255, and with each integer print the sum so far.
    let sum = 0;
    for(let i = 1; i < 256; i++){
        console.log("interger is: " + i + "; sum is: " + (sum +=i));
    }

// Find and Print Max
// Given an array, find and print its largest element.
function maxArr (arr){
    let max = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
oneArr = [6, 3, 5, 10];
console.log(maxArr(oneArr));

// Array with Odds
// Create an array with all the odd integers between 1 and 255 (inclusive).
function oddArr(num){
    let arrOdd = [];
    for(let i = 0; i < num; i++){
        if(i%2 != 0){
            arrOdd.push(i);
        }
    }
    return arrOdd;
}
console.log(oddArr(256));

// Greater Than Y
// Given an array and a value Y, count and print the number of array values greater than Y.
function greaterThanY(yarr, yval){
    let count = 0;
    for( let i = 0; i<yarr.length; i++){
        if(yarr[i] > yval){
            count += 1;
        }
    }
    return count;
}
oneArr = [6, 3, 5, 10];
console.log(greaterThanY(oneArr, 5));

// Max, Min, Average
// Given an array, print the max, min and average values for that array.
function mma(arrm){
    let max = arrm[0];
    let min = arrm[0];
    let arrylen = arrm.length;
    let sum = 0;
    for (let i = 0; i < arrm.length; i++){
        sum += arrm[i];
        if( arrm[i] > max){
            max = arrm[i];
        }
        if( arrm[i] < min){
            min = arrm[i];
        }
    }
    //finding average after the ending of the for
    let avg = sum/arrylen;
    return [max, min, avg];
}
oneArr = [6, 3, 5, 10];
console.log(mma(oneArr));

// Swap String For Array Negative Values
// Replace any negative array values with 'Dojo'.
function replaceNeg(reparr){
    let arrWord = [];
    for(let i = 0; i < reparr.length; i++){
        if(reparr[i] < 0){
            arrWord.push("Dojo");
        }
        else{
            arrWord.push(reparr[i]);
        }
    }
    return arrWord;
}
arrNeg = [24, 0, 5, -24, 8, -5];
console.log(replaceNeg(arrNeg));


// Print Odds 1-255
// Print all odd integers from 1 to 255.
for(let i = 1; i< 256; i++){
    if( i%2 != 0){
        console.log(i);
    }
}

// Iterate and Print Array
// Iterate through a given array, printing each value.
function ipa(iparr){
    for(let i = 0; i < iparr.length; i++){
        console.log(iparr[i]);
    }
}
ipa([24, 0, 5, -24, 8, -5]);

// Get and Print Average
// Analyze an array’s values and print the average.
function gpa(gparr){
    let sum = 0;
    for(let i = 0; i < gparr.length; i++){
        sum += gparr[i];
        if(gparr[i] < 0){
            console.log("Less than zero: " + gparr[i]);
        }
        else if (gparr[i] > 0){
            console.log("Greater than zero: " + gparr[i]);
        }
        else{
            console.log("Equal to zero: " + gparr[i]);
        }
    }
    let avg = sum/(gparr.length);
    console.log(avg);
}
gpa([24, 0, 5, -24, 8, -5]);


// Square the Values
// Square each value in a given array, returning that same array with changed values.
function stv(stvarr){
    let arrStv = [];
    for(let i = 0; i < stvarr.length; i++){
        arrStv.push(stvarr[i]*stvarr[i]);
    }
    return arrStv;
}
console.log(stv([1,2,3,4,5]));

// Zero Out Negative Numbers
// Return the given array, after setting any negative values to zero.
function zonn(zonnArr){
    let arrZonn = [];
    for(let i = 0; i < zonnArr.length; i++){
        if(zonnArr[i] < 0){
            arrZonn.push(0);
        }
        else{
            arrZonn.push(zonnArr[i]);
        }
    }
    return arrZonn;
}
console.log(zonn([24, 0, 5, -24, 8, -5]));
// Shift Array Values
// Given an array, move all values forward by one index, dropping the first and leaving a '0' value at the end;
function sav(savArr){
    savArr.shift();
    savArr.push(0);
    console.log(savArr);
}
sav([1,2,3,4,5]);