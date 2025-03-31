import {WIDTH,HEIGHT,SCALE, randomRangeTenths} from './constants'
/** Point: a single element on the game board.
 *
 * This is used to draw a circle on the game board at x,y. It is used by both
 * the food Pellet class (which has one point), and by the Snake class (which
 * has a point for each link in the snake).
 *
 * x - x coord (0 is left)
 * y - y coord (0 is top)
 * color - color of the point; default green
 * 
 * */
export default class Point {
    constructor({x,y,color='green'}) {
        if (typeof x !== 'number' || isNaN(x)) {
            throw new Error('x must be a number', typeof x);
          }
          if (typeof y !== 'number' || isNaN(y)) {
            throw new Error('y must be a number', typeof y);
          }
      this.x = x;
      this.y = y;
      this.color = color;
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
    static newRandom(color, width=WIDTH*SCALE, height=HEIGHT*SCALE) {
        const point = new Point({
            x: randomRangeTenths(0, width), 
            y: randomRangeTenths(0, height),
            color: color,
        })
        return point;
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