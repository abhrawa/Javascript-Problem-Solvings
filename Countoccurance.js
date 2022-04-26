/**
 * Step 1- Take the input String.
 * Step 2- Split the string.
 * Step 3- Iterate the loop on the string.
 * Step 4- Again iterate the nested loop from next element.
 * Step 5- Apply the condition to check for same elements.
 * Step 6- Manage the counter variable for both cases.
 * Step 7- Set the counter as 1 if no occurance found.
 * Step 8- Update the counter if repeatations found and concatinate with the char.
 * Step 9- Return the results.
 */

let strng = "aaabbghhd";
let newstr = strng.split("");

function countRepeat(str) {
  let newstrng = "";
  let count = 0;
  let currentchar = "";
  for (let i = 0; i < str.length; i++) {
    if (currentchar === "") {
      currentchar = str[i];
      count = 1;
      continue;
    }
    if (currentchar === str[i]) {
      count++;
      continue;
    }
    if (count > 0) {
      newstrng = newstrng + count + currentchar;
    }
    count = 1;
    currentchar = str[i];
  }
  if (count > 0) {
    newstrng = newstrng + count + currentchar;
  }
  return newstrng;
}
console.log(countRepeat(newstr));
