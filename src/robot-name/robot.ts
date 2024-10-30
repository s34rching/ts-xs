import {generateRobotName} from "./generate-robot-name";

export class Robot {
  name: string | null

  constructor() {
    this.name = null
  }

  start() {
    this.name = generateRobotName()
  }

  reset() {
    this.name = null
  }
}
