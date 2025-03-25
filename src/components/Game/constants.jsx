export const WIDTH = 25;
export const HEIGHT = 20;
export const SCALE = 15;
export const FPS = 5;

export const gameOverText = (context) => {
    context.textAlign = 'center'
    context.fillStyle = 'white'
    context.font = '34px serif'
    context.fillText('ouch', ((WIDTH * SCALE) / 2), ((HEIGHT * SCALE) / 2 - (2 * SCALE)))
    context.font = '18px serif'
    context.fillText(`caterpillar bit itself in its confusion`, ((WIDTH * SCALE) / 2), ((HEIGHT * SCALE) / 2 + (2 * SCALE)))
}

export const drawCanvas = ( context) => {
    context.save()
    context.clearRect(0, 0, WIDTH*SCALE, HEIGHT*SCALE)
}