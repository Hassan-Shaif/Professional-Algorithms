//
/*We want to play a "Game of 3s". Here's how you play it:

First, you pick a random number. Then, repeatedly do the following:

If the number is divisible by 3, divide it by 3.
If it's not, either add 1 or subtract 1 (to make it divisible by 3), then divide it by 3.
The game stops when you reach "1".

Challenge Description
The input is a single number: the number at which the game starts. Write a program that plays the 3s game,
and outputs a valid sequence of steps you need to take to get to 1. Each step should be output as the number you start at, followed by either -1 or 1 (if you are adding/subtracting 1 before dividing), or 0 (if you are just dividing). The last line should simply be 1.

Input Description
The input is a single number: the number at which the game starts.

gameOfThree(100);
Output Description
The output is a list of valid steps that must be taken to play the game. Each step is represented by the number you start
 at, followed by either -1 or 1 (if you are adding/subtracting 1 before dividing), or 0 (if you are just dividing).
 The last line should simply be 1.

//OUTPUT:
100 -1
33 0
11 1
4 -1
1

*/

//Pseudocode

//-We will create a variable to take a random number from the user
//- We will create do while loop to put the number in as loong as the number > 1
//- WE WILL CREATE IF STATEMENT TO SEE IF THE NUMBER IS DIVIDABLE BY 3
//- ELSE IF TO CHECK IF NOT AND NUMBER -1 WILL MAKE IT DIVIDABLE THEN NUMBER
//- ANOTHER ELSE IF STATEMENT TO CHECK IF NUMBER +1 WILL MAKE IT DIVIDABLE BY 3

//CODE

var number =prompt("Enter a random number to play the game !");
do{
     if(number%3===0 ){
           console.log(`(${number}/3) `)
            number=number/3;

     }else if((number-1) % 3=== 0) {
            console.log(`${number} -1`)
            number=number-1;
     }else {
        console.log(`${number} +1`)
        number=number+1;
     }
}while(number>1)
console.log(number)

//DIAGRAM
/*
--A NUMBER WILL BE GIVEN TO THE PROGRAM BY USER
-- THE NUMBER WILL BE PUTTING IN THE WHILE DO LOOP AS LOONG AS NUMBER > 1
--LET'S SAY THE USER PUT NUMBER 100
-- THE FIRST IF STATEMENT WILL CHECK IF (NUMBER 100 % 3 ?), AND IF NOT AS IN THIS CASE
--THE ELSE IF STATEMENT WILL CHECK IF NUMBER - 1 WILL MAKE IT DIVIDABLE BY 3 (100-1=99  , 99%3===0)
--IF IT IS TRUE (LIKE IN THIS CASE) THE LOOP WILL CHECK IF THE CONDITION OF THE WHILE LOOP DOS NOT EXISTING ANYMORE(NUMBER > 1)
--(99>1)SO THE LOOP WILL CONTINUE AND GO TO FIRST IF STATEMENT AND DIVIDE (99/3)
--THE NEW NUMBER WILL BE 33 AFTER DIVIDED BY 3
--33 IS DIVIDABLE BY 3 SO THE NEW NUMBER WILL BE 11
--11 IS NOT DIVIDABLE BY 3 AND (11-1) IS NOT NEITHER DIVIDABLE BY 3
--SO THE LAST IF CONDITION WILL BE THE LAST CHANCE TO MAKE IT DIVIDABLE(NUMBER +1) SO(11+1=12)WHICH IS DIVIDABLE BY 3
--THE LOOP WILL DO THE SAME FOR EVERY NUMBER UNTIL REACHING NUMBER 1.
*/
