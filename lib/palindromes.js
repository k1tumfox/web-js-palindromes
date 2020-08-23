const isPalindrome = function(s) {
  
  s = s.split(" ").join("");
  let stringReverse = s.split("").reverse().join("");
  
  return s === stringReverse;
};

module.exports = isPalindrome;