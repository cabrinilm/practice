/*Make the first letter of each word to be capitalised */

//identify the first letter of each word
//change it to be capitalised 
// return the phrase


function makeCapitalLetters(phrase){


const newArr = phrase.split(' ').map(word => {
   return   word[0].toUpperCase() + word.slice(1)
    
})

return   newArr.join(' ')

}





module.exports = makeCapitalLetters;