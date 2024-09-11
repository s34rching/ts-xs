import * as colorsMap from './color-map.json'

interface ColorsMap {
  [name: string]: number
}

const getResistorCode = (mixedColor: string): number => {
  try {
    const colors = mixedColor.split('-')
    const [firstColor, secondColor] = colors
    const code = `${(colorsMap as ColorsMap)[firstColor]}${(colorsMap as ColorsMap)[secondColor]}`

    return Number.parseInt(code, 10)
  } catch (error) {
    throw new Error('Something went wrong')
  }
}

getResistorCode('yellow-black')
