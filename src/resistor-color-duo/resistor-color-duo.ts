import * as colorsMap from './color-map.json'

interface ColorsMap {
  [name: string]: number
}

export const getResistorCode = (mixedColor: string): number => {
  try {
    const [firstColor, secondColor] = mixedColor.split('-')
    const code = `${(colorsMap as ColorsMap)[firstColor]}${(colorsMap as ColorsMap)[secondColor]}`

    return Number.parseInt(code, 10)
  } catch (error) {
    throw new Error('Something went wrong')
  }
}

getResistorCode('yellow-black')
