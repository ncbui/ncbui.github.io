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
    constructor(p, color = 'goldenrod') {
      this.x = p.x;
      this.y = p.y;
      this.color = color
    }
    draw(ctx, color=this.color){
        ctx.fillStyle = color;
        // Set the border colour of the snake part
        ctx.strokestyle = color;
        // Draw a "filled" rectangle to represent the point at the coordinates
        ctx.fillRect(this.x, this.y, 10, 10);
        // Draw a border around the point
        ctx.strokeRect(this.x, this.y, 10, 10);
    }
    /** Return t/f if this point is outside of the game board coords. */
    isOutOfBound(width,height) {
        return (this.x <= 0 || this.x >= width || this.y <= 0 || this.y >= height);
    }
    /** Make a point at a random x,y and return it. */
    static newRandom(width,height, color=this.color) {
        const randRange = (low, hi) => low + Math.floor(((Math.random()/10 * (hi - low))))*10;
        return new Point({x: randRange(10, width), y: randRange(10, height)},color);
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