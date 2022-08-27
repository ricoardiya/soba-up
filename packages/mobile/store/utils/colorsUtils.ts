import randomUtils from "./randomUtils";

const NUMBER_OF_COLORS = 15
const NUMBER_OF_RED = 1
const NUMBER_OF_BLUE = 3
const RED = 'red'
const WHITE = 'white'
const BLUE = 'blue'


const generateColors = (numberOfColors: number): Array<string> => {
  let colors: Array<string> = []
  let red = NUMBER_OF_RED
  let blue = NUMBER_OF_BLUE
  for (let i = 0; i < numberOfColors; i++) {
        // Make sure red is always in the grid
        if (i == numberOfColors - 1) {
            if (red > 0) {
                colors = [...colors, RED]
                red = red - 1
                continue
            }
        }
        const color = randomUtils.getRandomInt(10)
        if (color === 0) {
            if (red > 0) {
                colors = [...colors, RED]
                red = red - 1
                continue
            }
        }
        if (color === 1) {
            if (blue > 0) {
                colors = [...colors, BLUE]
                blue = blue - 1
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
    RED,
    BLUE,
    WHITE
}
