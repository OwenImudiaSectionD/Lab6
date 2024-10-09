// TASK ONE 

// A variable to store a number value
let myNumber = 10;

// Making a variable to store the string 
let myString = "Hello, JavaScript!";

// Printing the value number
console.log(myNumber)

// Printing the message
console.log(myString) 


// TASK TWO

// A loop that iterates from 0-10
for (i=0; i<=10; i++){
    console.log(i);
}

// A loop that prints out the first five multiple of three
for(i=1; i<6; i++){ //The i<6 is chosen as this specifies the amount of number needed from the calculation
    console.log(i*3) //The calculation is done here as i is being iterated it will also be getting operated here
}

// TASK THREE

//This function prints out the addition of two given numbers
function addNumbers(num1, num2){
    return num1 + num2;
}

console.log(addNumbers(5, 5));// should be 10

//This functions prints out the multiplication of two given numbers
function multiplyNumbers (num1, num2){
    return num1 * num2;
}

console.log(multiplyNumbers(5, 5));//should be 25