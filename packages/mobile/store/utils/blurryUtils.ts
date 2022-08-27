const NUMBER_OF_CIRCLES = 12;
const MIN_BLUR = 4;
const MAX_BLUR = 7;
const BLUR = "blur";
const NON_BLUR = "nonBlur"

const getRandom = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const shuffle = (array: Array<string>) => {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

const generateBlurCircles = (numCircles: number) => {
    const numBlur = getRandom(MIN_BLUR, MAX_BLUR);
    const blurArr = Array(numBlur).fill(BLUR);
    const nonBlurArr = Array(numCircles - numBlur).fill(NON_BLUR);
    const circleArr = shuffle(blurArr.concat(nonBlurArr));
    return circleArr;
}

export default {
    generateBlurCircles,
    NUMBER_OF_CIRCLES,
    BLUR,
    NON_BLUR
};
