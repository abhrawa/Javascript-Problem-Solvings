let string = "asdfghjasdfghjkasdfghjkasdfghj";
let strng = string.split("");
function removeDuplicate(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    obj[str[i]] = i;
  }
  return obj;
}
console.log(removeDuplicate(strng));
