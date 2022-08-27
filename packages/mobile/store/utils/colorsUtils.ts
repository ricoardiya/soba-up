import randomUtils from './randomUtils'
import colors from '../../config/colors'

const NUMBER_OF_COLORS = 15
const NUMBER_OF_TARGET = 1
const NUMBER_OF_DECOY = 3
const DECOY = colors.RED_CIRCLE
const WHITE = 'white'
const TARGET = colors.GREEN_CIRCLE

const generateColors = (numberOfColors: number): Array<string> => {
  let colors: Array<string> = []
  let target = NUMBER_OF_TARGET
  let decoy = NUMBER_OF_DECOY
  for (let i = 0; i < numberOfColors; i++) {
    // Make sure red is always in the grid
    if (i == numberOfColors - 1) {
      if (target > 0) {
        colors = [...colors, TARGET]
        target = target - 1
        continue
      }
    }
    const color = randomUtils.getRandomInt(10)
    if (color === 0) {
      if (target > 0) {
        colors = [...colors, TARGET]
        target = target - 1
        continue
      }
    }
    if (color === 1) {
      if (decoy > 0) {
        colors = [...colors, DECOY]
        decoy = decoy - 1
        continue
      }
    }
    colors = [...colors, WHITE]
  }
  return colors
}

export default {
  generateColors,
  NUMBER_OF_COLORS,
  DECOY,
  TARGET,
  WHITE
}
