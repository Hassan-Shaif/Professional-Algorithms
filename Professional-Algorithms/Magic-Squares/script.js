//A 3x3 magic square is a 3x3 grid of the numbers 1-9 such that each row, column, and major diagonal adds up to 15. Here's an example:
/*
<code>8 1 6
3 5 7
4 9 2
</code>
The major diagonals in this example are 8 + 5 + 2 and 6 + 5 + 4.

Write a function that, given a grid containing the numbers 1-9, determines whether it's a magic square.
Use whatever format you want for the grid, such as a 2-dimensional array, or a 1-dimensional array of length 9,
or a function that takes 9 arguments. You do not need to parse the grid from the program's input, but you can if you want to.
You don't need to check that each of the 9 numbers appears in the grid: assume this to be true.

Example inputs/outputs

<code>[8, 1, 6, 3, 5, 7, 4, 9, 2] => true
[2, 7, 6, 9, 5, 1, 4, 3, 8] => true
[3, 5, 7, 8, 1, 6, 4, 9, 2] => false
[8, 1, 6, 7, 5, 3, 4, 9, 2] => false
</code><div>
</div>
*/


//Pseudocode

//-We will create a function to take a square array
//- We will create if statement to determines whether it's a magic square
//-return true if yes and false if not


//code
function magicSquare(array){
    if(array[0]+array[4]+array[8] === array[2]+array[4]+array[6]){
       return true;
    }else{
        return false;
    }
return magicSquare();
}

console.log(magicSquare([8, 1, 6, 7, 5, 3, 4, 9, 2] ))

//diagram

/*
--an array will be given as argument to the function
--if statement will access the  major diagonals and sum them through index of array
--the sum of the first diagonal will be(8+5+2=15)and the second (6+5+4=15)
--they are equal so true will be return
*/
