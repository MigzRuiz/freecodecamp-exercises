/**
 * Basic Algorithm Scripting: Title Case a Sentence
 * Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
 * 
 * For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
 * 
 * titleCase("I'm a little tea pot") should return a string.
 * titleCase("I'm a little tea pot") should return I'm A Little Tea Pot.
 * titleCase("sHoRt AnD sToUt") should return Short And Stout.
 * titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return Here Is My Handle Here Is My Spout.
 */

//My Solution
function titleCase(str) {
  //Split up the sentence into an array
  let strArr = str.split(" ");
  
  const newStr = strArr.map(word => {
    //Then to upper the first index
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  });

  //then join them together
  return newStr.join(" ");
}

titleCase("I'm a little tea pot");