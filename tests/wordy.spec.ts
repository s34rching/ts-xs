import {calculate, evaluate, parseNumbers, parseOperations, validateRequest} from "../src/wordy/wordy";

describe('Wordy', () => {
  describe('parseNumbers', () => {
    test('should return number if there is one in request', () => {
      const expectedNumber = [5]

      expect(parseNumbers('What is 5?')).toStrictEqual(expectedNumber)
    })

    test('should return numbers for simple operation', () => {
      const expectedNumbers = [5, 5]

      expect(parseNumbers('What is 5 plus 5')).toStrictEqual(expectedNumbers)
    })

    test('should return all numbers', () => {
      const expectedNumbers = [58, 5, 7, 765]

      expect(parseNumbers('What is 58 plus 5 multiplied by 7 minus 765')).toStrictEqual(expectedNumbers)
    })

    test('should return "null" if there is not number in request', () => {
      expect(parseNumbers('What is the problem?')).toBeNull()
    })
  })

  describe('parseOperations', () => {
    test('should return the only operation', () => {
      expect(parseOperations('What is 5 multiplied by 6')).toStrictEqual(['multiplied by'])
    })

    test('should return all operations', () => {
      expect(parseOperations('What is 5 multiplied by 6 plus 2 minus 3'))
        .toStrictEqual(['multiplied by', 'plus','minus'])
    })
  })

  describe('validateRequest', () => {
    test('should pass validation', () => {
      const request = 'What is 5 plus 44'

      expect(validateRequest(request)).toEqual({ isValid: true, error: null })
    })

    test('should pass validation if supported operations are not found but number is present', () => {
      const request = 'What is 5?'

      expect(validateRequest(request)).toEqual({ isValid: true, error: null })
    })

    test('should reject request if supported operations are not found and there numbers', () => {
      const request = 'What is 5 qwerty 6?'

      expect(validateRequest(request)).toEqual({ isValid: false, error: 'Request does not contain supported operations' })
    })

    test('should reject request if unsupported operation is found', () => {
      const request = 'What is square root of 6?'

      expect(validateRequest(request)).toEqual({ isValid: false, error: 'Request has unsupported operation' })
    })
  })

  describe('calculate', () => {
    test('should return result of simple operation', () => {
      expect(calculate([4, 5], ['plus'])).toEqual(9)
    })

    test('should return result of complex operation', () => {
      expect(calculate([4, 5, 6], ['plus', 'multiplied by'])).toEqual(54)
    })
  })

  describe('evaluate', () => {
    test('should return result', () => {
      expect(evaluate('What is 4 plus 3')).toEqual(7)
    })

    test('should return result if the only number is found', () => {
      expect(evaluate('What is 4?')).toEqual(4)
    })
  })
})

