import {calculate, evaluate, parseNumbers, parseOperations, validateRequest} from "../src/wordy/wordy";

describe('Wordy', () => {
  const validWithoutOperationRequest = 'What is 5?'
  const validSimpleRequest = 'What is 4 plus 3?'
  const validComplexRequest = 'What is 58 plus 5 multiplied by 7 minus 765?'
  const invalidWithoutNumbers = 'What is the universal truth?'
  const invalidWithoutOperations = 'What is 5 reflected to 6?'
  const invalidWithUnsupportedOperation = 'What is the square root of 6?'

  describe('parseNumbers', () => {
    test('should return number if there is one in request', () => {
      expect(parseNumbers(validWithoutOperationRequest)).toStrictEqual([5])
    })

    test('should return numbers for simple operation', () => {
      expect(parseNumbers(validSimpleRequest)).toStrictEqual([4, 3])
    })

    test('should return all numbers', () => {
      expect(parseNumbers(validComplexRequest)).toStrictEqual([58, 5, 7, 765])
    })

    test('should return "null" if there is not number in request', () => {
      expect(parseNumbers(invalidWithoutNumbers)).toBeNull()
    })
  })

  describe('parseOperations', () => {
    test('should return the only operation', () => {
      expect(parseOperations(validSimpleRequest)).toStrictEqual(['plus'])
    })

    test('should return all operations', () => {
      expect(parseOperations(validComplexRequest))
        .toStrictEqual(['plus', 'multiplied by','minus'])
    })

    test('should return null if there is not any operation', () => {
      expect(parseOperations(validWithoutOperationRequest)).toBeNull()
    })
  })

  describe('validateRequest', () => {
    test('should pass validation', () => {
      expect(validateRequest(validSimpleRequest)).toEqual({ isValid: true, error: null })
    })

    test('should pass validation if supported operations are not found but number is present', () => {
      expect(validateRequest(validWithoutOperationRequest)).toEqual({ isValid: true, error: null })
    })

    test('should reject request if numbers are not found', () => {
      expect(validateRequest(invalidWithoutNumbers))
        .toEqual({ isValid: false, error: 'Request does not contain numbers' })
    })

    test('should reject request if supported operations are not found and there are numbers', () => {
      expect(validateRequest(invalidWithoutOperations))
        .toEqual({ isValid: false, error: 'Request does not contain supported operations' })
    })

    test('should reject request if unsupported operation is found', () => {
      expect(validateRequest(invalidWithUnsupportedOperation))
        .toEqual({ isValid: false, error: 'Request has unsupported operation' })
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
    test('should return result of simple operation', () => {
      expect(evaluate(validSimpleRequest)).toEqual(7)
    })

    test('should return result of complex operation', () => {
      expect(evaluate(validComplexRequest)).toEqual(-324)
    })

    test('should return result if there is the only number without operation', () => {
      expect(evaluate(validWithoutOperationRequest)).toEqual(5)
    })

    test('should return error message if there is not number in request', () => {
      expect(evaluate(invalidWithoutNumbers)).toEqual('Request does not contain numbers')
    })

    test('should return error message if supported operations are not found and there are numbers', () => {
      expect(evaluate(invalidWithoutOperations)).toEqual('Request does not contain supported operations')
    })

    test('should return error message if unsupported operation is found', () => {
      expect(evaluate(invalidWithUnsupportedOperation)).toEqual('Request has unsupported operation' )
    })
  })
})

