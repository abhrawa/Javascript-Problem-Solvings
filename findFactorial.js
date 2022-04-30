function findFactorial(num) {
  let result = 1;
  for (let i = num; i >= 1; i--) {
    result = result * i;
    console.log(result);
  }
  return result;
}
console.log(findFactorial(5));
