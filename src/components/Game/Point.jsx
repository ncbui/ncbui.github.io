import {WIDTH,HEIGHT,SCALE} from './constants'
/** Point: a single element on the game board.
 *
 * This is used to draw a circle on the game board at x,y. It is used by both
 * the food Pellet class (which has one point), and by the Snake class (which
 * has a point for each link in the snake).
 *
 * x - x coord (0 is left)
 * y - y coord (0 is top)
 *
 * */
export default class Point {
    constructor(props) {
      this.x = props.x;
      this.y = props.y;
      this.color = props.color
    }
    draw(ctx, color=this.color){
        ctx.fillStyle = color;
        ctx.strokestyle = color;
        ctx.fillRect(this.x, this.y, 10, 10);
        ctx.strokeRect(this.x, this.y, 2, 1);
    }
    /** Return t/f if this point is outside of the game board coords. */
    isOutOfBound() {
        return (this.x <= 0 || this.x >= WIDTH*SCALE || this.y <= 0 || this.y >= HEIGHT*SCALE);
    }
    /** Return new point at a random x,y. */
    static newRandom(color=this.color) {
        const randRange = (low, hi) => low + Math.floor(((Math.random()/10 * (hi - low))))*10;
        return new Point({x: randRange(10, WIDTH*SCALE-10), y: randRange(10, HEIGHT*SCALE-10)},color);
    }
    /** Return Manhattan distance to another point*/
    distanceFrom(pt) {
        const dx = Math.abs(this.x - pt.x);
        const dy = Math.abs(this.y - pt.y);
        const D = 1; // cost for moving from one space to next;  using simple case
        return parseFloat(D * (dx + dy));
    }

    /** Return object containing a vector to another point */
    vectorTo(pt) {
        return {
        x: (this.x - pt.x),
        y: (this.y - pt.y),
        }
    }
}