import {Robot} from "../src/robot-name/robot";

describe('"Robot"', () => {
  const namePattern = /[A-Z]{2}[0-9]{3}/

  it('should have name while turned on', () => {
    const robot = new Robot()
    robot.start()

    expect(robot.name).toEqual(expect.stringMatching(namePattern))
  })

  it('should nullify robot name if robot is reset', () => {
    const robot = new Robot()
    robot.start()
    robot.reset()

    expect(robot.name).toEqual(null)
  })

  it('should generate another name while turned on after restart', () => {
    const robot = new Robot()
    robot.start()
    const initialName = robot.name
    robot.reset()
    const resetName = robot.name
    robot.start()
    const newName = robot.name

    expect(initialName).toEqual(expect.stringMatching(namePattern))
    expect(resetName).toEqual(null)
    expect(newName).toEqual(expect.stringMatching(namePattern))
    expect(initialName).not.toEqual(newName)
  })
})
