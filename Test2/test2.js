// Question 1:Write a JavaScript function that takes an array of numbers as input and returns a new array with each number squared.

var array= [1, 2, 3, 4, 5];

var result= array.map((element) => element*element);
console.log(result);

// Question 2: Create a JavaScript function that checks if a given string is a palindrome (reads the same forwards and backwards).

var input="madam";

function palindrome(input){
var reverse=""; // null
for(var i=input.length-1; i>=0; i--){ //  i= 5-1=4, 3, 2, 1, 0

    reverse= reverse+input[i];  // reverse= m, a, d, a, m
}
if(reverse===input){
    console.log( `${input} is Palindorme`)
}
else{
    console.log(`${input} is not pallindrome`)
}

}
 
palindrome(input);

// Question 3: Write a JavaScript function that takes two arrays as input and returns a new array that contains only the elements that are present in both arrays (intersection).

var arr1=[1, 2, 3, 4];
var arr2= [3, 4, 5, 6];
var output=[];

function intersect(arr1, arr2){

    for(i=0; i<=arr1.length-1;i++){  //value-1, 2, 3, 4

        for(j=0; j<=arr2.length-1; j++){ //value- 1(3, 4, 5, 6, ), 2(3, 4, 5, 6, ), 3(3, 4, 5, 6), 4(3, 4, 5, 6)

            if(arr1[i]===arr2[j]){ // 1==(3, 4, 5, 6) F, 2==(3, 4, 5, 6) F, 3==(3T, 4, 5, 6), 4== (3, 4T, 5, 6)
                output.push(arr1[i]); // [3, 4]
            }
        }
    }
return output;

}

console.log(intersect(arr1, arr2));


// Question 4:Create a JavaScript function that takes an object and a key as input, and returns the value associated with that key in the object. If the key does not exist, return a default value.

var input= { name: "Alice", age: 25} 


function obj1(input){

   
    for(var key in input){
        
        if(key==="name"){
            console.log(key, input[key])
            break;
        }

        else{
            console.log("Error")
            break;
        }
    }
}

obj1(input)


// Question 5: Write a JavaScript function that takes a number as input and returns an array of its digits.
  var input=12345;
 
  var output1=String(input).split("").map((input)=> {
return Number(input);
}
);

console.log(output1)

// Question 6:Create a JavaScript function that takes a string as input and returns a new string with each character duplicated (e.g., "hello" becomes "hheelllloo").

var input="hello";
var output="";
function duplicated(input){
for(var i=0; i<=input.length-1; i++){
    // console.log(input[i]);
    output=input[i].concat(input[i]);
    console.log(output);

}

}

duplicated(input)

// Question 7:Write a JavaScript function that takes an array of objects and a key, and returns an array containing the values associated with that key from each object.

var input= [{ name: "Alice"}, {name: "Bob"}, {name: "Charlie"} ];
function obj2(input){
    for(var key in input){
        console.log(input[key]);
    }
}

obj2(input);

// Question 8:
// Create a JavaScript function that takes a sentence as input and returns the number of words in the sentence.

var input= "This is a sample sentence.";
var count=1;
// console.log(count)

function countwords(input){
    if(input===""){
        console.log("Empty Statement")
        return 0;
    }

    for(i=0;i<=input.length; i++){
        // console.log(input[i]);
        if(input[i]=== " "){
            count++;
        
        }
       
}
console.log(count)

}
countwords(input)


// Question 9:
// Write a JavaScript function that takes an array of numbers and returns the second smallest number in the array.


// Input: [10, 2, 14, 5, 7] - Not done yet

// Question 10:
// Create a JavaScript function that takes a date object and returns a formatted string in the format "YYYY-MM-DD".

var newdate=[2024, 4, 15];

function newDate(newdate){
var yyyy= newdate.shift();
var mm=newdate.shift();
var dd=newdate.shift();
console.log(`${yyyy}-${mm}-${dd}`)
}
newDate(newdate)