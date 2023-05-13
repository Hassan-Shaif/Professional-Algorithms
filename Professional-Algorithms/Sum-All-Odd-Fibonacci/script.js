/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers.
The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.

function sumFibs(num) {
  return num;
}
sumFibs(4);
*/


//Pseudocode

//-We will create a function to take a number
//-we will create three variables to make Fibonacci sequence, first one take 0 second take 1 and third is the sum of them
//- We will create for loop to update the value of the variables
//- We will create if statement to check if number is odd or not and sum them together if odd
//- sum will be return

//CODE
function sumFibs(num){
var num1=0;
var num2=1;
var num3=num1+num2;
var sum =0;
for(let i =0 ;i < num;i++){
    num1=num2;
    num2=num3;
    num3=num1+num2
    if(num1 < num && num1 % 2 !==0){
     sum = sum + num1;

      }
}
return sum
}
console.log(sumFibs(36))

//DIAGRAM
/*
--A NUMBER WILL BE GIVEN TO THE FUNCTION
--THE FOR LOOP WILL START WHEN (I =0) AND UPDATE THE VALUES OF NUM1,NUM2,NUM3 UNTIL I BECOME = NUM;
--IF STATEMENT WILL CHECK NUM1 VALUE WITH EVERY ITERATION IF ODD OR NOT AND ADD IT TO SUM VARIABLE IF ODD
--WHEN I = 0 ; NUM1 WILL BE =1 SO SUM WILL BE =1;
--WHEN I =1 ; NUM1 WILL BE ALSO 1, SO SUM WILL BECOME 2(1+1), AS LOONG AS 1 IS AN ODD NUMBER
--WHEN I =2 , NUM1 WILL BE 2, SO SUM WILL STAY 2 , BECAUSE 2 IS AN EVEN NUMBER
--WHEN I = 3, NUM1 WILL BE 3, SO SUM WILL BECOME (2+3=5)
--WHEN I = 4, NUM1 WILL BE 5, SO SUM WILL BECOME (5+5=10),AS LOONG AS 1 IS AN ODD NUMBER
...............
*/