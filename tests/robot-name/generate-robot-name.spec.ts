import {generatePostfix, generatePrefix, generateRobotName} from "../../src/robot-name/generate-robot-name";

describe('Generate Robot Name', () => {
  describe('"generatePrefix"', () => {
    it('should generate prefix', () => {
      const prefix = generatePrefix()

      expect(prefix.length).toEqual(2)
      expect(prefix).toEqual(expect.stringMatching(/[A-Z]{2}/))
    })
  })

  describe('"generatePostfix"', () => {
    it('should generate postfix', () => {
      const prefix = generatePostfix()

      expect(prefix.length).toEqual(3)
      expect(prefix).toEqual(expect.stringMatching(/[0-9]{3}/))
    })
  })

  describe('"generateRobotName"', () => {
    it('should generate robot name', () => {
      const prefix = generateRobotName()

      expect(prefix!.length).toEqual(5)
      expect(prefix).toEqual(expect.stringMatching(/[A-Z]{2}[0-9]{3}/))
    })
  })
})
