import { theme } from "../../template/theme";

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
    constructor(p) {
      this.x = p.x;
      this.y = p.y;
    }

    draw(ctx, color=theme.palette.primary.bright){
        ctx.fillStyle = color;
        // Set the border colour of the snake part
        ctx.strokestyle = theme.palette.primary.headers;
        // Draw a "filled" rectangle to represent the point at the coordinates
        // the part is located
        ctx.fillRect(this.x, this.y, 10, 10);
        // Draw a border around the point
        ctx.strokeRect(this.x, this.y, 10, 10);
    }

    /** Return t/f if this point is outside of the game board coords. */
    isOutOfBound(width,height) {
        return (this.x <= 0 || this.x >= width || this.y <= 0 || this.y >= height);
    }
}