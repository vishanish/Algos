/*PushFront
Given an array and an additional value, insert this value at the beginning of the array. Do this
without using any built-in array methods.*/
function addArr(num){
    arrNow = [2,3,4,5];
    for(let i = arrNow.length; i > -1; i--){
        arrNow[i] = arrNow[i-1];
    }
    arrNow[0] = num;
    return arrNow;
}
console.log(addArr(7));

/*PopFront
Given an array, remove and return the value at the beginning of the array. Do this without using
any built-in array methods except pop().*/
function remFirst(arrTo){    
    let firstEle = arrTo[0];
    for(let i = 0; i < arrTo.length -1; i ++){
        arrTo[i] = arrTo[i+1];
    }
    arrTo.pop();
    return firstEle;
}
let arry = [1,2,3,4,5];
console.log(remFirst(arry));

/*InsertAt
Given an array, index, and additional value, insert the value into the array at the given index. Do 
this without using built-in array methods. You can think of PushFront(arr,val) as equivalent to
InsertAt(arr,0,val).*/
function InsertAt(arr, ind,  val){
    for(let i = arr.length; i >= ind; i--){
        arr[i] = arr[i-1];
    }
    arr[ind] = val;
    return arr;
}
let arru = [1,2,3,4,5];
console.log(InsertAt(arru, 0, 5));

/*RemoveAt
Given an array and an index into the array, remove and return the array value at that index.
Do this without using any built-in array methods except pop(). Think of PopFront(arr) as
equivalent to RemoveAt(arr,0).*/

function removeAt(arr, ind){
    for(let i = ind; i < arr.length; i++){
        arr[i] = arr[i + 1];
    }
    arr.pop();
    return arr;
}
console.log(removeAt([1,2,3,4,5], 0));

/*Reverse Array
Given a numerical array, reverse the order of the values. The reversed array should have the same
length, with existing elements moved to other indices so that the order of elements is reversed*/

function reverseArr(arr){
    for(let i = 0; i < arr.length/2; i ++){
        let temp = arr[i];
        arr[i] = arr[(arr.length-1)-i];
        arr[(arr.length-1)-i] = temp;
    }
    return arr;
}
console.log(reverseArr([1,2,3,4,5]));

/*Remove Negatives
Implement a function removeNegatives() that accepts an array and removes any values that
are less than zero. 
Second-level challenge: don’t use nested loops.*/

function removeNegatives(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = "remove";
        }
        else{
            continue;
        }
    }
    return arr;
}
console.log(removeNegatives([1,2,-3,4,5]));

/*Skyline Heights
You are given an array with heights of consecutive buildings in the city. For example, [-1,7,3] would
represent three buildings: first is actually below street level, second is seven stories high, and third is
three stories high (but hidden behind the seven-story onbe). You are situated at street level. Return an
array containing heights of the buildings you can see, in order. Given [1,-1,7,3] return [1,7].*/

function skyHeight(arr){
    let skyArr =[];
    let height = 0;
    for (let i = 0; i < arr.length; i ++){
        if(arr[i] > height){
            height = arr[i];
            skyArr.push(arr[i]);
        }
    }
    return skyArr;
}
console.log(skyHeight([1,-1,7,3]));

/*Binary Search
Given a sorted array and a value, return whether that value is present in the array. Do not
sequentially iterate the entire array. Instead, ‘divide and conquer’, taking advantage of the fact
that the array is sorted.*/

function binSearch(arr, val){
    if(val < arr[arr.length/2]){
        for(let i = 0; i <arr.length/2; i++){
            if(arr[i] == val){
                console.log("its small");
            }
        }
    }
    else if (val > arr[arr.length/2]){
        for(let i = arr.length/2; i < arr.length; i++){
            if(arr[i] == val){
                console.log("its big");
            }
        }
    }
}
binSearch([1,2,3,4,5,6,7,8,9,0], 7);

/*Min Of Sorted-Rotated
You will be given a numerical array that has first been sorted, then rotated by an unknown
amount. Find and return the minimum value in that array.*/



/*Rotate Array
Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr’s values to the
right by that amount. ‘Wrap-around’ any values that shift off array’s end to the other side, so that
no data is lost. Operate in-place: given ([1,2,3],1), change the array to [3,1,2].
Optionally, add these advanced features:
a) allow a negative shiftBy (shift left, not right),
b) minimize memory usage. With only a few local variables (not an array), handle arrays and
shiftBys in the millions,
c) minimize how many touches of each element.*/

function rotateArr(arr, shiftBy){
    let arr2 = [];
    for(let i = 0; i < arr.length; i++){
        if((i + shiftBy) > arr.length){
            arr2[(i +(2*shiftBy))-arr.length] = arr[i];
        }
        else{
            arr2[i + shiftBy] = arr[i];
        }
    }
    return arr2;
}
let roarr = [1,2,3,4,5,6,7,8];
console.log(rotateArr(roarr, 2));

/*Second-to-Last
Return the second-to-last element of an array.*/
function stle(arr){
    let stlearr;
    for(let i = 0; i < arr.length; i++){
        stlearr = arr[arr.length- 2];
    }
    return stlearr;
}
console.log(stle[1,2,3,4,5]);

/*Second-Largest
Return the second-largest element of an array.*/
function secondLargest(arr){

}

/*Nth-to-Last
Return the element that is N-from-array’s-end*/

/*Nth-Largest
Given an array, return the Nth-largest element: there should be (N - 1) elements that are larger.*/

/*arrConcat
Replicate JavaScript’s concat(). Create astandalone function that accepts two arrays.
Return a new array containing the first array’s elements, followed by the second array’s
elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should
return ['a','b',1,2].*/

/*Faster Factorial
Remember iFactorial from last chapter? Takethat implementation and use a time-space tradeoff to 
accelerate the average running time. Recall that iFactorial(num) returns the product of positive 
integers from 1 to the given num. Forexample: fact(1) = 1, fact(2) = 2, fact(3) = 6. 
For these purposes, fact(0) = 1.*/

/*Smarter Sum
Use a time-space tradeoff to accelerate the average running time of an iSigma(num) function that returns
the sum of all positive integers from 1to num. Recall: sig(1) = 1, sig(2) = 3, sig(3) = 6, sig(4) = 10.*/

/*Fabulous Fibonacci
Use a time-space tradeoff to accelerate the average running time of an iFibonacci(num)
function that returns the ‘num’th number in the Fibonacci sequence. Recall: fib(0) = 0, fib(1) = 1,
fib(2) = 1, fib(3) = 2.*/

/*Tricky Tribonacci
Why stop with fibonacci? Create a function to retrieve a “tribonacci” number, from the sum of
the previous 3. Tribonaccis are {0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, ...}. Again, use a time-space
tradeoff to make this fast.*/

