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
            { x: 60, y: 60,},
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
    /** Returns true if point matches with conda parts */
    contains(point){
        return this.conda.some(part => part.x === point.x && part.y === point.y);
    }
    /** Returns true if point matches with conda parts */
    checkEatSelf(head=this.head()){
        let body=this.conda.slice(1)
        return body.some(part => part.x === head.x && part.y === head.y);
    }
    checkOutOfBounds(width, height){
        return this.head().isOutOfBound(width, height)
    }
    gameOver(width,height, newHead){
        return this.checkOutOfBounds(width, height) || this.checkEatSelf(newHead)
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