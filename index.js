function isPalindrome(word) {
  // Write your algorithm here
  // iterate thro the start of the array to the end of the array
  for (let i=0; i<word.length/2; i++) {
    let j = word.length - 1 - i
    if (word[i] !== word[j]) return false;
  }
  return true;
}

/* 
  Add your pseudocode here

  iterate from the beginning to the middle check each character from the corres
*/

/*
  Add written explanation of your solution here
  make a fuction that returns if a word is a palidrome, that is if the first letter is the same as the slast letter, 
  the second letter is the same as the second last letter until we reach the middle 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
