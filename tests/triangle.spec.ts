import * as messages from "../src/triangle/messages.json"
import {defineTriangleType, validateSides} from "../src/triangle/triangle"

describe("Triangle", () => {
  const scaleneSides = [2, 3, 4]
  const equilateralSides = [7, 7, 7]
  const isoscelesSides = [5, 5, 4]
  const notEnoughSides = [2, 3]
  const tooManySides = [2, 3, 4, 5, 6]
  const withZeroLengthSide = [0, 10, 13]
  const invalidSides = [1000, 1, 2]

  describe("'validateSides'", () => {
    test('should pass valid triangle sides data', () => {
      expect(validateSides(scaleneSides)).toEqual({isTriangle: true, message: messages.success.valid})
    })

    test('should reject if not enough sides values provided', () => {
      expect(validateSides(notEnoughSides)).toEqual({isTriangle: false, message: messages.errors.notEnoughSides})
    })

    test('should reject if too many sides values provided', () => {
      expect(validateSides(tooManySides)).toEqual({isTriangle: false, message: messages.errors.tooManySides})
    })

    test('should reject if any side length equal to zero', () => {
      expect(validateSides(withZeroLengthSide)).toEqual({isTriangle: false, message: messages.errors.zeroLengthSide})
    })

    test('should reject if side composition does not produce triangle', () => {
      expect(validateSides(invalidSides)).toEqual({isTriangle: false, message: messages.errors.invalidSides})
    })
  })

  describe("'defineTriangleType'", () => {
    test('should identify equilateral triangle', () => {
      expect(defineTriangleType(equilateralSides)).toEqual({isTypeDefined: true, result: messages.success.equilateral})
    })

    test('should identify isosceles triangle', () => {
      expect(defineTriangleType(isoscelesSides)).toEqual({isTypeDefined: true, result: messages.success.isosceles})
    })

    test('should identify scalene triangle', () => {
      expect(defineTriangleType(scaleneSides)).toEqual({isTypeDefined: true, result: messages.success.scalene})
    })

    test('should return message if not enough sides values provided', () => {
      expect(defineTriangleType(notEnoughSides)).toEqual({isTypeDefined: false, result: messages.errors.notEnoughSides})
    })

    test('should return message if too many sides values provided', () => {
      expect(defineTriangleType(tooManySides)).toEqual({isTypeDefined: false, result: messages.errors.tooManySides})
    })

    test('should return message if any side length equal to zero', () => {
      expect(defineTriangleType(withZeroLengthSide)).toEqual({isTypeDefined: false, result: messages.errors.zeroLengthSide})
    })

    test('should return message if side composition does not produce triangle', () => {
      expect(defineTriangleType(invalidSides)).toEqual({isTypeDefined: false, result: messages.errors.invalidSides})
    })
  })
})
