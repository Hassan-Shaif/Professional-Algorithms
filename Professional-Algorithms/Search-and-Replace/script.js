/*Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it.
For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

function myReplace(str, before, after) {
  return str;
}
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
*/

//Pseudocode

//-We will create a function to take three arguments
//- We will use split method to convert string into array
//-We will loop through the array
//-we will use if statement to find the word that we want to replace
//-we will convert the array to str again using join method

//CODE

function myReplace(str, before, after) {
   str=str.split(" ")

    for(i=0;i < str.length; i++){
        if(str[i]===before){
            str[i]=after[0].toUpperCase ()+after.slice(1)   ;
        }
    }
    str=str.join(" ");
  return str;
}
console.log(myReplace("A quick brown fox jumped over the lazy dog",'dog','cat'))

/*DIAGRAM
--A STRING WILL BE GIVEN TO THE FUNCTION AS FIRST ARGUMENT,Second argument is the word that  will be replacing(BEFORE),
--Third argument is what you will be replacing the second argument with (after)
--THE STRING WILL BE CONVERTED INTO ARRAY
--FOR LOOP WILL LOOP THROUGH THE ARRAY, STARTING WITH INDEX 0 WHEN(I=0) AND CHECK IF STR[i](WHICH IS THE FIRST WORD = BEFORE)
--IF NOT THEN THE LOOP WILL GO FORWARD WHEN I =1 AND CHECK AGAIN IF IT == BEFORE, UNTIL FINDING THE WORD THAT ==BEFORE.
--WHEN THE WORD WILL BE FOUND, IT WILL BE REPLACED WITH THE WORD "after" WHICH IS THE THIRD ARGUMENT OF THE FUNCTION.
--THE ARRAY WILL BE CONVERTED AGAIN TO STRING AND RETURN.
*/