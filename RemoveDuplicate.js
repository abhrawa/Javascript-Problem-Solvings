/**
 * Step 1- Take the input string from the function.
 * Step 2- Split the string into array.
 * Step 3- Iterate a loop on the string.
 * Step 4- .
 * Step 5- Apply condition to compare both the elements on every iteration.
 * Step 6- Return the final string as a result.
 */

let string = "asdfghjasdfghjkasdfghjkasdfghj";
let strng = string.split("");
let newstr;
function removeDuplicate(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj.hasOwnProperty(str[i])) {
      str.splice(i, 1);
      i--;
    } else {
      obj[str[i]] = i;
    }
  }
  let newstr = str.toString();
  return newstr;
}
console.log(removeDuplicate(strng));
