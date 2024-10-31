// import {generateRobotName} from "./generate-robot-name";

export class Robot {
  static usedNames = new Set()
  public name: string | null

  private generateName(): string {
    let name: string
    const LETTERS = 'abcdefghijklmnopqrstuvwxyz'
    const POSTFIX_MAX_NUMBER = 10
    const symbols = LETTERS.split('')

    const prefixSymbols = Array.from(Array(2)).map((_) => {
      const index = Math.floor(Math.random() * symbols.length)
        return symbols[index]
    })

    const postfixSymbols = Array.from(Array(3)).map((_) => {
      return Math.floor(Math.random() * POSTFIX_MAX_NUMBER)
    })

    name = [...prefixSymbols, ...postfixSymbols].join('').toUpperCase()

    while (Robot.usedNames.has(name)) {
      name = this.generateName()
    }

    return name
  }

  constructor() {
    this.name = null
  }

  start() {
    const newName = this.generateName()

    Robot.usedNames.add(newName)
    this.name = newName
  }

  reset() {
    this.name = null
  }
}
