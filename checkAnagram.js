function checkAnagram(strng1, strng2) {
  const str1 = strng1.split("").sort().join("");
  console.log(str1);
  const str2 = strng2.split("").sort().join("");
  console.log(str2);
  if (str1 === str2) {
    return " Anagram";
  }
  return "Not Anagram";
}
console.log(checkAnagram("act", "cat"));
