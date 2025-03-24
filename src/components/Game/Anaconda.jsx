import Point from "./Point";
/** Anaconda. Central actor in game: moves, eats pellets, and grows.
 *
 * @param snake - an array of Points in the snake
 * @param direction - direction snake is currently moving in: right, left, up, down
 *
 **/
export default class Anaconda {
    constructor() {
        this.snake = Anaconda.defaultAnaconda(); // list of Points() in snake body
        this.direction = "down"; // direction of travel
      }

      static defaultAnaconda() {
        let defaultPoints = [
            { x: 60, y: 100,},
            { x: 50, y: 100,},
            { x: 40, y: 100,},
            { x: 30, y: 100,},
            { x: 20, y: 100,}
        ].map((p)=>new Point(p))
        return defaultPoints
    }
      
    head() {
    return this.snake[0];
    }

    draw(ctx){
        this.snake.forEach((p) =>{
            p.draw(ctx)})
    }

    move(){
        let newHead;
        newHead = this._calculateNewHead()
        this.snake.unshift(newHead);
        this.snake.pop();
    }

    outOfBounds(width, height){
        return this.head().isOutOfBound(width, height)
    }

    _calculateNewHead(currentHead = this.head()) {
    let newHead;
        if (this.direction == "right") {
            newHead = new Point({x: currentHead.x + 10, y: currentHead.y + 0})
        } else if (this.direction == "left") {
            newHead = new Point({x: currentHead.x - 10, y: currentHead.y +0})
        } else if (this.direction == "down") {
            newHead = new Point({x: currentHead.x + 0, y: currentHead.y +10})
        } else if (this.direction == "up") {
            newHead = new Point({x: currentHead.x + 0, y: currentHead.y -10})
        } else { 
            newHead = this.head()}
    return newHead;
    }
}