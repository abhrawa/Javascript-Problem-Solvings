/**
 * Step 1- Take the input number.
 * Step 2- Iterate a loop till inputs.
 * Step 3- Apply the condition to check if number is divisible by the iterate numbers or not.
 * Step 4- Again apply the condition to check if the number is divisible by 2,3 and 5.
 * Step 5- If yes then return true and if not then return false.
 */

function findLCM(num) {
  let diviser = [];
  let result = "";
  let i = "";
  while (i < num) {
    result = num / i;
    if (Number.isInteger(result)) {
      num = result;
      diviser.push(i);
      console.log(diviser);
    }
    i++;
  }
}
findLCM(60);
