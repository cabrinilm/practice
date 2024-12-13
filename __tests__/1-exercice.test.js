
const makeCapitalLetters = require('../practice/1-capitalLetter');



describe('makeCapitalLetters', () => {
    test('simple case', () => {
        //arrage
        const input = 'hello'
        const expectOutPut = 'Hello'
        // act 
        const actualOutPut = makeCapitalLetters(input)
        // assert 
        expect(actualOutPut).toBe(expectOutPut)
    })  
})