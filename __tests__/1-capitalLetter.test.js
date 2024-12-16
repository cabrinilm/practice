
const makeCapitalLetters = require("../practice/1-capitalLetter");


describe("makeCapitalLetters", () => {
  test("simple case", () => {
    //arrage
    const input = "hello";
    const expectOutPut = "Hello";
    // act
    const actualOutPut = makeCapitalLetters(input);
    // assert
    expect(actualOutPut).toBe(expectOutPut);
  });
  test("simple case, but various case", () => {
    //arrage
   const testCases = [
    {input: 'hello', expected: 'Hello'},
    { input: 'Hello', expected: 'Hello' },
    { input: 'hELLo', expected: 'HELLo' },
]
    // act
    testCases.forEach(({input, expected}) => {
        const actualOutput = makeCapitalLetters(input);
        expect(actualOutput).toBe(expected)
    });
  });
});

describe('makeCapitalLetters', () => {
    test(' capitalise  two words', () => {
        //arrange
        const input = 'hey luca';
        const expectOutPut = 'Hey Luca';
        //act 
        const actualOutPut = makeCapitalLetters(input);
        //assert 
        expect(actualOutPut).toBe(expectOutPut)

    })
    test('two word, but various case', () => {
        //arrange
        const testCases = [
            {input: 'hey student', expected: 'Hey Student'},
            {input: 'hey dog', expected: 'Hey Dog'},
            {input: 'hey cat', expected: 'Hey Cat'},
            {input: 'hey bird', expected: 'Hey Bird'},
        ]
        // act & asset
        testCases.forEach(({input, expected}) => {
            const actualOutPut = makeCapitalLetters(input);
            expect(actualOutPut).toBe(expected)
        });
    });
});
describe('makeCapitalLetters', () => {
    test('capitalise full phrases', () => {
        //arrange
        const input = 'hey luca, i hope you doing well';
        const expectOutPut = 'Hey Luca, I Hope You Doing Well';
        //act 
        const actualOutPut = makeCapitalLetters(input);
        //assert 
        expect(actualOutPut).toBe(expectOutPut)
    })
        //arrange
        const testCases = [
            { input: 'hello world, this is a test', expected: 'Hello World, This Is A Test' },
            { input: 'javascript is fun', expected: 'Javascript Is Fun' },
            { input: 'how are you today?', expected: 'How Are You Today?' },
            { input: 'let us make this work!', expected: 'Let Us Make This Work!' }
        ];

        // act & assert
        testCases.forEach(({ input, expected }) => {
            const actualOutPut = makeCapitalLetters(input);
            expect(actualOutPut).toBe(expected);
        });

    });



  
