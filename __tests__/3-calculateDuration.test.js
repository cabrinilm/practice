const calculateDuration = require('../practice/3.calculateDuration')

describe('calculateDuration()', () => {
    test('intenger numbers ', () => {
        const input = '23:00'
        const input2 = '07:00'
        const expectedOutput = '8.00'

        const actualOutput = calculateDuration(input,input2)

        expect(actualOutput).toBe(expectedOutput)
    })
    test('intenger numbers', () => {  
        const testCases = [
             { input1: '22:00', input2: '06:00', expected: '8.00' },
            { input1: '23:00', input2: '07:00', expected: '8.00' },
              { input1: '00:00', input2: '08:00', expected: '8.00' },
           
          ];

          testCases.forEach(({input1, input2, expected}) => {
            const actualOutput = calculateDuration(input1, input2)
            expect(actualOutput).toEqual(expected)
          })

    })
})

describe('calculateDuration()', () => {
    test('hours with decimal number ', () => {
        const input = '22:45'
        const input2 = '07:00'
        const expectedOutput = '8.25'

        const actualOutput = calculateDuration(input,input2)

        expect(actualOutput).toBe(expectedOutput)
    })
    test('intenger numbers', () => {  
        const testCases = [
            // Integers 
            { input1: '22:00', input2: '06:00', expected: '8.00' },
            { input1: '23:00', input2: '07:00', expected: '8.00' },
            { input1: '00:00', input2: '08:00', expected: '8.00' },
            { input1: '12:00', input2: '20:00', expected: '8.00' },
          
            // Decimais 
            { input1: '22:15', input2: '06:00', expected: '7.75' },
            { input1: '23:30', input2: '07:15', expected: '7.75' },
            { input1: '00:45', input2: '08:30', expected: '7.75' },
            { input1: '12:15', input2: '20:45', expected: '8.50' },
          
            // Overnight with fractional times
            { input1: '21:45', input2: '06:15', expected: '8.50' },
            { input1: '22:30', input2: '05:45', expected: '7.25' },
          
            // Same start and end times (no sleep)
            { input1: '00:00', input2: '00:00', expected: '0.00' },
          
            // Edge cases
            
            { input1: '23:00', input2: '00:30', expected: '1.50' },
            { input1: '11:00', input2: '11:15', expected: '0.25' },
          ];

          testCases.forEach(({input1, input2, expected}) => {
            const actualOutput = calculateDuration(input1, input2)
            expect(actualOutput).toEqual(expected)
          })

     })
})