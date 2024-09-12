import {getResistorCode} from "../src/resistor-color-duo/resistor-color-duo";

test('should return color code', () => {
  const expectedCode = 16

  expect(getResistorCode('brown-blue')).toEqual(expectedCode)
})
