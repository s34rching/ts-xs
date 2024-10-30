import fs from 'node:fs'

export const generatePrefix = (): string => {
  const letters = 'abcdefghijklmnopqrstuvwxyz'

  const firstIndex = Math.floor(Math.random() * letters.length)
  const secondIndex = Math.floor(Math.random() * letters.length)
  const firstSymbol = letters[firstIndex].toUpperCase()
  const secondSymbol = letters[secondIndex].toUpperCase()

  return `${firstSymbol}${secondSymbol}`
}

export const generatePostfix = (): string => {
  const MAX_NUMBER = 10

  const sequence = Array.from(Array(3))
  const postfixNumbers = sequence.map((_) => {
    return Math.floor(Math.random() * MAX_NUMBER).toString(10)
  })

  return postfixNumbers.join('')
}

export const generateRobotName = () => {
  const ROBOT_NAMES_FILE_PATH = 'data/robots.txt'

  let newName = `${generatePrefix()}${generatePostfix()}`

  if (fs.existsSync(ROBOT_NAMES_FILE_PATH)) {
    const contents = fs.readFileSync(ROBOT_NAMES_FILE_PATH, 'utf-8')
    const takenNames = contents.trim().split('\n')

    while (takenNames.includes(newName)) {
      newName = `${generatePrefix()}${generatePostfix()}`
    }

    takenNames.push(newName)
    const newContents = takenNames.join('\n').trim()

    fs.writeFileSync(ROBOT_NAMES_FILE_PATH, newContents, 'utf-8')
  } else {
    fs.writeFileSync(ROBOT_NAMES_FILE_PATH, newName, 'utf-8')
  }

  return newName
}
