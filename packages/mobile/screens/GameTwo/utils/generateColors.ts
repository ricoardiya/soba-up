const NUMBER_OF_RED = 1
const NUMBER_OF_BLUE = 3
const RED = 'red'
const WHITE = 'white'
const BLUE = 'blue'


const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max)
}

const generateColors = (numberOfColors: number): Array<string> => {
    let colors: Array<string> = []
    let red = NUMBER_OF_RED
    let blue = NUMBER_OF_BLUE
    for (let i = 0; i < numberOfColors; i++) {
        // Make sure red is always in the grid
        if (i == numberOfColors - 1) {
            if (red > 0) {
                colors = [...colors, 'red']
                red = red - 1
                continue
            }
        }
        const color = getRandomInt(10)
        if (color === 0) {
            if (red > 0) {
                colors = [...colors, 'red']
                red = red - 1
                continue
            }
        }
        if (color === 1) {
            if (blue > 0) {
                colors = [...colors, 'blue']
                blue = blue - 1
                continue
            }
        }
        colors = [...colors, 'white']
    }
    return colors
}

export default {
    generateColors,
    RED,
    BLUE,
    WHITE
}
