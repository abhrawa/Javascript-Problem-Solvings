const strig = "abadacadmadamacaddbadasdfghhgfdsa";
const stng = strig.split("");
// console.log(stng);
let count = 0;
let result = "";
function largestPalindrome(str) {
  for (let i = 0; i < str.length; i++) {
    let newvar = str[i];
    for (let j = i + 1; j < str.length - 1; j++) {
      newvar = newvar + str[j];
      // console.log(newvar);
      function checkPalindrome(newstr) {
        for (let k = 0; k < newstr.length - k - 1; k++) {
          if (newstr[k] !== newstr[newstr.length - k - 1]) {
            return false;
          }
        }
        return true;
      }
      const response = checkPalindrome(newvar);
      if (response && newvar.length > count) {
        result = newvar;
        //console.log("Largest Palindrome :", result);
        count = newvar.length;
      }
    }
  }

  return result;
}
console.log(largestPalindrome(stng));
