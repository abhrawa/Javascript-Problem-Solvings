let string = "aaabbghhdaa";
let newstrg = string.split("");
const obj = {};
let Result = "";
console.log(newstrg);
function countobjrpt(str) {
  let currentChar = "";
  for (let i = 0; i < str.length; i++) {
    if (!obj.hasOwnProperty(str[i])) {
      obj[str[i]] = 1;
      console.log(obj);
      continue;
    }
    if (obj.hasOwnProperty(currentChar)) {
      obj[currentChar] = obj[currentChar] + 1;
      console.log(obj[currentChar]);
      continue;
    }
  }
  if (obj.hasOwnProperty(currentChar)) {
    Result = Result + obj[currentChar] + currentChar;
  }
  return Result;
}
console.log(countobjrpt(string));
