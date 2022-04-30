let strng = "Abhishek";
function reverseString(str) {
  str = str.split("");
  let result = "";
  for (let i = str.length - 1; i > 0; i--) {
    result = result + str[i];
  }
  return result;
}
console.log(reverseString(strng));
