export const WIDTH = 20;
export const HEIGHT = 20;
export const SCALE = 15;
export const FPS = 5;

export const gameOverText = (context) => {
    context.textAlign = 'center'
    context.fillStyle = 'white'
    context.font = '34px Tourney Variable'
    context.fillText('ouch', ((WIDTH * SCALE) / 2), ((HEIGHT * SCALE) / 2 - (2 * SCALE)))
    context.font = '18px Tourney Variable'
    context.fillText(`caterpillar is in a bind`, ((WIDTH * SCALE) / 2), ((HEIGHT * SCALE) / 2 + (2 * SCALE)))
}

export const drawCanvas = (context) => {
    const {width, height} = context
    context.save()
    context.clearRect(0, 0, width, height)
}

export const randomRangeTenths = (min, max) => {
    const adjustedMin = Math.floor(min / 10) * 10 // round down to nearest 10th
    const adjustedMax = Math.ceil(max / 10) * 10 // round up to nearest 10th
    const steps = (adjustedMax - adjustedMin) / 10;
    return adjustedMin + (Math.ceil(Math.random() * steps) * 10)
}