let string = "ababcca";
let strng = string.split("");
let obj = {};
const result = strng.filter(function filterData(str, index) {
  if (obj.hasOwnProperty(str)) {
    return false;
  }
  obj[str] = index;
  return true;
});

console.log(result);
