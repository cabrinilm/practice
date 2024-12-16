
const alphabetPosition = require('../practice/2-alphabetPosition')

describe('alphabetPosition', () => {
    test('data is acceptable', () => {
       //arrange
        const input = 123
        const expectedOutPut = 'Invalid data'
       //act
        const actualOutPut = alphabetPosition(input)
       //assert
       expect(actualOutPut).toBe(expectedOutPut)
    })
    test('data is acceptable', () => {
        //arrange
         const input = []
         const expectedOutPut = 'Invalid data'
        //act
         const actualOutPut = alphabetPosition(input)
        //assert
        expect(actualOutPut).toBe(expectedOutPut)
     })
})

describe('alphabetPosition', () => {
    test('words', () => {
        //arrange
        const testCases =  [{ input: 'abc', expected: '1 2 3' },
        { input: 'xyz', expected: '24 25 26' },
        { input: 'hello', expected: '8 5 12 12 15' },
        { input: 'world', expected: '23 15 18 12 4' },
        { input: 'a', expected: '1' },
        { input: 'z', expected: '26' },
        { input: 'programming', expected: '16 18 15 7 18 1 13 13 9 14 7' },
        { input: 'alphabet', expected: '1 12 16 8 1 2 5 20' },
        { input: 'challenge', expected: '3 8 1 12 12 5 14 7 5' },
        { input: 'javascript', expected: '10 1 22 1 19 3 18 9 16 20' },
        { input: 'testcase', expected: '20 5 19 20 3 1 19 5' }
    ]
      //act 
      testCases.forEach(({input, expected}) => {
        const actualOutPut = alphabetPosition(input)
        expect(actualOutPut).toBe(expected)
      })
    })
})


describe('alphabetPosition', () => {
    test('full sentences', () => {
        //arrange
        const testCases =  [
            { input: 'the quick brown fox', expected: '20 8 5 17 21 9 3 11 2 18 15 23 14 6 15 24'},
            { input: 'jumped over the lazy dog', expected: '10 21 13 16 5 4 15 22 5 18 20 8 5 12 1 26 25 4 15 7'},
            { input: 'coding is fun', expected: '3 15 4 9 14 7 9 19 6 21 14'},
            { input: 'i love programming', expected: '9 12 15 22 5 16 18 15 7 18 1 13 13 9 14 7'},
            { input: 'practice makes perfect', expected: '16 18 1 3 20 9 3 5 13 1 11 5 19 16 5 18 6 5 3 20'},
        
    ]
      //act 
      testCases.forEach(({input, expected}) => {
        const actualOutPut = alphabetPosition(input)
        expect(actualOutPut).toBe(expected)
      })
    })
})