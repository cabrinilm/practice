/* In this kata you are required to, given a string, 
replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it.
*/


// compare the letter with the numerical alphabet position 
// send the numerial alpahbet 

// how to act 
// 1- create an obj with each number to each letter 
// 2- compare each letter and return the correspondent number 



function alphabetPosition(data){
       

    if(typeof data !== 'string'){
        return 'Invalid data'
    }



const numberToLetter = 
    {
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, 
        k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, 
        t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
      } 
     
      const numberInLetter = data
      .toLowerCase()
      .split('')
      .map(letter => {
          
          if (numberToLetter[letter]) {
              return numberToLetter[letter];
          }
          return null; 
      })
      .filter(num => num !== null) 
      .join(' '); 

  return numberInLetter;

     
}



module.exports = alphabetPosition;