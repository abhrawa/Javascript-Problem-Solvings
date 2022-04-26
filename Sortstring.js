let strng = "abhishek";
let strig = strng.split("");
// console.log(strig);
function sortString(str) {
  let temp = "";
  let newstr = "";
  for (let i = 0; i < str.length; i++) {
    // console.log(str[i]);
    for (let j = i + 1; j < str.length; j++) {
      //   console.log(str[j]);
      if (str[i] > str[j]) {
        temp = str[i];
        str[i] = str[j];
        str[j] = temp;
        newstr = str + "";
      }
      sortedstr = newstr.replace(/,/g, "");
    }
  }
  return sortedstr;
}
console.log(sortString(strig));
