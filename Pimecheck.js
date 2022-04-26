function checkPrime(num) {
  if (num == 2 || num % 2 !== 0) {
    console.log("Number is prime");
  } else {
    console.log("Number is not prime");
  }
  return;
}
console.log(checkPrime(7));
