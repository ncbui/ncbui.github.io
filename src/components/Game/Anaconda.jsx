import Point from "./Point";
/** Anaconda. Central actor in game: moves, eats pellets, and grows.
 *
 * @param conda - an array of Points in the Anaconda
 * @param direction - direction conda is currently moving in: right, left, up, down
 *
 **/
export default class Anaconda {
    constructor() {
        this.conda = Anaconda.defaultAnaconda(); // list of Points() in conda body
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
    return this.conda[0];
    }

    draw(ctx){
        this.conda.forEach((p) =>{
            p.draw(ctx)})
    }

    move(){
        let newHead;
        newHead = this._calculateNewHead()
        this.conda.unshift(newHead);
        this.conda.pop();
    }
    checkOutOfBounds(width, height){
        return this.head().isOutOfBound(width, height)
    }
    gameOver(width,height){
        return this.checkOutOfBounds(width, height)
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