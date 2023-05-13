/*
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.

function sumPrimes(num) {
  return num;
}
sumPrimes(10);
sumPrimes(10) should return a number.
sumPrimes(10) should return 17.
sumPrimes(977) should return 73156.
*/


function sumPrimes(num) {
var result = 0
    for(let i=2;i <= num;i++){
        if(i !== 2 && i%2 === 0 && (i%i===0 &&i%1===0)){

        }
         else if (i !== 3 && i%3 ===0 && (i%i===0 &&i%1===0)){
         }
        else {
            result+=i ;
        }
    }

  return result;
}
console.log(sumPrimes(15))