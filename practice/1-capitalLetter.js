/*Make the first letter of each word to be capitalised */

//identify the first letter of each word
//change it to be capitalised 
// return the phrase


function makeCapitalLetters(phrase){
  const newWord = phrase.slice(0,1).toUpperCase()
  console.log(newWord + phrase.slice(1))
    return newWord + phrase.slice(1)

}


console.log(makeCapitalLetters('olaolaola'), '<---')



module.exports = makeCapitalLetters;