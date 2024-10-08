import * as errors from './errors.json'

interface ValidationResult {
  isValid: boolean,
  error: string | null
}

export const operations = {
  supported: {
    add: {
      name: "plus",
      directive: (num1: number, num2: number) => num1 + num2
    },
    subtract: {
      name: "minus",
      directive: (num1: number, num2: number) => num1 - num2
    },
    multiply: {
      name: "multiplied by",
      directive: (num1: number, num2: number) => num1 * num2
    },
    divide: {
      name: "divided by",
      directive: (num1: number, num2: number) => num1 / num2
    },
  },
  unsupported: {
    cube: {
      name: "cubed",
    },
    squareRoot: {
      name: "square root"
    },
    power: {
      name: "power of"
    },
    exponent: {
      name: "exponent"
    },
    modulo: {
      name: "modulo"
    }
  }
}

export const parseNumbers = (request: string): (number[] | null) => {
  const numberPattern = /\d+/g;
  const numbers = request.match(numberPattern)

  return Array.isArray(numbers)
    ? numbers.map((extractedNumber) => Number.parseInt(extractedNumber, 10))
    : null
}

export const parseOperations = (request: string): (string[] | null) => {
  const {add, subtract, multiply, divide} = operations.supported
  const validationPattern = new RegExp(`(${add.name}|${subtract.name}|${multiply.name}|${divide.name})`, 'g')

  return request.match(validationPattern)
}

export const hasUnsupportedOperations = (request: string): boolean => {
  const {cube, modulo, power, squareRoot, exponent} = operations.unsupported
  const validationPattern = new RegExp(`(${cube.name}|${modulo.name}|${power.name}|${squareRoot.name}|${exponent.name})`)
  const verdict = request.match(validationPattern)

  return Array.isArray(verdict)
}

export const validateRequest = (request: string): ValidationResult => {
  const nums = parseNumbers(request)
  const ops = parseOperations(request)

  if (nums === null) {
    return { isValid: false, error: errors.missingNumbers }
  }

  if (ops === null && (Array.isArray(nums) && nums!.length > 1)) {
    return { isValid: false, error: errors.missingOperations }
  }

  if (hasUnsupportedOperations(request)) {
    return { isValid: false, error: errors.unsupportedOperations }
  }

  if (Array.isArray(nums) && nums.length! > 1 && Array.isArray(ops) && (nums.length! - 1 !== ops.length!)) {
    return { isValid: false, error: errors.invalidOperandsAmount }
  }

  return { isValid: true, error: null }
}

export const calculate = (nums: number[], ops: string[]): number => {
  const allOperations = Object.values(operations.supported)
  let result = nums[0]

  ops.forEach((op, index) => {
    const currentOperation = allOperations.find((o) => op === o.name)
    result = currentOperation!.directive(result, nums[index + 1])
  })

  return result
}

export const evaluate = (request: string): (number | number[] | string | null | undefined) => {
  const resolution = validateRequest(request)

  if (resolution.isValid) {
    const nums = parseNumbers(request)!
    const ops = parseOperations(request)!

    if (nums!.length === 1) {
      return nums![0]
    }

    return calculate(nums, ops)
  } else {
    return resolution.error
  }
}
